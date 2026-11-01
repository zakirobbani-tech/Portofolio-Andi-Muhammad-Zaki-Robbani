addEventListener('DOMContentLoaded',()=>{
const $=i=>document.getElementById(i),D=DATA,RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const I=k=>k?(IMG_EXT[k]?'assets/img/'+k+'.'+IMG_EXT[k]:k):'';
const cv=p=>I(p.img||(p.gallery||[])[0]||'');
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.title=D.name+' — Portfolio';
$('lg').innerHTML=`${E(D.nick)}<i>.</i>`;
const parts=D.name.split(' ');$('nm').innerHTML=`<span>${E(parts.slice(0,2).join(' '))}</span><em>${E(parts.slice(2).join(' '))}</em>`;
$('idn').textContent=D.identity;$('bio').textContent=D.bio;$('bio2').textContent=D.bio2;
$('av').innerHTML=`<img src="${I(D.photo)}" alt="${E(D.name)}">`;
const A0=D.achievements[0];$('b1').innerHTML=`<span style="font-size:22px">${A0.icon}</span><div><b>${E(A0.title.split('—')[0])}</b>${E(A0.place)}</div>`;
$('sts').innerHTML=D.stats.map(s=>`<div class="st"><b data-n="${s[0]}">0</b><span>${E(s[1])}</span></div>`).join('');
const words=[...D.skills,...D.tools.map(t=>t[0])];
$('mq').innerHTML=words.concat(words).map(t=>`<span>${E(t)}</span>`).join('');
$('ab').innerHTML=`<div class="cd rv" style="grid-column:span 6">${D.education.logo?`<img class="lg2" src="${I(D.education.logo)}" alt="Logo ${E(D.education.school)}">`:''}<div class="ic">🎓</div><h3>${E(D.education.school)}</h3><p>${E(D.education.major)} — fokus Game<br>${E(D.education.year)}</p></div>`+
D.achievements.map(a=>`<div class="cd rv" style="grid-column:span 6">${a.img?`<img class="lg2" style="border-radius:50%" src="${I(a.img)}" alt="Trofi">`:''}<div class="ic">${a.icon}</div><h3>${E(a.title)}</h3><p>${E(a.place)}<br>${E(a.date)}</p></div>`).join('');
const groups=[["Design & Art",["Illustrator","2D Art"]],["3D & Motion",["3D Modeling","Video Editor"]],["Management & Communication",["Project Manager (PM)","Public Speaking"]]];
const known=groups.flatMap(g=>g[1]),rest=D.skills.filter(s=>!known.includes(s));if(rest.length)groups.push(["Lainnya",rest]);
$('sk').innerHTML=groups.map(([t,l])=>`<div class="cd rv"><h3>${E(t)}</h3>${l.filter(x=>D.skills.includes(x)).map(s=>`<span class="chip">${E(s)}</span>`).join('')}</div>`).join('');
$('tools').innerHTML=D.tools.map(t=>`<div class="tool rv">${t[1]?`<img src="${I(t[1])}" alt="" loading="lazy">`:`<u>${E(t[0][0])}</u>`}${E(t[0])}</div>`).join('');
$('tl').innerHTML=D.experience.map(e=>`<div class="cd q rv">${e.logo?`<img class="lg2" src="${I(e.logo)}" alt="Logo ${E(e.place)}" loading="lazy">`:''}<small>${E(e.date)}</small><h3>${E(e.title)}</h3><p><b>${E(e.place)}</b>${e.desc?' — '+E(e.desc):''}</p></div>`).join('');
const em=D.contact.find(c=>c[0]=='✉️');
$('big').innerHTML=`<button class="big" id="cpb" aria-label="Salin email">${E(em[2])}</button><div class="cp" id="cp">Klik untuk menyalin email · <a href="${E(em[3])}">atau kirim langsung</a></div>`;
$('cpb').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(em[2]).then(()=>$('cp').textContent='Email tersalin ✓').catch(()=>location.href=em[3])};
$('ct').innerHTML=D.contact.map(c=>`<div class="cd rv"><a href="${E(c[3])}" target="_blank" rel="noopener"><div class="ic">${c[0]}</div><small>${E(c[1])}</small><b>${E(c[2])}</b></a></div>`).join('');
$('ft').innerHTML=`© 2026 ${E(D.name)}. Terima kasih sudah berkunjung.`;
/* projects */
const F=D.projects.filter(p=>p.featured),R=D.projects.map((p,i)=>[p,i]).filter(([p])=>!p.featured);
$('feat').innerHTML=D.projects.map((p,i)=>[p,i]).filter(([p])=>p.featured).map(([p,i])=>`<article class="feat rv" data-i="${i}">${cv(p)?`<img src="${cv(p)}" alt="${E(p.title)} — screenshot menu utama" loading="lazy">`:''}<div class="fc"><span class="tg">Featured Project · ${E(p.cat)}</span><h3>${E(p.title)}</h3><div class="mt">${p.meta.map(x=>`<span>${E(x)}</span>`).join('')}</div><p>${E(p.desc)}</p><ul class="fl">${p.features.map(f=>`<li>${E(f)}</li>`).join('')}</ul><button class="btn o" data-v="${i}">Explore Project</button><a class="btn" href="${E(p.link)}" target="_blank" rel="noopener">Play on itch.io</a></div></article>`).join('');
const cats=['Semua',...new Set(R.map(([p])=>p.cat))];
$('tab').innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${E(c)}">${E(c)}</button>`).join('')+'<span class="ar"><button id="pv" aria-label="Sebelumnya">←</button><button id="nx" aria-label="Berikutnya">→</button></span>';
function dp(c){$('pj').innerHTML=R.filter(([p])=>c=='Semua'||p.cat==c).map(([p,i])=>`<article class="cd pj rv" data-i="${i}" tabindex="0" role="button"><div class="pt">${cv(p)?`<img src="${cv(p)}" alt="${E(p.title)}" loading="lazy">`:p.icon}</div><div class="pb"><span class="tg">${E(p.cat)}</span><h3>${E(p.title)}</h3><p>${E(p.desc.slice(0,90))}…</p></div></article>`).join('');$('pj').scrollLeft=0;obs();stg()}
$('pv').onclick=()=>$('pj').scrollBy({left:-440,behavior:'smooth'});$('nx').onclick=()=>$('pj').scrollBy({left:440,behavior:'smooth'});
function open(i){const p=D.projects[i];
$('mb').innerHTML=`${cv(p)?`<div class="pt" style="height:240px"><img src="${cv(p)}" alt="${E(p.title)}"></div>`:''}<div class="pb"><button class="x" id="xx" aria-label="Tutup">✕</button><span class="tg">${E(p.cat)}${p.tools?' · '+E(p.tools):''}</span><h3>${E(p.title)}</h3>${p.meta?`<div class="mt">${p.meta.map(m=>`<span>${E(m)}</span>`).join('')}</div>`:''}<p style="color:var(--mut)">${E(p.desc)}</p>${p.features?`<ul>${p.features.map(f=>`<li>${E(f)}</li>`).join('')}</ul>`:''}${p.link?`<a class="btn" href="${E(p.link)}" target="_blank" rel="noopener">Play on itch.io</a>`:''}</div>${(p.gallery||[]).length>1?`<div class="gl">${p.gallery.slice(1).map(g=>`<img src="${I(g)}" alt="" loading="lazy">`).join('')}</div>`:''}`;
$('md').classList.add('on');$('xx').onclick=()=>$('md').classList.remove('on')}
$('tab').onclick=e=>{const b=e.target.closest('button');if(!b)return;[...$('tab').children].forEach(x=>x.classList.toggle('on',x==b));dp(b.dataset.c)};
$('pj').onclick=e=>{const c=e.target.closest('.pj');if(c)open(c.dataset.i)};$('feat').onclick=e=>{const b=e.target.closest('[data-v]');if(b)open(b.dataset.v)};
$('pj').onkeydown=e=>{if(e.key=='Enter'){const c=e.target.closest('.pj');if(c)open(c.dataset.i)}};
$('mb').onclick=e=>{if(e.target.tagName=='IMG'&&e.target.closest('.gl')){$('lbi').src=e.target.src;$('lbx').classList.add('on')}};
$('lbx').onclick=()=>$('lbx').classList.remove('on');$('md').onclick=e=>{if(e.target==$('md'))$('md').classList.remove('on')};
addEventListener('keydown',e=>e.key=='Escape'&&($('lbx').classList.contains('on')?$('lbx').classList.remove('on'):$('md').classList.remove('on')));
/* typing */
let ri=0,ci=0,del=0;(function t(){const w=D.heroRoles[ri];ci+=del?-1:1;$('ty').textContent=w.slice(0,ci);let s=del?35:70;
if(!del&&ci==w.length){del=1;s=1400}else if(del&&ci==0){del=0;ri=(ri+1)%D.heroRoles.length;s=300}setTimeout(t,RM?3000:s)})();
/* progress + nav indicator */
addEventListener('scroll',()=>{$('pg').style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'},{passive:true});
const nio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.hash=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>nio.observe(s));
/* reveal + counters */
function cnt(el){const n=+el.dataset.n;let v=0;const t=setInterval(()=>{v++;el.textContent=v;if(v>=n)clearInterval(t)},Math.max(40,900/n))}
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(cnt);rio.unobserve(e.target)}),{threshold:.12});
function obs(){document.querySelectorAll('.rv,.sts').forEach(e=>rio.observe(e))}
function stg(){document.querySelectorAll('#pj .rv').forEach((e,i)=>e.style.transitionDelay=(i%3)*0.12+'s')}
dp('Semua');
/* loader: progres sesuai pemuatan gambar */
const pre=['zaki','last_lantern',...D.experience.map(e=>e.logo).filter(Boolean)].map(I);let done=0;const fin=()=>{$('ldp').textContent='100%';$('ldb').style.width='100%';setTimeout(()=>{$('ld').classList.add('out');document.dispatchEvent(new Event('ready'))},RM?0:450)};
pre.forEach(s=>{const im=new Image();im.onload=im.onerror=()=>{done++;const p=Math.round(done/pre.length*100);$('ldp').textContent=p+'%';$('ldb').style.width=p+'%';if(done==pre.length)fin()};im.src=s});
dp('Semua');
/* spotlight + tilt + card glow */
const root=document.documentElement;addEventListener('pointermove',e=>{root.style.setProperty('--mx',e.clientX+'px');root.style.setProperty('--my',e.clientY+'px');const c=e.target.closest&&e.target.closest('.cd');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}
 if(!RM){const a=$('av');if(a&&innerWidth>900){a.style.transform=`rotateY(${(e.clientX/innerWidth-.5)*10}deg) rotateX(${-(e.clientY/innerHeight-.5)*8}deg)`}}},{passive:true});
