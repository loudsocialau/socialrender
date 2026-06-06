const cursor = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('reveal');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .service-grid article, .gallery img, .reel-section, .motion-grid video, .process-grid div, .price-cards article, .final-cta').forEach(el => observer.observe(el));

document.querySelectorAll('[data-tilt]').forEach((el) => {
  el.addEventListener('pointermove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-2px)`;
  });
  el.addEventListener('pointerleave', () => {
    el.style.transform = '';
  });
});
