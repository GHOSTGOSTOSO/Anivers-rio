document.body.style.overflow = 'hidden';

function startSite() {
  const start = document.getElementById('start');
  const main = document.getElementById('main');
  const music = document.getElementById('music');
  const video = document.getElementById('video');

  start.style.opacity = '0';
  start.style.transition = 'opacity 1s ease';

  setTimeout(() => {
    start.style.display = 'none';
    main.classList.add('show');
    document.body.style.overflow = 'auto';
  }, 1000);

  // música fade-in 5s
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

  video.muted = false;
  video.play().catch(() => {});
}

// anima texto no scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.text-block')
  .forEach(el => observer.observe(el));