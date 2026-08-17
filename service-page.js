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
  '.detail-intro > *, .detail-points > div, .detail-gallery figure, .detail-cta > *, .editorial-intro > *, .editorial-split > *, .service-directory > a, .gallery-directory figure, .contact-page-copy > *'
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