/* background animasi (js/bg.js) */
const fx=$('fx');let sc='unreal';try{sc=localStorage.getItem('bg')||'unreal'}catch(e){}
fx.dataset.scene=sc;if(typeof initBG=='function')initBG(fx,RM);if(typeof initBG2=='function')initBG2(fx,RM);
const bt=$('bgt'),lab=()=>bt.textContent='Background: '+(fx.dataset.scene=='unreal'?'Unreal':'Lantern');lab();
bt.onclick=()=>{fx.dataset.scene=fx.dataset.scene=='unreal'?'lantern':'unreal';try{localStorage.setItem('bg',fx.dataset.scene)}catch(e){}lab();if(RM){location.reload()}};
/* magnetic buttons + cursor (desktop) */
if(!RM&&matchMedia('(hover:hover) and (pointer:fine)').matches){
 const c=$('cur');addEventListener('mousemove',e=>{c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
 document.addEventListener('mouseover',e=>c.classList.toggle('h',!!e.target.closest('a,button,.pj')));
 document.addEventListener('mousemove',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});
 document.addEventListener('mouseout',e=>{const b=e.target.closest('.btn');if(b)b.style.transform=''});
}
/* GSAP: hero reveal + parallax (optional, graceful if CDN fails) */
document.addEventListener('ready',()=>{if(RM||!window.gsap)return;
 gsap.from('.hero h1 span,.hero h1 em',{yPercent:110,duration:1,stagger:.12,ease:'power4.out'});
 gsap.from('.hero .idn,.hero .ty,.hero p,.hero .btn,.sts',{y:30,opacity:0,duration:.9,stagger:.1,delay:.3,ease:'power3.out'});
 if(window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);
  gsap.to('.avw img',{yPercent:-8,ease:'none',scrollTrigger:{trigger:'.avw',scrub:true}});gsap.to('.feat img',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.feat',scrub:true}});
  gsap.to('.beam',{y:150,ease:'none',scrollTrigger:{trigger:'.hero',scrub:true,start:'top top',end:'bottom top'}});}
});
});
