const hamburger = document.getElementById('hamburger');
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const shuffleBtn = document.getElementById('shuffle');
const layers = Array.from(document.querySelectorAll('.layer'));

if (hamburger) {
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-active');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

const closeModal = () => modal?.classList.remove('open');

openModalBtn?.addEventListener('click', () => modal?.classList.add('open'));
closeModalBtn?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

let activeIndex = layers.findIndex((layer) => layer.classList.contains('active'));
if (activeIndex < 0) activeIndex = 0;

shuffleBtn?.addEventListener('click', () => {
  layers[activeIndex]?.classList.remove('active');
  activeIndex = (activeIndex + 1) % layers.length;
  layers[activeIndex]?.classList.add('active');
  layers.forEach((layer, idx) => {
    layer.style.zIndex = String(idx + 1);
  });
  layers[activeIndex].style.zIndex = '6';
});
