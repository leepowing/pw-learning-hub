import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const maxDuration = 60;

type MediaRow = {
  id: string;
  user_id: string;
  checkpoint_id: string;
  kind: string;
  task_id: string;
  object_path: string;
  mime_type: string;
  ai_feedback: Record<string, unknown> | null;
};

type ParsedFeedback = {
  transcription: string;
  uncertain: unknown[];
  strengths: unknown[];
  improvements: unknown[];
  provisional_score: number;
  score_reason: string;
};

const schema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'transcription',
    'uncertain',
    'strengths',
    'improvements',
    'provisional_score',
    'score_reason',
  ],
  properties: {
    transcription: { type: 'string' },
    uncertain: {
      type: 'array',
      items: { type: 'string' },
    },
    strengths: {
      type: 'array',
      items: { type: 'string' },
    },
    improvements: {
      type: 'array',
      items: { type: 'string' },
    },
    provisional_score: { type: 'integer' },
    score_reason: { type: 'string' },
  },
};

type OpenAIContent = { type?: unknown; text?: unknown };
type OpenAIOutput = { content?: unknown };
type OpenAIResponse = { status?: unknown; output?: unknown };

function extract(value: OpenAIResponse): string {
  const output: OpenAIOutput[] = Array.isArray(value.output)
    ? value.output.filter(
        (item): item is OpenAIOutput =>
          typeof item === 'object' && item !== null
      )
    : [];

  return output
    .flatMap((item) =>
      Array.isArray(item.content) ? item.content : []
    )
    .filter(
      (item): item is OpenAIContent =>
        typeof item === 'object' &&
        item !== null &&
        (item as OpenAIContent).type === 'output_text'
    )
    .map((item) => String(item.text ?? ''))
    .join('');
}

