(() => {
  const benefits = ['Certificate on completion','6 months mentorship from the artist','20% off on Arden services','LinkedIn skill badge','Student name and photo on the website Wall of Fame'];
  const courses = {
    'lash-lifting-course': {
      name:'Lash Lifting Course', short:'Master professional lash lifting through focused theory, safe product application and guided hands-on practice.', duration:'2 Days', image:'newarden lashlifting.png', category:'Lash artistry',
      about:['Created for aspiring beauty professionals and artists who want a clear foundation in lash lifting, this focused course moves from consultation and lash analysis through safe, considered product application.','You will observe the complete process, understand timing and shield selection, then develop confidence through practical work and instructor feedback.'],
      days:[['Lash Lifting Fundamentals',['Introduction to lash lifting','Client consultation and safety assessment','Eye and lash analysis','Product knowledge and tool introduction','Hygiene and safety procedures','Shield selection and proper placement','Lash lifting demonstration on mannequin','Product application and processing time']],['Practical Application',['Complete lash lifting procedure on a live model','Aftercare instructions for clients','Practice session with instructor feedback','Certification and Q&A session']]]
    },
    'professional-hairstyling-course': {
      name:'Professional Hairstyling Course', short:'Build polished salon styling skills through preparation, curling, bridal styling and professional finishing techniques.', duration:'3 Days', image:'new arden make up course.png', category:'Professional hairstyling', includes:benefits,
      about:['A compact professional course for learners who want to strengthen their styling technique and understand how preparation shapes a finished look. Training progresses from analysis and sectioning to curling, bridal styling and secure finishing.','Each day has a distinct focus so you can connect product knowledge, tool control and practical styling decisions with a refined salon result.'],
      days:[['Hair Preparation & Blow-Dry Styling',['Hair analysis and client consultation','Product and tool knowledge','Hair preparation and sectioning']],['Curling Techniques',['Classic curls, modern curls or beach curls','Professional blow-dry techniques','Salon finishing techniques']],['Professional Hairstyling',['Bridal hairstyle','Bridal reception hairstyle','Hair accessories placement','Long-lasting hairstyle fixing']]]
    },
    'professional-makeup-course-5-days': {
      name:'Professional Makeup Course — 5 Days', short:'An intensive introduction to professional makeup, from considered skin preparation to bridal, glam and portfolio-ready practical work.', duration:'5 Days', image:'new arden 5 day make up (1).png', category:'Professional makeup', includes:benefits,
      about:['Designed for learners ready to develop a broader professional makeup practice, this five-day program establishes the sequence behind clean, intentional makeup application.','The curriculum moves through skin, eyes, bridal and glam looks before bringing the learning together in a practical session and photoshoot.'],
      days:[['Skin Preparation & Base Makeup',['Skin preparation','Base makeup application']],['Eye Makeup Techniques',['Eye makeup techniques']],['Bridal Makeup Techniques',['Bridal makeup techniques']],['Party & Glam Makeup',['Party and glam makeup']],['Practical & Photoshoot',['Complete practical application','Photoshoot']]]
    },
    'professional-makeup-course-7-days': {
      name:'Professional Makeup Course — 7 Days', short:'Advanced professional makeup training spanning signature occasion looks, practical work and final assessment.', duration:'7 Days', image:'new arden 7 day make up.png', category:'Advanced makeup', includes:benefits,
      about:['This seven-day course offers a more expansive route through professional makeup, with dedicated study of occasion-specific looks and the Arden signature bridal approach.','Learners progress from essential base and eye techniques into reception, bridal and engagement makeup, then complete practical and assessment-focused sessions.'],
      days:[['Skin Preparation & Base Makeup',['Skin preparation','Base makeup']],['Eye Makeup Techniques',['Eye makeup techniques']],['Reception Makeup',['Complete reception makeup look']],['Arden Signature Bridal Makeup',['Arden signature bridal makeup']],['Engagement Makeup',['Complete engagement makeup look']],['Practical & Photoshoot',['Practical application','Photoshoot']],['Final Assessment & Certification',['Final assessment','Certification','Problem solving and Q&A']]]
    },
    'professional-bridal-makeup-course': {
      name:'Professional Bridal Makeup Course', short:'Specialised bridal education focused on lasting base work, expressive eyes and complete wedding-day application.', duration:'5 Days', image:'arden bridal (1).png', category:'Bridal makeup', includes:benefits,
      about:['A focused course for makeup artists who want to understand the technical detail behind a polished, resilient bridal look. The curriculum balances thoughtful analysis with product, complexion and eye techniques.','Training concludes with a complete bridal practical, allowing the individual stages to come together as one cohesive professional application.'],
      days:[['Analysis, Hygiene & Preparation',['Skin analysis','Hygiene','Tools and products']],['Complexion Technique',['Foundation matching','Contouring','Highlighting']],['Advanced Eye Makeup',['Smokey eyes','Bridal eyes']],['Long-Wear Bridal Technique',['HD and smudge-proof techniques','Waterproof products']],['Full Bridal Practical',['Complete bridal makeup practical','Certification']]]
    },
    'self-makeup-course': {
      name:'Self Makeup Course', short:'Learn to create polished makeup for yourself with professional guidance tailored to your features, products and routine.', duration:'3 Days', image:'new arden self makeup.png', category:'Personal makeup', note:'Please bring your own makeup products and tools for the class. If required, a makeup kit may be purchased from Arden before training.',
      about:['This approachable three-day course is designed for anyone who wants to understand their own features and create considered everyday and occasion makeup with confidence.','You will learn the complete sequence—from skin preparation and base correction to eye definition, lip choices, finishing and safe removal—using techniques you can continue at home.'],
      days:[['Skin Preparation & Base Makeup',['Skin analysis and skin preparation','Product and makeup tools introduction','Foundation matching and application','Concealer and colour correction','Contouring, highlighting and blush','Setting makeup for long wear']],['Eye Makeup Techniques',['Eye shape analysis','Eyebrow shaping and filling','Eyeshadow blending techniques','Eyeliner and mascara application','False eyelashes application','Day-to-evening eye look']],['Complete Self Makeup Look',['Natural everyday makeup','Nude and bold lip techniques','Makeup finishing and setting spray','Makeup removal and basic skincare','Tips for product selection']]]
    },
    'professional-blow-dry-class': {
      name:'Professional Blow Dry Class', short:'Hands-on blow-dry training covering analysis, volume, smoothness, salon finishing and advanced styling control.', duration:'3 Days', image:'arden 3 day class.png', category:'Hair styling', includes:['Professional certificate','Hands-on practice','Live demonstration'],
      about:['Designed for aspiring and working stylists, this practical class builds a reliable professional blow-dry process from consultation and preparation through controlled styling and finishing.','Across three focused days, learners explore core tool and product knowledge before progressing to volume, smoothening, longevity and client assessment.'],
      days:[['Foundations',['Hair analysis','Tools and product knowledge','Basic blow-dry techniques']],['Shape & Finish',['Volume','Smoothening','Bouncy blowout','Salon finishing techniques']],['Advanced Styling',['Advanced styling','Long-lasting blow-dry','Client consultation and assessment']]]
    }
  };

  const slug = document.body.dataset.course;
  const course = courses[slug];
  if (!course) return;
  const whatsapp = `https://wa.me/9779851211778?text=${encodeURIComponent(`Hello Arden Academy, I would like to enquire about the ${course.name}.`)}`;
  const curriculum = course.days.map((day,index)=>`<article class="course-day"><span>Day ${String(index+1).padStart(2,'0')}</span><div><h3>${day[0]}</h3><ul>${day[1].map(item=>`<li>${item}</li>`).join('')}</ul></div></article>`).join('');
  const includes = course.includes ? `<section class="course-includes"><div><p class="course-kicker">Course includes</p><h2>More than a lesson.<br><em>A supported experience.</em></h2></div><ul>${course.includes.map(item=>`<li><span>✓</span>${item}</li>`).join('')}</ul></section>` : '';
  const related = Object.entries(courses).filter(([key])=>key!==slug).slice(slug==='professional-blow-dry-class'?0:1,slug==='professional-blow-dry-class'?3:4).map(([key,item])=>`<a href="academy/${key}/" class="course-related-card"><figure><img src="IMAGES/${item.image}" alt="${item.name} at Arden Academy" loading="lazy"></figure><small>${item.duration}</small><h3>${item.name}</h3><span>Explore course →</span></a>`).join('');

  document.querySelector('#course-page').innerHTML = `
    <nav class="course-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="academy/">Academy</a><span>/</span><strong>${course.name}</strong></nav>
    <section class="course-hero">
      <div class="course-hero__copy"><p class="course-kicker">Arden Academy · ${course.category}</p><h1>${course.name}</h1><p class="course-lead">${course.short}</p><dl><div><dt>Duration</dt><dd>${course.duration}</dd></div></dl><div class="course-actions"><a class="course-button course-button--primary" href="${whatsapp}" target="_blank" rel="noopener">Enrol now <span>↗</span></a><a class="course-button" href="contact.html">Contact Academy</a></div></div>
      <figure class="course-hero__visual"><div class="course-hero__frame"><img src="IMAGES/${course.image}" alt="${course.name} at Arden Academy Lalitpur"></div><figcaption><span>Professional training</span><span>Arden · Lalitpur</span></figcaption></figure>
    </section>
    <section class="course-overview"><div><p class="course-kicker">The course</p><h2>About This <em>Course</em></h2></div><div class="course-overview__copy"><p>${course.about[0]}</p><p>${course.about[1]}</p></div></section>
    <section class="course-curriculum"><header><p class="course-kicker">Curriculum</p><h2>What You’ll <em>Learn</em></h2><p>A clear, focused progression through ${course.duration.toLowerCase()} of guided instruction and practice.</p></header><div class="course-days">${curriculum}</div></section>
    <section class="course-facts"><div><span>01</span><small>Duration</small><strong>${course.duration}</strong></div><div><span>02</span><small>Training type</small><strong>Instructor-led</strong></div><div><span>03</span><small>Category</small><strong>${course.category}</strong></div></section>
    ${course.note?`<aside class="course-note"><strong>Before your class</strong><p>${course.note}</p></aside>`:''}
    ${includes}
    <section class="course-experience"><div class="course-experience__mark">A</div><p class="course-kicker">The Arden Academy experience</p><h2>Learn. Practice.<br><em>Perfect.</em></h2><p>Develop professional beauty skills through focused instruction, demonstrations and hands-on practice at Arden Academy.</p></section>
    <section class="course-enrol"><p class="course-kicker">Your next chapter</p><h2>Ready to Begin<br><em>Your Training?</em></h2><p>Take the next step in your beauty career with professional training at Arden Academy.</p><div class="course-actions"><a class="course-button course-button--light" href="${whatsapp}" target="_blank" rel="noopener">Enrol in this course <span>↗</span></a><a class="course-button course-button--outline" href="contact.html">Contact Academy</a></div></section>
    <section class="course-related"><header><p class="course-kicker">Continue exploring</p><h2>More Academy <em>Courses</em></h2></header><div>${related}</div><a class="course-all-link" href="academy/">View all courses →</a></section>`;

  requestAnimationFrame(()=>document.body.classList.add('course-ready'));
})();
