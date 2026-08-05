(async function loadSharedHeader() {
  const currentHeader = document.querySelector('.site-header');
  let mount = document.querySelector('[data-nav-header]');
  if (!currentHeader && !mount) {
    mount = document.createElement('div');
    mount.setAttribute('data-nav-header', '');
    document.body.prepend(mount);
  }
  try {
    const response = await fetch('nav-header.html');
    if (!response.ok) throw new Error(`Header request failed: ${response.status}`);
    const headerHTML = await response.text();
    if (currentHeader) currentHeader.outerHTML = headerHTML;
    else mount.outerHTML = headerHTML;
    const menuButton = document.querySelector('.site-header .menu');
    const sideMenu = document.querySelector('.side-menu');
    const closeButtons = document.querySelectorAll('[data-menu-close]');
    const setMenuOpen = open => {
      document.body.classList.toggle('menu-open', open);
      menuButton?.setAttribute('aria-expanded', String(open));
      sideMenu?.setAttribute('aria-hidden', String(!open));
      if (open) sideMenu?.querySelector('a')?.focus();
      else menuButton?.focus();
    };
    menuButton?.addEventListener('click', () => setMenuOpen(true));
    closeButtons.forEach(button => button.addEventListener('click', () => setMenuOpen(false)));
    sideMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.body.classList.contains('menu-open')) setMenuOpen(false);
    });
    document.dispatchEvent(new CustomEvent('arden:header-ready'));
  } catch (error) {
    console.error('Unable to load the shared navigation header.', error);
    if (!currentHeader && mount) {
      mount.innerHTML = '<header class="site-header"><button class="menu" type="button" aria-label="Navigation requires a web server"><i></i><i></i><i></i></button><a class="brand" href="index.html#top" aria-label="Arden home"><img src="IMAGES/arden_logo_final-removebg-preview.png" alt="Arden"></a><a class="book-link" href="contact.html">Make an appointment</a></header>';
    }
  }
})();
