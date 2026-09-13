'use strict';
const fs=require('node:fs'),path=require('node:path');
const files={'app/maths/s2/chapter-10/page.tsx':'page.tsx.txt','components/maths/S2Chapter10Geometry.tsx':'Geometry.tsx.txt'};
try{const root=process.cwd();if(!fs.existsSync(path.join(root,'package.json')))throw Error('Run beside package.json.');const pending=[];
for(const [dest,src] of Object.entries(files)){const full=path.join(root,dest),data=fs.readFileSync(path.join(__dirname,'files',src));if(fs.existsSync(full)){if(!fs.readFileSync(full).equals(data))throw Error('Existing '+dest+' differs. No files changed. Send this file for integration.');}else pending.push({full,data});}
if(process.argv.includes('--dry-run')){console.log('Preflight passed. New files: '+pending.length);process.exit(0)}const done=[];try{for(const {full,data}of pending){fs.mkdirSync(path.dirname(full),{recursive:true});fs.writeFileSync(full,data,{flag:'wx'});done.push(full);}}catch(e){for(const f of done)fs.rmSync(f);throw e;}console.log(pending.length?'Installed Chapter 10 homepage and shared geometry component. Run npm run build.':'Already installed.');}catch(e){console.error(e.message);process.exitCode=1;}
