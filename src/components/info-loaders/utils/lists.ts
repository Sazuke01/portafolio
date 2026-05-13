export function setupDots() {
  const list = document.getElementById('projects-list');
  const dotsContainer = document.getElementById('projects-dots');
  if (!list || !dotsContainer) return;

  const items = list.querySelectorAll<HTMLElement>(':scope > div');

  if (items.length <= 1) return;

  dotsContainer.innerHTML = '';

  const getStep = () => {
    const gap = parseInt(getComputedStyle(list).gap) || 0;
    return items[0].offsetWidth + gap;
  };

  const dots: HTMLButtonElement[] = [];

  const syncActiveDot = () => {
    const step = getStep() || 1;
    const scrollIndex = Math.round(list.scrollLeft / step);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === scrollIndex));
  };

  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');

    dot.onclick = () => {
      list.scrollTo({ left: getStep() * i, behavior: 'smooth' });
    };

    dots.push(dot);
    dotsContainer.appendChild(dot);
  });

  list.addEventListener('scroll', syncActiveDot, { passive: true });
  window.addEventListener('resize', syncActiveDot);
  syncActiveDot();
}

export function initAutoCarousel() {
  const list = document.getElementById('projects-list');
  if (!list) return;

  const items = list.querySelectorAll<HTMLElement>(':scope > div');

  if (items.length <= 1) return;

  let currentIndex = 0;
  const intervalTime = 3500;

  const goToCurrentSlide = () => {
    const gap = parseInt(window.getComputedStyle(list).gap) || 0;
    const itemWidth = items[0].offsetWidth + gap;
    list.scrollTo({ left: currentIndex * itemWidth, behavior: 'smooth' });
  };

  const moveSlides = () => {
    currentIndex = currentIndex + 1 >= items.length ? 0 : currentIndex + 1;
    goToCurrentSlide();
  };

  let slideInterval = setInterval(moveSlides, intervalTime);

  list.addEventListener('mouseenter', () => clearInterval(slideInterval));
  list.addEventListener(
    'mouseleave',
    () => (slideInterval = setInterval(moveSlides, intervalTime)),
  );

  list.addEventListener('scroll', () => {
    const gap = parseInt(window.getComputedStyle(list).gap) || 0;
    const itemWidth = items[0].offsetWidth + gap;
    currentIndex = Math.round(list.scrollLeft / (itemWidth || 1));
  });
}
