const sharedHeaderScript = document.createElement('script');
sharedHeaderScript.src = 'nav-header.js';
sharedHeaderScript.defer = true;
document.head.appendChild(sharedHeaderScript);

const sharedFooterScript = document.createElement('script');
sharedFooterScript.src = 'footer.js';
sharedFooterScript.defer = true;
document.head.appendChild(sharedFooterScript);

// Keep every inner page on the same editorial type system as the homepage.
if (!document.querySelector('link[href*="Cormorant+Garamond"]')) {
  const editorialFont = document.createElement('link');
  editorialFont.rel = 'stylesheet';
  editorialFont.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=DM+Sans:wght@400;500;600&family=Italiana&display=swap';
  document.head.appendChild(editorialFont);
}

const loader = document.querySelector('.loader');
addEventListener('load', () => setTimeout(() => loader?.classList.add('done'), 350));
const hasLandingPhoto = document.querySelector('.detail-hero > img, .contact-page-image img');
if (hasLandingPhoto && !document.body.classList.contains('services-page')) {
  document.body.classList.add('landing-photo-page');
  addEventListener('load', () => document.body.classList.add('landing-photo-loaded'), { once: true });
}
const cursor = document.querySelector('.cursor');
if (cursor) {
  addEventListener('mousemove', event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll('a,button').forEach(element => {
    element.addEventListener('mouseenter', () => { cursor.style.width = '38px'; cursor.style.height = '38px'; });
    element.addEventListener('mouseleave', () => { cursor.style.width = '12px'; cursor.style.height = '12px'; });
  });
}

const innerReveals = document.querySelectorAll(
  '.detail-intro > *, .detail-points > div, .detail-gallery figure, .detail-cta > *, .editorial-intro > *, .editorial-split > *, .service-directory > a, .gallery-directory figure, .contact-page-copy > *, .service-category > *, .services-closing > *, .founder-note > *, .about-foundation header, .foundation-grid article, .about-experience__content > *, .experience-list article'
);
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  innerReveals.forEach(element => element.classList.add('inner-visible'));
} else {
  const innerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('inner-visible');
      innerObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -35px' });
  innerReveals.forEach((element, index) => {
    element.classList.add('inner-reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 90}ms`);
    innerObserver.observe(element);
  });
}

const contactPage = document.querySelector('.contact-page');
if (contactPage) {
  const visitLink = contactPage.querySelector('.contact-options a[href*="maps.google.com"]');
  if (visitLink) {
    visitLink.href = 'https://www.google.com/maps/place/Arden+the+beauty+point/@27.6836147,85.3131489,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b46620b013:0x113b235dbf958b7a!8m2!3d27.6836147!4d85.3131489!16s%2Fg%2F11g01v5pff?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D';
    visitLink.target = '_blank';
    visitLink.rel = 'noopener';
  }
  const appointmentSection = document.createElement('section');
  appointmentSection.className = 'appointment-section';
  appointmentSection.id = 'appointment';
  appointmentSection.innerHTML = `
    <div class="appointment-heading">
      <p>Book Your Visit</p>
      <h2>Request <em>Appointment</em></h2>
    </div>
    <form class="appointment-form" aria-label="Request an appointment">
      <div class="appointment-field">
        <label for="appointment-name">Full Name</label>
        <input id="appointment-name" name="Full Name" type="text" autocomplete="name" placeholder="Your full name" required>
      </div>
      <div class="appointment-field">
        <label for="appointment-phone">Phone Number</label>
        <input id="appointment-phone" name="Phone Number" type="tel" autocomplete="tel" inputmode="tel" placeholder="Your phone number" required>
      </div>
      <div class="appointment-field">
        <label for="appointment-email">Email Address</label>
        <input id="appointment-email" name="Email Address" type="email" autocomplete="email" placeholder="Your email address" required>
      </div>
      <div class="appointment-field">
        <label for="appointment-service">Preferred Service</label>
        <select id="appointment-service" name="Preferred Service" required>
          <option value="" selected disabled>Select a service</option>
          <option>Facial &amp; Skin Treatments</option><option>Precision Haircuts</option>
          <option>The Colour Studio</option><option>Hair Treatments &amp; Styling</option>
          <option>Hand &amp; Foot Care</option><option>Brow &amp; Lash</option>
          <option>Threading &amp; Facial Grooming</option><option>Body Grooming</option>
          <option>Arden Special</option><option>Party &amp; Event Glam</option><option>Nail Studio</option>
          <optgroup label="Bridal Services">
            <option>Bridal Consultation</option><option>Arden Prestige</option><option>Arden Signature</option>
            <option>Arden Essence</option><option>Arden Gentleman</option><option>Arden Eternal</option>
            <option>Arden Forever</option><option>Arden Together</option>
          </optgroup>
          <optgroup label="Arden Academy">
            <option>Self-Makeup Class</option><option>Professional Makeup Education</option><option>Focused Masterclasses</option>
          </optgroup>
        </select>
      </div>
      <div class="appointment-field">
        <label for="appointment-expert">Preferred Expert</label>
        <select id="appointment-expert" name="Preferred Expert">
          <option selected>No preference</option><option>Senior Expert</option><option>Master Stylist</option><option>Junior Expert</option>
        </select>
      </div>
      <div class="appointment-field">
        <label for="appointment-date">Preferred Date</label>
        <input id="appointment-date" name="Preferred Date" type="date" required>
      </div>
      <div class="appointment-field appointment-time">
        <label for="appointment-time">Preferred Time</label>
        <select id="appointment-time" name="Preferred Time" required>
          <option value="" selected disabled>Select time</option>
          <option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option>
          <option>1:00 PM</option><option>2:00 PM</option><option>3:00 PM</option><option>4:00 PM</option><option>5:00 PM</option>
        </select>
      </div>
      <div class="appointment-field appointment-message">
        <label for="appointment-message">Message / Special Requirements</label>
        <textarea id="appointment-message" name="Message / Special Requirements" rows="5" maxlength="500" placeholder="Tell us about your needs, preferences, or any special requirements..."></textarea>
        <small><span id="appointment-count">0</span> / 500 characters</small>
      </div>
      <button class="appointment-submit" type="submit">Request Appointment <span aria-hidden="true">→</span></button>
      <p class="appointment-assurance">Our team will contact you to confirm your appointment.</p>
    </form>`;
  contactPage.insertAdjacentElement('afterend', appointmentSection);
  if (location.hash === '#appointment') {
    requestAnimationFrame(() => appointmentSection.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    }));
  }

  const dateField = appointmentSection.querySelector('#appointment-date');
  const localToday = new Date();
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
  dateField.min = localToday.toISOString().split('T')[0];
  const messageField = appointmentSection.querySelector('#appointment-message');
  const messageCount = appointmentSection.querySelector('#appointment-count');
  messageField.addEventListener('input', () => { messageCount.textContent = messageField.value.length; });
}

