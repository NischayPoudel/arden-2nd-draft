const C=(id,nav,title,image,services,extra={})=>({id,nav,title,image,services,...extra});
const serviceCategories=[
C('facial-skin','Facial & Skin','Facial & Skin Treatments','anna2.jpg',[['Deep Cleansing','Rs. 2,500'],['Hydra Facial','Rs. 6,000'],['Brightening Facial','Rs. 4,500'],['De-Tan Facial','Rs. 4,000'],['Arden Specialist Skin Treatment','Rs. 3,000','Treatment only, no facial included.'],['Sensitive Skin + Scalp Treatment','Rs. 6,000'],['Acne Treatment','Rs. 3,000','Flakiness / Oily Skin / Sweaty Skin / Sensitive Skin'],['Bridal Skin & Scalp Rejuvenation Treatment','Rs. 7,000'],['Arden Facial','Rs. 4,500'],['Casmara Facial','Rs. 8,500'],['Lotus Facial','Rs. 3,500'],['Kous','Rs. 8,500']]),
C('precision-haircuts','Precision Haircuts','Precision Haircuts','hair.jpg',[['Master Stylist Haircut','Starting from Rs. 3,000','Hair wash / Hair cut / Blow dry']],{featured:true,notes:['Note: Non-detachable','Each treatment is tailored to the client, so appointment times may vary based on the selected service and individual requirements.']}),
C('colour-studio','Colour Studio','The Colour Studio','anna4.jpg',[['Root Touch-Up','Rs. 2,500'],['Root Touch-Up — Half Length','Rs. 3,000'],['Global Color','Rs. 12,500','Hair & Scalp Treatment / Styling Cutting'],['Color with Highlights','Rs. 16,500','Hair & Scalp Treatment / Hair Styling / Hair Makeover'],['Treatment + Highlight + Touchup + Cutting','Rs. 10,400','Detachable'],['Technical Highlight','Rs. 12,000','Balayage / Money Piece / Baby Highlight / Foilayage'],['Full Hair Makeover','Rs. 19,000']],{label:'Services and Prices Starting From',note:'Haircut and hair color services are priced based on hair length and density/thickness. Final pricing will be confirmed during consultation.'}),
C('hair-treatments','Hair Treatments & Styling','Hair Treatments & Styling','anna3.jpg',[['Hair Wash','Rs. 500'],['Blow Dry','Rs. 1,000'],['Hair Wash & Blow Dry','Rs. 1,500'],['Hair Iron','Rs. 1,500'],['Hair Curling','Rs. 1,500'],['Hair Spa','Rs. 3,000'],['Hair Oiling & Spa','Rs. 3,000','45–60 mins'],['Hair Oiling & Blow Dry','Rs. 3,500'],['Hair Botox','Rs. 10,000'],['Keratin Treatment','Rs. 8,500'],['Hair Smoothening','Rs. 14,000'],['Hair Rebonding','Rs. 10,000'],['Hair Relaxing Treatment','Rs. 3,000'],['Hair Styling / Hair Do','Rs. 4,500'],['Head Spa','Rs. 2,000','30 min'],['Hair Oil Massage','Rs. 2,500','30 min']]),
C('hand-foot','Hand & Foot Care','Hand & Foot Care','nails.jpg',[['Dry Manicure','Rs. 1,200','15 min · Nail care, cleansing, scrub and massage.'],['Luxury Manicure','Rs. 2,000','60–75 min · Nail care, crystal cleansing, scrub, massage and pack.'],['Dry Pedicure','Rs. 1,500','15 min · Nail care, cleansing, scrub and massage.'],['Luxury Pedicure','Rs. 3,000','60–75 min · Nail care, crystal cleansing, scrub, massage and pack.'],['Oil Foot Massage','Rs. 2,000','Massage through oil.']]),
C('brow-lash','Brow and Lash Atelier','Brow & Lash Atelier','makeup.jpg',[['Lash Lifting','Rs. 3,500'],['Brow Lamination','Rs. 3,500'],['Eyelash Extension Removal','Rs. 1,000'],{name:'Eyelash Extension',children:[['Classic','Rs. 2,500'],['Hybrid','Rs. 3,500'],['Volume','Rs. 4,500'],['Mega Volume','Rs. 5,000']]}]),
C('threading','Threading & Facial Grooming','Threading & Facial Grooming','anna.jpg',[['Forehead','Rs. 100'],['SideLocks','Rs. 200'],['Eyebrow Shaping','Rs. 250'],['Upper Lip','Rs. 100'],['Chin','Rs. 100'],['Full Face Threading','Rs. 500'],['Eyebrow Shaping','Rs. 1,000']]),
C('body-grooming','Body Grooming Services','Body Grooming Services','vintage.jpg',[['Face Waxing','Rs. 500'],['Underarms','Rs. 500'],['Half Arms','Rs. 800'],['Full Arms','Rs. 1,500'],['Half Legs','Rs. 1,000'],['Full Legs','Rs. 2,000'],['Half Back','Rs. 800'],['Full Back','Rs. 1,600'],['Full Stomach','Rs. 1,000'],['Bikini Wax','Rs. 1,200'],['Brazilian Wax','Rs. 3,000'],['Full Body Waxing','Rs. 4,500'],['Full Body Waxing + Bikini Line','Rs. 5,700'],['Full Body Waxing + Brazilian','Rs. 8,500']]),
C('arden-special','Arden Special','Arden Special','royal.jpg',[['Sweaty Scalp Treatment','Rs. 3,500','Anti-Hairfall / Anti-Flakiness / Sweat Control / Itchy & Dry Scalp Treatment / Lice Treatment / Fungal/Dandruff Treatment / Sensitive Scalp & Skin Treatment / Head Spa included'],['Brazilian Blow Out','Rs. 15,000'],['Arden Special Facial','Rs. 8,000','With Skin Test'],['Skin Treatment','Rs. 3,000'],['Hair Cut by Master Hair Stylist','Rs. 3,000','Wash, hair cut and blow dry.']]),
C('party-event','Party & Event Glam','Party & Event Glam','bridal makeup image.jpg',[['Event Makeup','Rs. 3,500'],['Guest Makeup','Rs. 8,000'],['Party Makeup','Rs. 12,500','By Junior Makeup Artist'],['Full Glam Party Makeup','Rs. 15,000','By Senior Makeup Artist'],['VIP Party Makeup','Rs. 27,000']]),
C('nail-studio','Nail Studio','Nail Studio','SaveClip.App_719491000_17915424168392530_8442853382264134304_n.jpg',[['Gel Nail Extensions — Plain','Rs. 2,500'],['Gel Polish (Hands)','Rs. 2,000'],['Gel Polish (Feet)','Rs. 1,500'],['Nail Refill','Rs. 2,500'],['Nail Art','Rs. 100 / nail art'],['Extension Removal','Rs. 1,000'],['Normal Nail Paint with Filing','Rs. 500']],{note:'Nail art pricing varies based on the design. Custom designs are charged at an additional Rs. 100 per nail art.'})];
const serviceImages = {
  'facial-skin': 'anna4.jpg',
  'precision-haircuts': 'hair.jpg',
  'colour-studio': 'anna3.jpg',
  'hair-treatments': 'anna.jpg',
  'hand-foot': 'nails.jpg',
  'brow-lash': 'makeup.jpg',
  'threading': 'anna2.jpg',
  'body-grooming': 'traditional.jpg',
  'arden-special': 'royal.jpg',
  'party-event': 'bridal makeup image.jpg',
  'nail-studio': 'SaveClip.App_719491000_17915424168392530_8442853382264134304_n.jpg'
};

