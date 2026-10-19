/* Run: node --test tests/english-writing.test.cjs
 * Uses the project's installed TypeScript compiler. No API calls or credentials.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

function loader(overrides = {}, globals = {}) {
  const cache = new Map();
  function load(file) {
    if (Object.hasOwn(overrides, file)) return overrides[file];
    let absolute;
    if (file.startsWith('@/')) absolute = path.join(root, file.slice(2));
    else if (path.isAbsolute(file)) absolute = file;
    else return require(file);
    if (!path.extname(absolute)) absolute += '.ts';
    if (cache.has(absolute)) return cache.get(absolute).exports;
    const module = { exports: {} }; cache.set(absolute, module);
    const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
    const localRequire = name => load(name.startsWith('.') ? path.resolve(path.dirname(absolute), name) : name);
    const context = { module, exports: module.exports, require: localRequire, console, process, Request, Response, Headers, AbortSignal, setTimeout, clearTimeout, fetch: () => { throw new Error('Unexpected network request'); }, ...globals };
    vm.runInNewContext(code, context, { filename: absolute });
    return module.exports;
  }
  return load;
}
const load = loader();
const { writingTasks, lessons, getWritingTask } = load('@/data/englishWriting/course');
const { validateFeedback, extractResponseText } = load('@/lib/englishWriting/feedback');
const { independentSkills } = load('@/lib/englishWriting/progress');
const answer = 'The gate rattled. I waited beside the wall. A faint light shone through the window.';
function feedback(task, changes = {}) {
  return {
    relevant: true, summary: 'Your scene is clear.', strengths: [{ quote: 'The gate rattled.', explanation: 'This gives a precise sound.' }],
    targets: [{ skill: task.skills[0], quote: 'I waited beside the wall.', action: 'Develop one detail.', question: 'What changed while the character waited?' }],
    annotations: [{ quote: 'The gate rattled.', type: 'strength', explanation: 'Precise verb.', suggestion: '' }],
    skills: task.skills.map(id => ({ id, status: 'practising', explanation: 'Some control is visible.' })),
    ao5: task.kind === 'aqa' ? 14 : null, ao6: task.kind === 'aqa' ? 9 : null,
    ao5Reason: 'Connected details.', ao6Reason: 'Mostly controlled sentences.', revisionReview: [], parentNoteZh: '可集中發展一個細節。', ...changes,
  };
}
test('course covers two baselines, four lessons, four fresh tasks and both sustained paper types', () => {
  assert.equal(writingTasks.filter(t => t.kind === 'baseline').length, 2);
  assert.equal(new Set(writingTasks.map(t => t.id)).size, writingTasks.length);
  for (const lesson of lessons) {
    assert.equal(getWritingTask(lesson.mainTaskId).kind, 'practice');
    assert.equal(getWritingTask(lesson.transferTaskId).kind, 'transfer');
    assert.equal(lesson.checks.length, 3);
  }
  assert.deepEqual(Array.from(writingTasks.filter(t => t.kind === 'aqa').map(t => t.paper)), [1, 2]);
});
test('short writing receives skill feedback and rejects fabricated GCSE marks', () => {
  const task = getWritingTask('week-1-classroom');
  assert.equal(validateFeedback(feedback(task), task, answer, null).ao5, null);
  assert.throws(() => validateFeedback(feedback(task, { ao5: 20 }), task, answer, null), /short practice/);
});
test('invented quotations are rejected rather than displayed as student evidence', () => {
  const task = getWritingTask('baseline-creative');
  assert.throws(() => validateFeedback(feedback(task, { strengths: [{ quote: 'The sun exploded.', explanation: 'Invented.' }] }), task, answer, null), /not in/);
});
test('duplicate or omitted skill rows are rejected', () => {
  const task = getWritingTask('week-1-classroom');
  const result = feedback(task); result.skills[1] = result.skills[0];
  assert.throws(() => validateFeedback(result, task, answer, null), /Duplicate/);
});
test('marks must be bounded integers and Paper 1 off-focus cap is enforced', () => {
  const task = getWritingTask('aqa-creative');
  assert.throws(() => validateFeedback(feedback(task, { ao5: 25 }), task, answer, null), /Invalid AQA/);
  assert.throws(() => validateFeedback(feedback(task, { ao6: 8.5 }), task, answer, null), /Invalid AQA/);
  assert.equal(validateFeedback(feedback(task, { relevant: false, ao5: 22 }), task, answer, null).ao5, 12);
});
test('revision must compare all prior targets using current evidence', () => {
  const task = getWritingTask('week-1-classroom'); const previous = feedback(task);
  assert.throws(() => validateFeedback(feedback(task), task, answer, previous), /Invalid feedback list/);
  const revised = feedback(task, { revisionReview: [{ targetIndex: 0, status: 'partly-improved', quote: 'A faint light', explanation: 'A detail was added.' }] });
  assert.equal(validateFeedback(revised, task, answer, previous).revisionReview[0].status, 'partly-improved');
  revised.revisionReview[0].quote = 'I waited yesterday.';
  assert.throws(() => validateFeedback(revised, task, answer, previous), /not in/);
});
test('incomplete, refused or empty model results never become marks', () => {
  assert.throws(() => extractResponseText({ status: 'incomplete', output: [] }), /Incomplete/);
  assert.throws(() => extractResponseText({ status: 'completed', output: [{ type: 'message', content: [{ type: 'refusal' }] }] }), /unavailable/);
  assert.throws(() => extractResponseText({ status: 'completed', output: [] }), /Missing/);
});
test('revisions cannot inflate independent mastery; two different tasks are required', () => {
  const task = getWritingTask('week-1-classroom');
  function entry(id, taskId, parentId, date) {
    return { id, task_id: taskId, parent_id: parentId, status: 'complete', created_at: date,
      feedback: feedback(task, { skills: task.skills.map(id => ({ id, status: 'secure', explanation: 'Secure here.' })) }) };
  }
  const first = entry('1', task.id, null, '2026-10-01');
  const revision = entry('2', task.id, '1', '2026-10-02');
  assert.equal(independentSkills([first, revision])[0].status, 'practising');
  const transfer = entry('3', 'transfer-1-hall', null, '2026-10-04');
  assert.equal(independentSkills([first, revision, transfer])[0].status, 'secure');
});

function dbFixture({ reservationState = 'claimed', foreignParent = false, saveConflict = false } = {}) {
  const events = [];
  const db = {
    from(table) {
      const query = { table, op: 'select', value: null, filters: [] };
      const q = {
        select() { return this; }, insert(value) { query.op = 'insert'; query.value = value; return this; },
        update(value) { query.op = 'update'; query.value = value; return this; },
        eq(key, value) { query.filters.push([key, value]); return this; },
        maybeSingle() { return Promise.resolve(resolve()); },
        then(ok, fail) { return Promise.resolve(resolve()).then(ok, fail); },
      };
      function resolve() {
        events.push(query);
        if (table === 'english_writing_work') return saveConflict ? { error: null, data: null } : { error: null, data: { version: (query.value?.version ?? 0) } };
        if (query.op === 'select') return { data: foreignParent ? null : null, error: null };
        return { data: { id: 'job', feedback: query.value.feedback, total: query.value.total }, error: null };
      }
      return q;
    },
    async rpc(name, args) { events.push({ rpc: name, args }); return { error: null, data: { state: reservationState, row: { id: 'job', user_id: 'real-user', lease_token: 'lease', status: 'complete', task_id: args.p_task_id } } }; },
  };
  return { db, events };
}
function serverStub(fixture, { authorised = true, enabled = true } = {}) {
  const actual = load('@/lib/englishWriting/server');
  return { ...actual, writingContext: async () => { if (!authorised) throw new actual.WritingError('Please sign in again.', 401); return { db: fixture.db, userId: 'real-user', name: 'Test learner' }; }, feedbackEnabled: () => enabled };
}
const request = body => new Request('http://localhost/api/english-writing', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ expectedUserId: "real-user", ...body }) });
test('draft writes derive the owner from authentication and use optimistic version checks', async () => {
  const fixture = dbFixture();
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) })('@/app/api/english-writing/work/route');
  const result = await route.POST(request({ action: 'draft', taskId: 'week-1-classroom', draft: answer, plan: '', elapsedSeconds: 20, version: 4, userId: 'forged-other-user' }));
  assert.equal(result.status, 200);
  const query = fixture.events[0];
  assert.equal(query.value.user_id, 'real-user');
  assert.ok(query.filters.some(([k, v]) => k === 'version' && v === 4));
  assert.equal(query.value.version, 5);
});
test('a draft conflict is reported without silently overwriting a newer version', async () => {
  const fixture = dbFixture({ saveConflict: true });
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) })('@/app/api/english-writing/work/route');
  assert.equal((await route.POST(request({ action: 'draft', taskId: 'week-1-classroom', draft: answer, plan: '', elapsedSeconds: 0, version: 2 }))).status, 409);
});
test('unauthenticated grading never reserves a job or calls the model', async () => {
  const fixture = dbFixture();
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture, { authorised: false }) })('@/app/api/english-writing/mark/route');
  assert.equal((await route.POST(request({}))).status, 401); assert.equal(fixture.events.length, 0);
});
test('account setup gate prevents transmitting writing before AI is configured', async () => {
  const fixture = dbFixture();
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture, { enabled: false }) })('@/app/api/english-writing/mark/route');
  assert.equal((await route.POST(request({ taskId: 'week-1-classroom', answer, reflection: '', parentId: null }))).status, 503);
  assert.equal(fixture.events.length, 0);
});
test('a forged parent submission is checked within the authenticated owner and task', async () => {
  const fixture = dbFixture({ foreignParent: true });
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) })('@/app/api/english-writing/mark/route');
  const result = await route.POST(request({ taskId: 'week-1-classroom', answer, parentId: '00000000-0000-0000-0000-000000000002', reflection: 'I added a new detail.' }));
  assert.equal(result.status, 409);
  assert.ok(fixture.events[0].filters.some(([k, v]) => k === 'user_id' && v === 'real-user'));
  assert.ok(!fixture.events.some(e => e.rpc));
});
for (const [state, status] of [['cached', 200], ['busy', 409], ['limited', 429], ['conflict', 409]]) {
  test(`grading reservation '${state}' avoids duplicate model calls`, async () => {
    const fixture = dbFixture({ reservationState: state });
    const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) })('@/app/api/english-writing/mark/route');
    const result = await route.POST(request({ taskId: 'week-1-classroom', answer, parentId: null }));
    assert.equal(result.status, status);
    assert.equal(fixture.events.filter(e => e.rpc).length, 1);
  });
}
test('valid model result is checked, stored by the server and summed independently', async () => {
  const fixture = dbFixture(); const task = getWritingTask('aqa-creative'); const calls = [];
  const mockFetch = async (url, options) => {
    const body = JSON.parse(options.body); calls.push({ url, body });
    if (url.endsWith('/moderations')) return Response.json({ results: [{ flagged: false }] });
    return Response.json({ status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text: JSON.stringify(feedback(task)) }] }], usage: { input_tokens: 100, output_tokens: 200 } });
  };
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) }, { fetch: mockFetch })('@/app/api/english-writing/mark/route');
  const response = await route.POST(request({ taskId: task.id, answer, parentId: null }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).submission.total, 23);
  const api = calls.find(c => c.url.endsWith('/responses'));
  assert.equal(api.body.store, false); assert.equal(api.body.text.format.strict, true);
  assert.ok(!api.body.input[0].content.includes('real-user'));
  assert.ok(fixture.events.some(e => e.value?.status === 'complete' && e.filters.some(([k, v]) => k === 'lease_token' && v === 'lease')));
});
test('bad model evidence fails safely and does not create a made-up score', async () => {
  const fixture = dbFixture(); const task = getWritingTask('aqa-creative');
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) }, { fetch: async url => url.endsWith('/moderations')
    ? Response.json({ results: [{ flagged: false }] })
    : Response.json({ status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text: JSON.stringify(feedback(task, { strengths: [{ quote: 'Invented quotation', explanation: 'No evidence.' }] })) }] }] })
  })('@/app/api/english-writing/mark/route');
  const response = await route.POST(request({ taskId: task.id, answer, parentId: null }));
  assert.equal(response.status, 503);
  assert.ok(fixture.events.some(e => e.value?.status === 'failed'));
  assert.ok(!fixture.events.some(e => e.value?.status === 'complete'));
});

test('an old tab cannot save a draft under a newly signed-in account', async () => {
  const fixture = dbFixture();
  const route = loader({ '@/lib/englishWriting/server': serverStub(fixture) })('@/app/api/english-writing/work/route');
  const response = await route.POST(request({ expectedUserId: 'previous-account', action: 'draft', taskId: 'week-1-classroom', draft: answer, plan: '', elapsedSeconds: 0, version: 0 }));
  assert.equal(response.status, 409);
  assert.equal(fixture.events.length, 0);
});
