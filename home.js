const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
  loader?.classList.add('done');
  document.body.classList.add('home-loaded');
});

const cursor = document.querySelector('.cursor');
if (cursor && matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', event => {
    cursor.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 90, fill: 'forwards' });
  }, { passive: true });
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('pointerenter', () => cursor.classList.add('is-interacting'));
    element.addEventListener('pointerleave', () => cursor.classList.remove('is-interacting'));
  });
}

const reveals = document.querySelectorAll('.reveal-home');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  reveals.forEach(element => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px' });
  reveals.forEach(element => revealObserver.observe(element));
}

const testimonialCarousel = document.querySelector('.testimonial-carousel');
if (testimonialCarousel) {
  const slides = [...testimonialCarousel.querySelectorAll('.testimonial-slide')];
  const dotsContainer = testimonialCarousel.querySelector('.testimonial-dots');
  const previousButton = testimonialCarousel.querySelector('.testimonial-prev');
  const nextButton = testimonialCarousel.querySelector('.testimonial-next');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentSlide = 0;
  let rotationTimer;

  const dots = slides.map((slide, index) => {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show testimonial ${index + 1} of ${slides.length}`);
    dot.addEventListener('click', () => {
      showSlide(index);
      restartRotation();
    });
    dotsContainer.appendChild(dot);
    return dot;
  });

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentSlide;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentSlide;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function stopRotation() {
    clearInterval(rotationTimer);
  }

  function startRotation() {
    stopRotation();
    if (!reduceMotion) rotationTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
  }

  function restartRotation() {
    stopRotation();
    startRotation();
  }

  previousButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    restartRotation();
  });
  nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    restartRotation();
  });
  testimonialCarousel.addEventListener('mouseenter', stopRotation);
  testimonialCarousel.addEventListener('mouseleave', startRotation);
  testimonialCarousel.addEventListener('focusin', stopRotation);
  testimonialCarousel.addEventListener('focusout', startRotation);
  document.addEventListener('visibilitychange', () => document.hidden ? stopRotation() : restartRotation());

  showSlide(0);
  startRotation();
}
