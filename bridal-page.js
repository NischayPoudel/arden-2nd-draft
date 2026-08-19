const bridalPackages = [
  {id:'arden-prestige',number:'01',group:'bride-packages',groupLabel:'Bride Packages',name:'Arden Prestige',type:'Luxury Package',image:'Arden Bridal Menu_page-0001.jpg',featured:true,includes:['Bridal Consultation','Haircut & Hair Treatments','Facial Treatment','Eyebrow Grooming','Hairstyling','Bridal Makeup','Dress Draping','Full Body Waxing']},
  {id:'arden-signature',number:'02',group:'bride-packages',name:'Arden Signature',type:'Classic Package',image:'Arden Bridal Menu_page-0002.jpg',includes:['Bridal Consultation','Haircut & Hair Treatment','Arden Hydrating Face Pack','Eyebrow Grooming','Hairstyling','Bridal Makeup','Dress Draping']},
  {id:'arden-essence',number:'03',group:'bride-packages',name:'Arden Essence',type:'Essential Package',image:'Arden Bridal Menu_page-0003.jpg',includes:['Arden Hydrating Face Pack','Eyebrow Grooming','Hairstyling','Bridal Makeup','Dress Draping']},
  {id:'arden-gentleman',number:'04',group:'groom-package',groupLabel:'Groom Package',name:'Arden Gentleman',type:'Groom Package',image:'Arden Bridal Menu_page-0004.jpg',includes:['Hair Wash','Professional Hair Styling','Arden Hydrating Face Pack','Groom Makeup']},
  {id:'arden-eternal',number:'05',group:'couple-packages',groupLabel:'Couple Packages',name:'Arden Eternal',type:'Luxury Couple Package',image:'Arden Bridal Menu_page-0005.jpg',bride:['Bridal Consultation','Haircut & Hair Treatments','Facial Treatment','Eyebrow Grooming','Hairstyling','Bridal Makeup','Dress Draping','Full Body Waxing'],groom:['Hair Wash','Arden Hydrating Face Pack','Professional Hair Styling','Groom Makeup']},
  {id:'arden-forever',number:'06',group:'couple-packages',name:'Arden Forever',type:'Classic Couple Package',image:'Arden Bridal Menu_page-0006.jpg',bride:['Bridal Consultation','Haircut & Hair Treatment','Arden Hydrating Face Pack','Eyebrow Grooming','Hairstyling','Bridal Makeup','Dress Draping'],groom:['Hair Wash','Professional Hair Styling','Arden Hydrating Face Pack','Groom Makeup']},
  {id:'arden-together',number:'07',group:'couple-packages',name:'Arden Together',type:'Essential Couple Package',image:'Arden Bridal Menu_page-0007.jpg',bride:['Arden Hydrating Face Pack','Eyebrow Grooming','Hairstyling','Bridal Makeup','Dress Draping'],groom:['Hair Wash','Professional Hair Styling','Arden Hydrating Face Pack','Groom Makeup']}
];

const inclusionRows=items=>`<ul class="bridal-inclusions">${items.map(item=>`<li><span>${item}</span><small>Included</small></li>`).join('')}</ul>`;
const catalogue=document.querySelector('#bridal-packages');
catalogue.innerHTML=bridalPackages.map((pkg,index)=>`
  ${pkg.groupLabel?`<header class="bridal-group-heading" id="${pkg.group}"><p>${pkg.groupLabel}</p><span>${pkg.group==='bride-packages'?'For the bride':pkg.group==='groom-package'?'For the groom':'For the two of you'}</span></header>`:''}
  <section class="bridal-package${pkg.featured?' bridal-package--featured':''}${index%2?' bridal-package--reverse':''}" id="${pkg.id}">
    <figure><img src="IMAGES/${pkg.image}" alt="${pkg.name} ${pkg.type}" loading="lazy"${pkg.imagePosition?` style="object-position:${pkg.imagePosition}"`:''}></figure>
    <div class="bridal-package__content">
      <header><span>${pkg.number}</span><p>${pkg.type}</p><h2>${pkg.name}</h2></header>
      ${pkg.includes?inclusionRows(pkg.includes):`<div class="bridal-couple-includes"><section><h3>Bride Includes</h3>${inclusionRows(pkg.bride)}</section><section><h3>Groom Includes</h3>${inclusionRows(pkg.groom)}</section></div>`}
      <a class="bridal-package__book" href="contact.html#appointment">Book a Bridal Consultation</a>
    </div>
  </section>`).join('');

const reveals=document.querySelectorAll('.bridal-intro > *, .bridal-group-heading > *, .bridal-package > *, .bridal-consultation > *');
if(matchMedia('(prefers-reduced-motion: reduce)').matches){reveals.forEach(element=>element.classList.add('bridal-visible'))}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('bridal-visible');observer.unobserve(entry.target)}),{threshold:.1,rootMargin:'0px 0px -40px'});
  reveals.forEach((element,index)=>{element.classList.add('bridal-reveal');element.style.setProperty('--bridal-delay',`${(index%2)*80}ms`);observer.observe(element)});
}
const packageNav=document.querySelector('.bridal-package-nav');
const floatingPackageNav=packageNav.cloneNode(true);
floatingPackageNav.classList.add('bridal-package-nav--floating');
floatingPackageNav.setAttribute('aria-label','Bridal package categories while scrolling');
document.body.append(floatingPackageNav);
const packageNavLinks=[...document.querySelectorAll('.bridal-package-nav a')];
packageNavLinks.forEach(link=>link.addEventListener('click',()=>{
  const target=link.getAttribute('href');
  packageNavLinks.forEach(item=>item.classList.toggle('active',item.getAttribute('href')===target));
}));
let bridalNavTicking=false;
const syncBridalPackageNav=()=>{
  const header=document.querySelector('.site-header');
  const headerBottom=Math.max(0,header?.getBoundingClientRect().bottom||0);
  const navPassed=packageNav.getBoundingClientRect().top<=headerBottom;
  const catalogueVisible=catalogue.getBoundingClientRect().bottom>headerBottom;
  floatingPackageNav.style.setProperty('--bridal-nav-top',`${headerBottom}px`);
  floatingPackageNav.classList.toggle('is-visible',navPassed&&catalogueVisible);
  bridalNavTicking=false;
};
const requestBridalNavSync=()=>{
  if(bridalNavTicking)return;
  requestAnimationFrame(syncBridalPackageNav);
  bridalNavTicking=true;
};
addEventListener('scroll',requestBridalNavSync,{passive:true});
addEventListener('resize',requestBridalNavSync);
addEventListener('load',requestBridalNavSync,{once:true});
document.addEventListener('arden:header-ready',requestBridalNavSync);
requestBridalNavSync();
