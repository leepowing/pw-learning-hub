import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
export const runtime="nodejs";
export const maxDuration=60;
export async function GET(request:Request){
  const secret=process.env.CRON_SECRET;
  if(!secret||request.headers.get("authorization")!==`Bearer ${secret}`)
    return NextResponse.json({error:"Unauthorized"},{status:401});
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!key)return NextResponse.json({error:"Missing server configuration"},{status:503});
  const admin=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  let deleted=0;
  // Bounded batch for daily Hobby-plan cron; next day continues if needed.
  const {data:rows,error}=await admin.from("chinese_stage3_speaking_recordings")
    .select("id,object_path").lte("expires_at",new Date().toISOString()).order("expires_at").limit(50);
  if(error)return NextResponse.json({error:"Database cleanup query failed"},{status:500});
  for(const row of rows??[]){
    const {error:storageError}=await admin.storage.from("chinese-speaking-private").remove([row.object_path]);
    if(storageError)continue;
    const {error:deleteError}=await admin.from("chinese_stage3_speaking_recordings").delete().eq("id",row.id);
    if(!deleteError)deleted++;
  }
  return NextResponse.json({ok:true,deleted,remainingMayExist:(rows?.length??0)===50});
}
