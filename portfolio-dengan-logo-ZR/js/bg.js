/* Background animasi bertema Last Lantern: langit malam, bulan, kabut, mercusuar + sorot cahaya, ombak, kunang-kunang, hantu, petir */
function initBG(cv,RM){
const x=cv.getContext&&cv.getContext('2d');if(!x)return;
let W,H,D=Math.min(devicePixelRatio||1,1.5),sy=0;const mob=innerWidth<700;
const R=(a,b)=>a+Math.random()*(b-a);
const stars=Array.from({length:mob?60:140},()=>({x:Math.random(),y:Math.random()*.62,r:R(.3,1.4),p:R(0,6),s:R(.6,2)}));
const flies=Array.from({length:mob?18:40},()=>({x:Math.random(),y:R(.45,1),p:R(0,6),g:Math.random()<.45,v:R(.02,.08)}));
const fog=Array.from({length:6},(_,i)=>({x:Math.random(),y:R(.25,.8),s:R(.5,1.1),v:R(.008,.025)*(i%2?1:-1),o:R(.05,.11)}));
let flash=0,nextFlash=R(9000,20000),ghost=null,nextGhost=R(8000,14000);
const spr=document.createElement('canvas');spr.width=spr.height=256;
{const c=spr.getContext('2d'),g=c.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(0,0,256,256)}
function rs(){W=cv.width=innerWidth*D;H=cv.height=innerHeight*D}rs();addEventListener('resize',rs);
addEventListener('scroll',()=>{sy=scrollY},{passive:true});
function glow(px,py,r,rgb,a){x.globalAlpha=a;x.fillStyle=rgb;x.drawImage(spr,px-r,py-r,r*2,r*2);x.globalAlpha=1}
function tint(px,py,r,col,a){x.save();x.globalAlpha=a;x.globalCompositeOperation='lighter';const g=x.createRadialGradient(px,py,0,px,py,r);g.addColorStop(0,col);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(px-r,py-r,r*2,r*2);x.restore()}
function frame(t,dt){
 x.clearRect(0,0,W,H);const u=W/D,h=H/D;x.setTransform(D,0,0,D,0,0);
 const par=sy*.04;
 let g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'#05060a');g.addColorStop(.7,'#0b1220');g.addColorStop(1,'#101a2a');x.fillStyle=g;x.fillRect(0,0,u,h);
 /* bintang */
 stars.forEach(s=>{const a=.35+.65*Math.abs(Math.sin(t/1000*s.s+s.p));x.fillStyle=`rgba(235,240,255,${a*.8})`;x.fillRect(s.x*u,((s.y*h-par*.3)%h+h)%h,s.r,s.r)});
 /* bulan */
 const mx=u*.18+Math.sin(t/20000)*20,my=h*.2-par*.5;tint(mx,my,u*.22,'rgba(190,210,255,.5)',.35);x.fillStyle='#dfe7f5';x.globalAlpha=.9;x.beginPath();x.arc(mx,my,22,0,7);x.fill();x.globalAlpha=1;
 /* petir */
 nextFlash-=dt;if(nextFlash<0){flash=1;nextFlash=R(12000,26000)}if(flash>0){x.fillStyle=`rgba(190,210,255,${flash*.12})`;x.fillRect(0,0,u,h);flash-=dt/500}
 /* mercusuar + sorot */
 const lx=u*(mob?.78:.84),base=h*.9-par*.6,top=base-h*.34,ly=top-6;
 const a=t/3200,dir=Math.cos(a),L=u*1.2,w=Math.abs(Math.sin(a));
 x.save();x.globalCompositeOperation='lighter';
 const bg=x.createLinearGradient(lx,0,lx+dir*L,0);bg.addColorStop(0,'rgba(216,240,106,.38)');bg.addColorStop(1,'rgba(216,240,106,0)');
 x.fillStyle=bg;x.beginPath();x.moveTo(lx,ly);x.lineTo(lx+dir*L,ly-h*.09*(.4+w));x.lineTo(lx+dir*L,ly+h*.09*(.4+w));x.closePath();x.globalAlpha=.25+.75*Math.abs(dir)**1.5;x.fill();x.restore();
 tint(lx,ly,90,'rgba(216,240,106,.9)',.5+.25*Math.sin(t/300));
 x.fillStyle='#04050a';x.beginPath();x.moveTo(lx-16,base);x.lineTo(lx-9,top);x.lineTo(lx+9,top);x.lineTo(lx+16,base);x.fill();x.fillRect(lx-13,top-12,26,12);x.beginPath();x.moveTo(lx-14,top-12);x.lineTo(lx,top-26);x.lineTo(lx+14,top-12);x.fill();
 /* tebing */
 x.beginPath();x.moveTo(u*.55,h);for(let i=0;i<=20;i++){const px=u*.55+i/20*u*.45;x.lineTo(px,base+10-Math.abs(Math.sin(i*1.7))*18-(i>10?(i-10)*3:0)*0+ (i<4?(4-i)*10:0))}x.lineTo(u,h);x.fill();
 /* kabut */
 fog.forEach(f=>{f.x+=f.v*dt/1000;if(f.x>1.3)f.x=-.3;if(f.x<-.3)f.x=1.3;glow(f.x*u,f.y*h-par*f.s*.4,u*.38*f.s,'#9fb0d0',f.o)});
 /* ombak */
 for(let k=0;k<3;k++){const y0=h*(.9+k*.035)-par*.2;x.fillStyle=['#0a1426','#08101e','#050a14'][k];x.beginPath();x.moveTo(0,h);for(let px=0;px<=u;px+=24)x.lineTo(px,y0+Math.sin(px/110+t/(1100-k*220)+k)*(6+k*2));x.lineTo(u,h);x.fill();
  x.strokeStyle=`rgba(180,200,235,${.08-k*.02})`;x.lineWidth=1;x.beginPath();for(let px=0;px<=u;px+=24){const yy=y0+Math.sin(px/110+t/(1100-k*220)+k)*(6+k*2);px?x.lineTo(px,yy):x.moveTo(px,yy)}x.stroke()}
 /* pantulan sorot di laut */
 tint(lx+dir*u*.12,h*.93,u*.12,'rgba(216,240,106,.5)',.18*Math.abs(dir));
 /* kunang-kunang & bara */
 flies.forEach(f=>{f.y-=f.v*dt/9000;if(f.y<.2)f.y=1.02;const px=(f.x+Math.sin(t/2500+f.p)*.03)*u,py=f.y*h-par*.6,a2=.4+.6*Math.abs(Math.sin(t/700+f.p));glow(px,py,f.g?14:10,f.g?'#d8f06a':'#ffb347',a2*.9)});
 /* hantu */
 nextGhost-=dt;if(!ghost&&nextGhost<0){ghost={x:-.1,y:R(.35,.6),t0:t};nextGhost=R(20000,35000)}
 if(ghost){const p=(t-ghost.t0)/16000;if(p>1)ghost=null;else{const gx=(ghost.x+p*1.25)*u,gy=ghost.y*h+Math.sin(t/900)*24-par*.5,al=Math.sin(p*Math.PI)*.22;glow(gx,gy,90,'#cfe3ff',al);x.fillStyle=`rgba(4,5,10,${al*3})`;x.beginPath();x.arc(gx-9,gy-6,3,0,7);x.arc(gx+9,gy-6,3,0,7);x.fill()}}
 x.setTransform(1,0,0,1,0,0)}
if(RM){frame(0,16);addEventListener('resize',()=>frame(0,16));return}
let last=0;(function loop(t){const dt=Math.min(t-last,60);last=t;if(!document.hidden&&cv.dataset.scene!=='unreal')frame(t,dt);requestAnimationFrame(loop)})(0)}