export async function POST(req: Request) {
  try {
    const token =
      req.headers
        .get('authorization')
        ?.match(/^Bearer (.+)$/)?.[1] ?? '';

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';

    const publishableKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';

    const openAIKey =
      process.env.OPENAI_API_KEY ?? '';

    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

    if (!token || !supabaseUrl || !publishableKey) {
      return NextResponse.json(
        { error: '請登入學生帳戶' },
        { status: 401 }
      );
    }

    if (!openAIKey) {
      return NextResponse.json(
        { error: 'AI 尚未設定' },
        { status: 503 }
      );
    }

    if (!serviceRoleKey) {
      return NextResponse.json(
        { error: 'AI 儲存服務尚未設定' },
        { status: 503 }
      );
    }

    const db = createClient(supabaseUrl, publishableKey, {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const authResult = await db.auth.getUser(token);
    const user = authResult.data.user;

    if (authResult.error || !user) {
      return NextResponse.json(
        { error: '登入失效' },
        { status: 401 }
      );
    }

    const userId = user.id;

    const gateResult = await db.rpc('ch3_cp2_eligible', {
      p_uid: userId,
    });

    if (gateResult.error || !gateResult.data) {
      return NextResponse.json(
        { error: '尚未解鎖' },
        { status: 403 }
      );
    }

    const body: unknown = await req.json().catch(() => null);

    let mediaId = '';

    if (
      typeof body === 'object' &&
      body !== null &&
      'mediaId' in body
    ) {
      const candidate = (body as { mediaId?: unknown }).mediaId;

      if (typeof candidate === 'string') {
        mediaId = candidate;
      }
    }

    if (!/^[0-9a-f-]{36}$/i.test(mediaId)) {
      return NextResponse.json(
        { error: '檔案編號錯誤' },
        { status: 400 }
      );
    }

    const mediaResult = await db
      .from('chinese_stage3_checkpoint_media')
      .select(
        'id,user_id,checkpoint_id,kind,task_id,object_path,mime_type,ai_feedback'
      )
      .eq('id', mediaId)
      .eq('user_id', userId)
      .eq('checkpoint_id', 'weeks5-8')
      .maybeSingle();

    const media = mediaResult.data as MediaRow | null;

    if (mediaResult.error || !media) {
      return NextResponse.json(
        { error: '沒有找到自己的原稿' },
        { status: 404 }
      );
    }

    if (
      media.kind !== 'speaking' &&
      media.kind !== 'writing'
    ) {
      return NextResponse.json(
        {
          error:
            '本項目由 Daddy 人工核對，不使用 AI 初步評分',
        },
        { status: 400 }
      );
    }

    if (media.ai_feedback) {
      return NextResponse.json({
        ok: true,
        cached: true,
        feedback: media.ai_feedback,
      });
    }

    const checkpointResult = await db
      .from('chinese_stage3_checkpoints')
      .select('submitted_at')
      .eq('user_id', userId)
      .eq('checkpoint_id', 'weeks5-8')
      .maybeSingle();

    const checkpoint = checkpointResult.data as {
      submitted_at: string | null;
    } | null;

    if (checkpoint?.submitted_at) {
      return NextResponse.json(
        {
          error:
            '正式交卷後不能再產生初步評分；請家長覆核原稿',
        },
        { status: 409 }
      );
    }

    const downloadResult = await db.storage
      .from('chinese-checkpoint-private')
      .download(media.object_path);

    const evidenceBlob = downloadResult.data;

    if (downloadResult.error || !evidenceBlob) {
      return NextResponse.json(
        { error: '無法讀取原稿' },
        { status: 404 }
      );
    }

    if (evidenceBlob.size > 8 * 1024 * 1024) {
      return NextResponse.json(
        { error: '檔案太大' },
        { status: 413 }
      );
    }

    let transcript = '';

    if (media.kind === 'speaking') {
      const extension =
        media.mime_type === 'audio/mp4'
          ? 'mp4'
          : media.mime_type === 'audio/wav'
            ? 'wav'
            : 'webm';

      const form = new FormData();

      form.append('model', 'gpt-4o-mini-transcribe');
      form.append('language', 'zh');

      form.append(
        'file',
        new File(
          [await evidenceBlob.arrayBuffer()],
          `speaking.${extension}`,
          { type: media.mime_type }
        )
      );

      const transcriptionResponse = await fetch(
        'https://api.openai.com/v1/audio/transcriptions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${openAIKey}`,
          },
          body: form,
          signal: AbortSignal.timeout(18000),
        }
      );

      if (!transcriptionResponse.ok) {
        console.error(
          '[cp2] transcription failed',
          transcriptionResponse.status
        );

        return NextResponse.json(
          {
            error:
              '粵語辨識服務暫時失敗，請保留原錄音由家長評估',
          },
          { status: 502 }
        );
      }

      const transcriptionData =
        await transcriptionResponse.json();

      transcript = String(
        transcriptionData?.text ?? ''
      ).trim();

      if (!transcript) {
        return NextResponse.json(
          {
            error:
              '未能辨識錄音，請家長檢查原音',
          },
          { status: 422 }
        );
      }
    }

    const prompt =
      media.kind === 'speaking'
        ? `You are assessing Cantonese GCSE-style speaking practice covering food and health, shopping and money, travel and transport, and technology and communication (not an official GCSE mark). Task: ${
            media.task_id === 'role'
              ? 'Ask about a ticket price and departure time, then explain a payment choice.'
              : 'Explain one healthy choice, one useful use of technology, a reason, and one online safety precaution.'
          } Speech recognition is provisional and may mishear Cantonese: ${transcript}. Give fair constructive provisional score 0-10. transcription must equal the actual supplied transcript. Do not penalise natural Hong Kong Cantonese wording or confuse simplified and traditional characters. All feedback in Traditional Chinese.`
        : 'You are assessing a 5–6 sentence handwritten Traditional Chinese composition about a planned day out or journey, including food, money and safe use of technology, for a GCSE preparation checkpoint, not an official GCSE mark. Transcribe only visible handwritten characters, never invent missing words, use □ for uncertainty, and identify uncertain words. Give provisional score 0-10 for task completion, intelligibility, word use and accuracy; do not claim to infer pen stroke order. Comments in Traditional Chinese.';

    const input =
      media.kind === 'speaking'
        ? [
            {
              role: 'user',
              content: [
                {
                  type: 'input_text',
                  text: prompt,
                },
              ],
            },
          ]
        : [
            {
              role: 'user',
              content: [
                {
                  type: 'input_text',
                  text: prompt,
                },
                {
                  type: 'input_image',
                  image_url: `data:${media.mime_type};base64,${Buffer.from(
                    await evidenceBlob.arrayBuffer()
                  ).toString('base64')}`,
                },
              ],
            },
          ];

    const aiResponse = await fetch(
      'https://api.openai.com/v1/responses',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openAIKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model:
            process.env.OPENAI_CHINESE_MODEL ||
            'gpt-4.1-mini',
          store: false,
          max_output_tokens: 2000,
          input,
          text: {
            format: {
              type: 'json_schema',
              name: 'checkpoint2_feedback',
              strict: true,
              schema,
            },
          },
        }),
        signal: AbortSignal.timeout(32000),
      }
    );

    if (!aiResponse.ok) {
      console.error(
        '[cp2] responses failed',
        aiResponse.status
      );

      return NextResponse.json(
        {
          error:
            'AI 評估暫時未能完成，可稍後重試',
        },
        { status: 502 }
      );
    }

    const raw = (await aiResponse.json()) as OpenAIResponse;

    if (raw?.status !== 'completed') {
      return NextResponse.json(
        {
          error:
            'AI 回應尚未完成，請重試',
        },
        { status: 502 }
      );
    }

    let parsed: ParsedFeedback;

    try {
      parsed = JSON.parse(
        extract(raw)
      ) as ParsedFeedback;
    } catch {
      return NextResponse.json(
        { error: 'AI 回應格式無效' },
        { status: 502 }
      );
    }

    if (
      !parsed ||
      typeof parsed.transcription !== 'string' ||
      !Array.isArray(parsed.uncertain) ||
      !Array.isArray(parsed.improvements) ||
      !Array.isArray(parsed.strengths) ||
      typeof parsed.provisional_score !== 'number' ||
      !Number.isFinite(parsed.provisional_score)
    ) {
      return NextResponse.json(
        { error: 'AI 回傳資料不完整' },
        { status: 502 }
      );
    }

    const feedback = {
      transcription:
        parsed.transcription.slice(0, 6000),

      uncertain: parsed.uncertain
        .map(String)
        .slice(0, 12),

      strengths: parsed.strengths
        .map(String)
        .slice(0, 8),

      improvements: parsed.improvements
        .map(String)
        .slice(0, 10),

      provisional_score: Math.max(
        0,
        Math.min(
          10,
          Math.round(parsed.provisional_score)
        )
      ),

      score_reason: String(
        parsed.score_reason ?? ''
      ).slice(0, 1200),
    };

    const saved = await admin
      .from('chinese_stage3_checkpoint_media')
      .update({
        ai_feedback: feedback,
      })
      .eq('id', media.id)
      .eq('user_id', userId)
      .is('ai_feedback', null)
      .select('id')
      .maybeSingle();

    if (saved.error) {
      const databaseError = saved.error;

      console.error('[cp2] feedback save failed', {
        code: databaseError.code,
        message: databaseError.message,
        details: databaseError.details,
        hint: databaseError.hint,
      });

      return NextResponse.json(
        {
          error:
            `AI 完成但未能儲存評語：` +
            `[${databaseError.code}] ` +
            databaseError.message,
        },
        { status: 500 }
      );
    }

    if (!saved.data) {
      return NextResponse.json(
        {
          error:
            'AI 完成但未能儲存評語：更新沒有傳回資料',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      feedback,
      cached: false,
    });
  } catch (error: unknown) {
    console.error(
      '[cp2] assessment error',
      error instanceof Error
        ? `${error.name}: ${error.message}`
        : 'unknown'
    );

    return NextResponse.json(
      {
        error:
          'AI 暫時失敗，原稿仍已保留',
      },
      { status: 500 }
    );
  }
}
