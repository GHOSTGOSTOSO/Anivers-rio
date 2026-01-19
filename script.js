document.body.style.overflow = 'hidden';

const start = document.getElementById('start');
const main = document.getElementById('main');
const music = document.getElementById('music');
const video = document.getElementById('video');

start.addEventListener('click', () => {
  start.style.display = 'none';
  main.style.display = 'block';
  document.body.style.overflow = 'auto';

  // música com fade-in 5s
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

  // vídeo
  video.muted = false;
  video.play().catch(() => {});
});

// animações no scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.text, .anime').forEach(el => observer.observe(el));