serviceCategories.forEach(category => { category.image = serviceImages[category.id]; });

const row=(s,child='')=>`<li class="service-row ${child}"><div><h3>${s[0]}</h3>${s[2]?`<p>${s[2]}</p>`:''}</div></li>`;
const nav=document.querySelector('#category-navigation'),catalogue=document.querySelector('#services-catalogue');
nav.innerHTML=`<a href="#all-services" class="category-chip active" data-filter="all" aria-current="true">All</a>${serviceCategories.map(c=>`<a href="#${c.id}" class="category-chip" data-filter="${c.id}">${c.nav}</a>`).join('')}`;
catalogue.innerHTML=serviceCategories.map((c,i)=>`<section class="service-category${c.featured?' featured':''}" id="${c.id}"><figure><img src="IMAGES/${c.image}" alt="${c.nav} service" loading="lazy"></figure><div class="service-content"><header><span>${String(i+1).padStart(2,'0')}</span><p>Our Services</p><h2>${c.title}</h2></header><ul class="service-list">${c.services.map(s=>Array.isArray(s)?row(s):`<li class="service-parent"><h3>${s.name}</h3><ul>${s.children.map(x=>row(x,'child')).join('')}</ul></li>`).join('')}</ul>${c.notes?`<aside class="service-note">${c.notes.map(n=>`<p>${n}</p>`).join('')}</aside>`:''}<a class="service-book" href="contact.html">Book an Appointment →</a></div></section>`).join('');
const chips=[...nav.querySelectorAll('a')];
const sections=[...document.querySelectorAll('.service-category')];

function filterServices(filter,{scroll=true}={}){
  const showAll=filter==='all';
  catalogue.classList.add('is-filtering');
  chips.forEach(chip=>{
    const selected=chip.dataset.filter===filter;
    chip.classList.toggle('active',selected);
    chip.setAttribute('aria-current',selected?'true':'false');
  });
  window.setTimeout(()=>{
    sections.forEach(section=>{section.hidden=!showAll&&section.id!==filter});
    catalogue.classList.remove('is-filtering');
    if(scroll) catalogue.scrollIntoView({behavior:'smooth',block:'start'});
  },180);
}

chips.forEach(chip=>chip.addEventListener('click',event=>{
  event.preventDefault();
  const filter=chip.dataset.filter;
  history.replaceState(null,'',filter==='all'?'#all-services':`#${filter}`);
  filterServices(filter);
}));

const requested=location.hash.slice(1);
if(serviceCategories.some(category=>category.id===requested)) filterServices(requested,{scroll:false});
