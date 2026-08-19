const galleryWork = [
  { src: 'IMAGES/hair.jpg', title: 'Soft Sculpt', type: 'Hair', categories: ['hair', 'colour'], size: 'wide' },
  { src: 'IMAGES/nails.jpg', title: 'The Nude Edit', type: 'Nails', categories: ['nails'] },
  { src: 'IMAGES/royal.jpg', title: 'Royal Reverie', type: 'Makeup', categories: ['makeup', 'bridal'], position: 'center top' },
  { src: 'IMAGES/bridal.jpg', title: 'Modern Muse', type: 'Bridal', categories: ['bridal', 'makeup'], size: 'tall' },
  { src: 'IMAGES/anna2.jpg', title: 'Soft Focus', type: 'Skin', categories: ['skin', 'makeup'] },
  { src: 'IMAGES/traditional.jpg', title: 'Heritage', type: 'Bridal', categories: ['bridal', 'makeup'], position: 'center top' },
  { src: 'IMAGES/swostima.jpg', title: 'Quiet Drama', type: 'Makeup', categories: ['makeup', 'skin'], size: 'wide' },
  { src: 'IMAGES/anna3.jpg', title: 'Afterglow', type: 'Colour', categories: ['colour', 'makeup'] },
  { src: 'IMAGES/anna.jpg', title: 'Luminous', type: 'Skin', categories: ['skin', 'makeup'], size: 'tall' },
  { src: 'IMAGES/vintage.jpg', title: 'New Classic', type: 'Hair', categories: ['hair', 'colour'] },
  { src: 'IMAGES/bridal makeup image.jpg', title: 'Ever After', type: 'Bridal', categories: ['bridal', 'makeup'] },
  { src: 'IMAGES/anna4.jpg', title: 'Golden Hour', type: 'Colour', categories: ['colour', 'skin'] }
];

const galleryGrid = document.querySelector('.arden-edit-grid');
const galleryTabs = [...document.querySelectorAll('.gallery-tab')];
let activeFilter = 'all';

function makeGalleryCard(item, index) {
  const figure = document.createElement('figure');
  figure.className = 'arden-edit-card';
  figure.style.setProperty('--card-delay', `${Math.min(index, 8) * 55}ms`);
  figure.innerHTML = `
    <button class="arden-edit-card__media" type="button" aria-label="Open ${item.title} image full screen">
      <img src="${item.src}" alt="${item.title} — ${item.type} work by Arden" loading="lazy"${item.position ? ` style="object-position:${item.position}"` : ''}>
      <span class="arden-edit-card__zoom" aria-hidden="true">View <i>↗</i></span>
    </button>`;
  figure.querySelector('button').addEventListener('click', () => openLightbox(item));
  return figure;
}

const lightbox = document.createElement('div');
lightbox.className = 'gallery-lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.setAttribute('aria-label', 'Full-screen gallery image');
lightbox.setAttribute('aria-hidden', 'true');
lightbox.innerHTML = `<button class="gallery-lightbox__close" type="button" aria-label="Close full-screen image"><span></span><span></span></button><div class="gallery-lightbox__stage"><img src="" alt=""></div>`;
document.body.append(lightbox);

const lightboxImage = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.gallery-lightbox__close');
let lastGalleryTrigger;

function openLightbox(item) {
  lastGalleryTrigger = document.activeElement;
  lightboxImage.src = item.src;
  lightboxImage.alt = `${item.title} — ${item.type} work by Arden`;
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.classList.add('is-open');
  document.body.classList.add('lightbox-open');
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  window.setTimeout(() => {
    lightboxImage.removeAttribute('src');
    lastGalleryTrigger?.focus();
  }, 350);
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox(); });

function renderGallery(filter = 'all') {
  activeFilter = filter;
  const selection = filter === 'all' ? galleryWork : galleryWork.filter(item => item.categories.includes(filter));
  galleryGrid.setAttribute('aria-busy', 'true');
  galleryGrid.classList.add('is-filtering');

  window.setTimeout(() => {
    galleryGrid.replaceChildren(...selection.map(makeGalleryCard));
    galleryGrid.classList.remove('is-filtering');
    galleryGrid.setAttribute('aria-busy', 'false');
  }, 240);
}

galleryTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    if (tab.dataset.filter === activeFilter) return;
    galleryTabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', selected);
      item.tabIndex = selected ? 0 : -1;
    });
    renderGallery(tab.dataset.filter);
  });

  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % galleryTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + galleryTabs.length) % galleryTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = galleryTabs.length - 1;
    galleryTabs[next].focus();
    galleryTabs[next].click();
  });
});

galleryTabs.slice(1).forEach(tab => { tab.tabIndex = -1; });
renderGallery();
