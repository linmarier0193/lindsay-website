(()=>{const c=document.getElementById("sparkle-container");let last=0;
document.addEventListener("mousemove",e=>{const n=performance.now();if(n-last<24)return;last=n;
const s=document.createElement("div"),id="g"+Date.now()+Math.random(),z=Math.random()*12+8;s.className="cursor-sparkle";
s.style.cssText=`left:${e.clientX+(Math.random()-.5)*24}px;top:${e.clientY+(Math.random()-.5)*24}px;width:${z}px;height:${z}px;animation:sparkle-fade .8s ease-out forwards`;
s.innerHTML=`<svg viewBox="0 0 51 51"><defs><linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff"/><stop offset="30%" stop-color="#e8e8ec"/><stop offset="55%" stop-color="#b8bcc4"/><stop offset="75%" stop-color="#8f95a3"/><stop offset="100%" stop-color="#c8ccd4"/></linearGradient></defs><path d="M25.5 0 L31 19 L51 25.5 L31 32 L25.5 51 L20 32 L0 25.5 L20 19 Z" fill="url(#${id})" stroke="#fff" stroke-width=".5"/></svg>`;
c.appendChild(s);setTimeout(()=>s.remove(),800)},{passive:true});
const links=[...document.querySelectorAll(".nav-link")],sections=[...document.querySelectorAll("main[id],section[id]")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("active",l.hash==="#"+e.target.id))}),{rootMargin:"-35% 0px -55%"});
sections.forEach(s=>io.observe(s));})();