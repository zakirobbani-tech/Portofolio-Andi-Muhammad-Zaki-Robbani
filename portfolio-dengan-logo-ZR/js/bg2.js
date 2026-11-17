/* Background bergaya Unreal Engine 5: terrain wireframe (Nanite), sinar volumetrik (Lumen), vortex partikel (Niagara), lens streak & vignette */
function initBG2(cv,RM){
const x=cv.getContext&&cv.getContext('2d');if(!x)return;
let W,H,D=Math.min(devicePixelRatio||1,1.5),sy=0,px=.5,py=.5,sx=.5,sz=.5;const mob=innerWidth<700;
const R=(a,b)=>a+Math.random()*(b-a);
const N=mob?90:240,P=Array.from({length:N},()=>np());
function np(){return{a:R(0,6.28),r:R(.04,.5),v:R(.4,1.4),z:Math.random(),px:0,py:0}}
const dust=Array.from({length:mob?20:55},()=>({x:Math.random(),y:Math.random(),s:R(.3,1.2),p:R(0,6)}));
const rays=Array.from({length:7},(_,i)=>({x:.45+i*.1,w:R(.03,.07),p:R(0,6),o:R(.05,.12)}));
function rs(){W=cv.width=innerWidth*D;H=cv.height=innerHeight*D}rs();addEventListener('resize',rs);
addEventListener('scroll',()=>{sy=scrollY},{passive:true});
addEventListener('pointermove',e=>{px=e.clientX/innerWidth;py=e.clientY/innerHeight},{passive:true});
function frame(t,dt){
 const u=W/D,h=H/D;x.setTransform(D,0,0,D,0,0);x.clearRect(0,0,u,h);
 sx+=(px-sx)*.04;sz+=(py-sz)*.04;const par=sy*.05;
 let g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'#03040a');g.addColorStop(.55,'#0a0d1d');g.addColorStop(1,'#150f22');x.fillStyle=g;x.fillRect(0,0,u,h);
 const hz=h*.62-par*.3+(sz-.5)*20,cx=u*.5+(sx-.5)*-60;
 /* matahari / portal di horizon */
 x.save();x.globalCompositeOperation='lighter';
 let rg=x.createRadialGradient(cx,hz,0,cx,hz,u*.42);rg.addColorStop(0,'rgba(255,150,60,.55)');rg.addColorStop(.35,'rgba(200,60,140,.22)');rg.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=rg;x.fillRect(0,0,u,h);
 /* sinar volumetrik */
 rays.forEach(r=>{const sw=Math.sin(t/4000+r.p)*.03,x0=(r.x+sw)*u+(sx-.5)*-40,x1=x0-u*.55;const gg=x.createLinearGradient(x0,0,x1,h);gg.addColorStop(0,`rgba(255,200,130,${r.o*(.7+.3*Math.sin(t/1500+r.p))})`);gg.addColorStop(1,'rgba(255,200,130,0)');x.fillStyle=gg;x.beginPath();x.moveTo(x0,-20);x.lineTo(x0+r.w*u,-20);x.lineTo(x1+r.w*u*3,h);x.lineTo(x1,h);x.fill()});
 x.restore();
 /* terrain wireframe */
 const off=t/700,fr=off%1,wi=Math.floor(off),RW=15,CC=mob?20:34,rows=[];
 for(let k=0;k<RW;k++){const d=Math.max(.02,(k-fr+1)/RW),wz=wi-k,pts=[];
  for(let c=0;c<=CC;c++){const cc=c/CC*2-1,ht=(Math.sin(cc*3.1+wz*.55)+Math.sin(cc*7-wz*.8)*.5)*Math.pow(Math.abs(cc),1.3)*h*.16*d;
   pts.push([cx+cc*u*(.08+1.3*d)+(sx-.5)*-30*d,hz+(h*1.1-hz)*Math.pow(d,1.8)-Math.max(0,ht)])}
  rows.push([pts,d])}
 x.lineWidth=1;rows.forEach(([pts,d])=>{x.strokeStyle=`rgba(90,220,255,${Math.min(.5,d*.65)})`;x.beginPath();pts.forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));x.stroke()});
 for(let c=0;c<=CC;c+=2){x.strokeStyle='rgba(255,170,90,.16)';x.beginPath();rows.forEach(([pts],i)=>i?x.lineTo(pts[c][0],pts[c][1]):x.moveTo(pts[c][0],pts[c][1]));x.stroke()}
 /* vortex Niagara */
 const vx=u*.76+(sx-.5)*50,vy=h*.34-par+(sz-.5)*30;
 x.save();x.globalCompositeOperation='lighter';
 P.forEach(p=>{p.a+=p.v*dt/1000*(1.3-p.r*1.6);p.r-=dt/16000*(.4+p.v*.3);if(p.r<.015){Object.assign(p,np());p.r=R(.35,.55)}
  const rr=p.r*Math.min(u,h)*.9,nx=vx+Math.cos(p.a)*rr,ny=vy+Math.sin(p.a)*rr*.42+Math.sin(p.a*2+t/900)*6;
  const hot=Math.max(0,1-p.r*3);x.strokeStyle=`rgba(${120+hot*135|0},${210-hot*30|0},255,${.12+hot*.7})`;x.lineWidth=.6+hot*1.6;
  if(p.px){x.beginPath();x.moveTo(p.px,p.py);x.lineTo(nx,ny);x.stroke()}p.px=nx;p.py=ny});
 let cg=x.createRadialGradient(vx,vy,0,vx,vy,90);cg.addColorStop(0,'rgba(255,240,200,.9)');cg.addColorStop(.3,'rgba(120,200,255,.35)');cg.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=cg;x.fillRect(vx-90,vy-90,180,180);
 /* anamorphic lens streak */
 const sg=x.createLinearGradient(vx-u*.4,0,vx+u*.4,0);sg.addColorStop(0,'rgba(120,200,255,0)');sg.addColorStop(.5,`rgba(180,225,255,${.35+.15*Math.sin(t/700)})`);sg.addColorStop(1,'rgba(120,200,255,0)');x.fillStyle=sg;x.fillRect(vx-u*.4,vy-1,u*.8,2);
 x.restore();
 /* debu di sinar */
 dust.forEach(d=>{d.y-=d.s*dt/30000;d.x+=Math.sin(t/2000+d.p)*.0002;if(d.y<-.02)d.y=1.02;x.fillStyle=`rgba(255,225,180,${.15+.25*Math.abs(Math.sin(t/800+d.p))})`;x.fillRect(d.x*u,d.y*h-par*.5,d.s*1.6,d.s*1.6)});
 /* vignette */
 let vg=x.createRadialGradient(u/2,h/2,Math.min(u,h)*.35,u/2,h/2,Math.max(u,h)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.65)');x.fillStyle=vg;x.fillRect(0,0,u,h);
 x.setTransform(1,0,0,1,0,0)}
if(RM){frame(0,16);addEventListener('resize',()=>frame(0,16));return}
let last=0;(function loop(t){const dt=Math.min(t-last,60);last=t;if(!document.hidden&&cv.dataset.scene==='unreal')frame(t,dt);requestAnimationFrame(loop)})(0)}
