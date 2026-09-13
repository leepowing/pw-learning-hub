const fs=require('fs'),path=require('path');try{
const root=process.cwd();if(!fs.existsSync(path.join(root,'package.json')))throw Error('Run beside package.json.');
const home=path.join(root,'app/maths/s2/chapter-9/page.tsx'),lesson=path.join(root,'app/maths/s2/chapter-9/isosceles-triangles/page.tsx'),patch=require('./homepage-patch.json');
if(!fs.existsSync(home))throw Error('Install the Chapter 9 homepage first.');
if(!fs.existsSync(path.join(root,'components/maths/S2Chapter9Geometry.tsx')))throw Error('Install the Chapter 9 homepage geometry component first.');
const original=fs.readFileSync(home,'utf8');let next=original.replace(/\r\n/g,'\n');if(!next.includes(patch.new)){if(next.split(patch.old).length!==2)throw Error('Homepage differs. No files changed. Send it for integration.');next=next.replace(patch.old,patch.new)}if(original.includes('\r\n'))next=next.replace(/\n/g,'\r\n');
const data=fs.readFileSync(path.join(__dirname,'files/page.tsx.txt'),'utf8');if(fs.existsSync(lesson)&&fs.readFileSync(lesson,'utf8')!==data)throw Error('Section 9.2 page already exists and differs. No files changed.');
if(original===next&&fs.existsSync(lesson)){console.log('Already installed.');process.exit(0)}
const backup=path.join(root,'chapter9-checkpoint-backup-'+Date.now());fs.mkdirSync(backup);fs.writeFileSync(path.join(backup,'homepage.tsx.bak'),original);const existed=fs.existsSync(lesson);
try{fs.mkdirSync(path.dirname(lesson),{recursive:true});fs.writeFileSync(lesson,data);fs.writeFileSync(home,next)}catch(e){fs.writeFileSync(home,original);if(!existed)fs.rmSync(lesson,{force:true});throw e}
console.log('Installed Section 9.2 and enabled homepage link. Backup: '+backup+'\nRun npm run build.');
}catch(e){console.error(e.message);process.exitCode=1}
