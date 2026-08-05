const loader = document.querySelector('.loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('done'), 450));

const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; });
document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter',()=>{cursor.style.width='38px';cursor.style.height='38px'}); el.addEventListener('mouseleave',()=>{cursor.style.width='12px';cursor.style.height='12px'}); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const clamp = (n,min=0,max=1) => Math.max(min,Math.min(max,n));
const transition = document.querySelector('.cloud-transition');
const treatments = document.querySelector('.treatments');
const panels = [...document.querySelectorAll('.service-panel')];
const serviceImages = [...document.querySelectorAll('.service-images img')];
const railNumbers = [...document.querySelectorAll('.number-rail span')];
let currentService = -1, ticking = false;
function sectionProgress(el){const r=el.getBoundingClientRect();return clamp(-r.top/(el.offsetHeight-innerHeight))}
function renderScroll(){
  if(transition){
    const fadeStart=Math.max(1,innerHeight*.025),fadeEnd=Math.max(80,innerHeight*.18);
    transition.style.setProperty('--transition-fade',clamp((scrollY-fadeStart)/(fadeEnd-fadeStart)));
  }
  const tp=sectionProgress(treatments),index=Math.min(5,Math.floor(tp*6));
  if(index!==currentService){currentService=index;panels.forEach((p,i)=>p.classList.toggle('active',i===index));serviceImages.forEach((p,i)=>p.classList.toggle('active',i===index));railNumbers.forEach((p,i)=>p.classList.toggle('active',i===index));document.querySelector('.image-label span').textContent=String(index+1).padStart(2,'0')}
  document.querySelector('.treatment-progress i').style.width=`${tp*100}%`;ticking=false;
}
function requestRender(){if(!ticking){requestAnimationFrame(renderScroll);ticking=true}}
window.addEventListener('scroll',requestRender,{passive:true});window.addEventListener('resize',requestRender);renderScroll();

// Pinned service cards with a slow, editorial scroll rhythm.
function initMotionCards(){
  if(!window.gsap||!window.ScrollTrigger||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();
  mm.add('(min-width: 768px)',()=>{
    const timeline=gsap.timeline({scrollTrigger:{trigger:'.card-scroll',start:'top top',end:'bottom bottom',scrub:1.05,invalidateOnRefresh:true,onUpdate:self=>gsap.set('.card-progress i',{width:`${self.progress*100}%`})}});
    timeline.set('.motion-cards',{xPercent:8})
      .fromTo('.motion-card',{scale:.16,autoAlpha:0},{scale:1,autoAlpha:1,duration:.42,stagger:.045,ease:'back.out(1.35)'},0)
      .fromTo('.motion-cards',{xPercent:8},{xPercent:-48,duration:1.25,ease:'none'},.64)
      .fromTo('.card-bridal',{y:95,rotate:-3},{y:-70,rotate:1,duration:1.25,ease:'none'},.64)
      .fromTo('.card-hair',{y:-70,rotate:2},{y:85,rotate:-1,duration:1.25,ease:'none'},.64)
      .fromTo('.card-nails',{y:90,rotate:-1},{y:-80,rotate:1.5,duration:1.25,ease:'none'},.64)
      .fromTo('.card-makeup',{y:-65,rotate:1.8},{y:75,rotate:-1,duration:1.25,ease:'none'},.64)
      .fromTo('.card-academy',{y:95,rotate:-2},{y:-65,rotate:.5,duration:1.25,ease:'none'},.64);
  });
  mm.add('(max-width: 767px)',()=>{
    const timeline=gsap.timeline({scrollTrigger:{trigger:'.card-scroll',start:'top top',end:'bottom bottom',scrub:1,onUpdate:self=>gsap.set('.card-progress i',{width:`${self.progress*100}%`})}});
    timeline.set('.motion-cards',{xPercent:0})
      .fromTo('.motion-card',{scale:.14,autoAlpha:0},{scale:1,autoAlpha:1,duration:.4,stagger:.04,ease:'back.out(1.25)'},0)
      .to('.motion-cards',{xPercent:-76,duration:1.2,ease:'none'},.58)
      .fromTo('.motion-card:nth-child(odd)',{y:55},{y:-55,duration:1.2,ease:'none'},.58)
      .fromTo('.motion-card:nth-child(even)',{y:-45},{y:55,duration:1.2,ease:'none'},.58);
  });
  addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
}
initMotionCards();

function initManifestoMotion(){
  if(!window.gsap||!window.ScrollTrigger||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline({scrollTrigger:{trigger:'.manifesto',start:'top bottom',end:'top 18%',scrub:1}})
    .fromTo('.manifesto-sticky',{backgroundColor:'#7f2779'},{backgroundColor:'#7f2779',ease:'none'},0)
    .fromTo('.manifesto-title',{color:'#fff'},{color:'#fff',ease:'none'},0)
    .fromTo('.site-header',{color:'#fff'},{color:'#fff',ease:'none'},0)
    .fromTo('.site-header .brand img',{filter:'brightness(0) invert(1)'},{filter:'brightness(0) invert(1)',ease:'none'},0)
    .fromTo('.story-progress',{backgroundColor:'rgba(255,255,255,.2)'},{backgroundColor:'rgba(255,255,255,.2)',ease:'none'},0)
    .fromTo('.story-progress i',{backgroundColor:'#fff'},{backgroundColor:'#fff',ease:'none'},0);
  gsap.matchMedia().add('(min-width: 768px)',()=>{
    const timeline=gsap.timeline({scrollTrigger:{trigger:'.manifesto',start:'top top',end:'bottom bottom',scrub:1.1,invalidateOnRefresh:true,onUpdate:self=>gsap.set('.story-progress i',{width:`${self.progress*100}%`})}});
    timeline.fromTo('.story-column-left',{yPercent:0},{yPercent:-51,duration:1,ease:'none'},0)
      .fromTo('.story-column-right',{yPercent:0},{yPercent:-54,duration:1,ease:'none'},0);
  });
  gsap.matchMedia().add('(max-width: 767px)',()=>{
    gsap.to('.story-column',{yPercent:-50,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top top',end:'bottom bottom',scrub:1,onUpdate:self=>gsap.set('.story-progress i',{width:`${self.progress*100}%`})}});
  });
}
initManifestoMotion();

function initContactReveal(){
  if(!window.gsap||!window.ScrollTrigger||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const timeline=gsap.timeline({scrollTrigger:{trigger:'.contact',start:'top top',end:'bottom bottom',scrub:1.15,invalidateOnRefresh:true,onUpdate:self=>gsap.set('.contact-progress i',{width:`${self.progress*100}%`})}});
  timeline.fromTo('.contact-portrait',{scale:.2,yPercent:5},{scale:1,yPercent:0,duration:.58,ease:'power2.inOut'},0)
    .fromTo('.contact-shade',{autoAlpha:0},{autoAlpha:1,duration:.22,ease:'none'},.48)
    .fromTo('.contact-frame',{yPercent:120,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:.4,ease:'power2.out'},.18)
    .fromTo('.contact-copy',{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.28,ease:'power2.out'},.3)
    .to('.contact-frame',{yPercent:0,duration:.14,ease:'none'},.58)
    .to('.contact-frame',{yPercent:-30,duration:.28,ease:'power1.inOut'},.72)
    .to('.site-header',{color:'#fff',duration:.16,ease:'none'},.38)
    .to('.site-header .brand img',{filter:'brightness(0) invert(1)',duration:.16,ease:'none'},.38);
}
initContactReveal();
