const sharedHeaderScript = document.createElement('script');
sharedHeaderScript.src = 'nav-header.js';
sharedHeaderScript.defer = true;
document.head.appendChild(sharedHeaderScript);

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
