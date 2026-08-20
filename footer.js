(() => {
  const footerHTML = `
<footer class="site-footer arden-footer">
  <div class="footer-main">
    <div class="footer-about">
      <a class="footer-brand" href="index.html#top" aria-label="Arden home"><img src="IMAGES/arden_logo_final-removebg-preview.png" alt="Arden Beauty Point and Academy"></a>
      <p>Beauty, elevated through expertise and personalised care. The Beauty Point &amp; Academy.</p>
    </div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <h2>Navigate</h2>
      <a href="index.html#top">Home</a><a href="about.html">About</a><a href="services.html">Services</a><a href="bridal-artistry.html">Bridal</a><a href="gallery.html">Gallery</a><a href="arden-academy.html">Academy</a><a href="contact.html">Contact</a>
    </nav>
    <div class="footer-contact">
      <h2>Contact</h2>
      <a href="tel:+9779851211778"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>+977 985-1211778</a>
      <a href="https://wa.me/9779851211778" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4a12 12 0 0 0-10.3 18.2L4 28l6-1.6A12 12 0 1 0 16 4Zm0 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.5.9 1-3.4-.3-.4A9.8 9.8 0 1 1 16 25.8Zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.9-.7-3.5-2-4.6-3.7-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.1.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.3-.5-.4-1.2-.7Z"/></svg>WhatsApp</a>
      <a href="mailto:hello@ardenthebeautypoint.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>hello@ardenthebeautypoint.com</a>
      <p><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>Kathmandu, Nepal</p>
    </div>
    <div class="footer-follow">
      <h2>Follow</h2>
      <div class="footer-socials">
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-dot" cx="17.4" cy="6.7" r="1"/></svg></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 320 512" aria-hidden="true"><path d="M279.1 288l14.2-92.7h-88.9v-60.1c0-25.4 12.4-50.1 52.2-50.1H297V6.3S260.4 0 225.4 0C152.3 0 104.5 44.4 104.5 124.7v70.6H23.2V288h81.3v224h99.9V288h74.7Z"/></svg></a>
      </div>
      <form class="footer-newsletter" action="mailto:hello@ardenthebeautypoint.com" method="post" enctype="text/plain"><label class="sr-only" for="footer-email">Your email</label><input id="footer-email" name="email" type="email" placeholder="Your email" required><button type="submit">Join</button></form>
    </div>
  </div>
  <div class="footer-bottom"><small>&copy; 2026 Arden The Beauty Point &amp; Academy. All Rights Reserved.</small><nav aria-label="Legal"><a href="privacy-policy.html">Privacy Policy</a><a href="terms-and-conditions.html">Terms &amp; Conditions</a><a href="cancellation-policy.html">Cancellation Policy</a></nav></div>
</footer>`;

  const currentFooter = document.querySelector('body > footer');
  if (currentFooter) currentFooter.outerHTML = footerHTML;
  else document.body.insertAdjacentHTML('beforeend', footerHTML);
  if (!document.querySelector('.floating-whatsapp')) {
    document.body.insertAdjacentHTML('beforeend', `
      <a class="floating-whatsapp" href="https://wa.me/9779851211778?text=${encodeURIComponent('Hello Arden, I would like to make an appointment.')}" target="_blank" rel="noopener" aria-label="Chat with Arden on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4a12 12 0 0 0-10.3 18.2L4 28l6-1.6A12 12 0 1 0 16 4Zm0 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.5.9 1-3.4-.3-.4A9.8 9.8 0 1 1 16 25.8Zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.9-.7-3.5-2-4.6-3.7-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.1.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.3-.5-.4-1.2-.7Z"/></svg>
      </a>`);
  }
  document.querySelectorAll('a[href="tel:+9770000000000"]').forEach(link => {
    link.href = 'tel:+9779851211778';
    const number = link.querySelector('strong');
    if (number) number.textContent = '+977 985-1211778';
  });
  document.querySelectorAll('a[href="https://wa.me/977000000000"]').forEach(link => {
    link.href = 'https://wa.me/9779851211778';
  });
  const routeAppointmentLinks = () => {
    const appointmentUrl = `https://wa.me/9779851211778?text=${encodeURIComponent('Hello Arden, I would like to make an appointment.')}`;
    document.querySelectorAll('a').forEach(link => {
      const label = link.textContent.trim();
      const href = link.getAttribute('href') || '';
      const isAppointmentCta = link.matches('.book-link,.side-menu-book,.service-book,.about-book')
        || /book (?:an? |your )?(?:appointment|consultation)|make an appointment/i.test(label)
        || (/appointment/i.test(href) && href.startsWith('mailto:'));
      if (!isAppointmentCta) return;
      link.href = appointmentUrl;
      link.target = '_blank';
      link.rel = 'noopener';
    });
  };
  routeAppointmentLinks();
  document.addEventListener('arden:header-ready', routeAppointmentLinks);
  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    event.preventDefault();
    const details = [...new FormData(form).entries()]
      .filter(([, value]) => String(value).trim())
      .map(([name, value]) => `${name.replace(/[-_]+/g, ' ')}: ${String(value).trim()}`);
    const message = ['Hello Arden, I am contacting you through the website.', `Page: ${document.title}`, ...details].join('\n');
    window.location.href = `https://wa.me/9779851211778?text=${encodeURIComponent(message)}`;
  });
  document.dispatchEvent(new CustomEvent('arden:footer-ready'));
})();