const founderNote = document.querySelector('.founder-note');
const aboutStory = document.querySelector('.about-story');
if (founderNote && aboutStory) {
  aboutStory.parentNode.insertBefore(founderNote, aboutStory);
}

const academyIntro = document.querySelector('body:not(.bridal-catalogue-page) .detail-intro');
if (academyIntro && /Arden Academy/i.test(document.title)) {
  document.querySelector('.detail-gallery')?.remove();
  const academyCourses = document.createElement('section');
  academyCourses.className = 'academy-courses';
  academyCourses.id = 'academy-courses';
  academyCourses.innerHTML = `
    <div class="academy-courses__intro">
      <h2>Learn<br>the art<br>behind<br>the look</h2>
      <p>Build confidence in your own routine or develop the practical, professional skills to turn artistry into a career.</p>
    </div>
    <div class="academy-course-cards">
      <a class="academy-course-card" href="contact.html#appointment">
        <img src="IMAGES/self makeup.jpg" alt="Self-makeup education at Arden">
        <div><small>Course</small><h3>Self-Makeup<br>Class</h3><p>For clients who want to build confidence with everyday and occasion makeup.</p><strong>Explore Course <span aria-hidden="true">↗</span></strong></div>
      </a>
      <a class="academy-course-card academy-course-card--raised" href="contact.html#appointment">
        <img src="IMAGES/traditional.jpg" alt="Professional makeup education at Arden">
        <div><small>Course</small><h3>Professional<br>Makeup Education</h3><p>For aspiring artists seeking structured, practical beauty training.</p><strong>Explore Course <span aria-hidden="true">↗</span></strong></div>
      </a>
      <a class="academy-course-card" href="contact.html#appointment">
        <img src="IMAGES/makeup.jpg" alt="Focused makeup masterclass at Arden">
        <div><small>Course</small><h3>Focused<br>Masterclasses</h3><p>Concentrated demonstrations and guided practice for refining selected techniques.</p><strong>Explore Masterclasses <span aria-hidden="true">↗</span></strong></div>
      </a>
    </div>`;
  academyIntro.insertAdjacentElement('afterend', academyCourses);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) academyCourses.classList.add('is-visible');
  else {
    const academyObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      academyCourses.classList.add('is-visible');
      academyObserver.disconnect();
    }), { threshold: .12 });
    academyObserver.observe(academyCourses);
  }
}
