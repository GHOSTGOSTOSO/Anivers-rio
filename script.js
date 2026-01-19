function startSite() {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');
  const music = document.getElementById('music');

  // anima saída da intro
  intro.style.opacity = '0';
  intro.style.transition = 'opacity 1s ease';

  setTimeout(() => {
    intro.style.display = 'none';
    main.classList.add('show');
    document.body.style.overflow = 'auto';
  }, 1000);

  // música autoplay + fade-in 5s
  music.volume = 0;
  music.play().catch(() => {});

  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.02;
    if (vol >= 1) {
      vol = 1;
      clearInterval(fade);
    }
    music.volume = vol;
  }, 100);
}

// animação no scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// trava scroll no início
document.body.style.overflow = 'hidden';