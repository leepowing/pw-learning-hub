const fs=require('fs'),path=require('path');
try{
 const root=process.cwd();if(!fs.existsSync(path.join(root,'package.json')))throw Error('Run from pw-learning-hub, beside package.json.');
 const patches=require('./patches.json'),changes=[];
 for(const {dest,edits} of patches){
  const full=path.join(root,dest);if(!fs.existsSync(full))throw Error('Missing '+dest);
  const old=fs.readFileSync(full,'utf8');let next=old.replace(/\r\n/g,'\n');
  for(const e of edits){
   if(next.includes(e.new))continue;
   if(next.includes(e.old)){
    if(next.split(e.old).length!==2)throw Error('Ambiguous integration in '+dest);
    next=next.replace(e.old,e.new);
   }else if(!next.includes(e.new))throw Error('Current diagram differs in '+dest+'. Send this file for integration.');
  }
  if(old.includes('\r\n'))next=next.replace(/\n/g,'\r\n');
  if(old!==next)changes.push({dest,old,next});
 }
 const dest='components/maths/Chapter8Geometry.tsx',full=path.join(root,dest),next=fs.readFileSync(path.join(__dirname,'files/Chapter8Geometry.tsx.txt'),'utf8'),old=fs.existsSync(full)?fs.readFileSync(full,'utf8'):null;
 if(old!==null&&old!==next)throw Error('Existing Chapter8Geometry.tsx differs; no files changed.');
 if(old!==next)changes.push({dest,old,next});
 if(process.argv.includes('--dry-run')){console.log('Preflight passed:',changes.map(c=>c.dest).join('\n'));process.exit(0)}
 if(!changes.length){console.log('Already installed.');process.exit(0)}
 const backup=path.join(root,'chapter8-svg-backup-'+Date.now()),done=[];
 for(const c of changes)if(c.old!==null){const p=path.join(backup,c.dest+'.bak');fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c.old)}
 try{for(const c of changes){const p=path.join(root,c.dest);fs.mkdirSync(path.dirname(p),{recursive:true});done.push(c);fs.writeFileSync(p,c.next)}}
 catch(e){for(const c of done.reverse()){const p=path.join(root,c.dest);if(c.old===null)fs.rmSync(p,{force:true});else fs.writeFileSync(p,c.old)}throw e}
 console.log('Installed Chapter 8 SVG diagrams. Backup: '+backup+'\nNext: npm run build');
}catch(e){console.error('Installation stopped: '+e.message);process.exitCode=1}
