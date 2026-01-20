const start = document.getElementById('start');
const main = document.getElementById('main');
const music = document.getElementById('music');
const video = document.getElementById('video');
const texts = document.querySelectorAll('.texts p');

document.body.style.overflow = 'hidden';

start.addEventListener('click', () => {
  start.style.display = 'none';
  main.style.display = 'block';
  document.body.style.overflow = 'auto';

  // Música com fade in 5s
  music.volume = 0;
  music.play().catch(() => {});

  let v = 0;
  const fade = setInterval(() => {
    v += 0.02;
    music.volume = v;
    if (v >= 1) clearInterval(fade);
  }, 100);
});

// Texto animado no scroll
window.addEventListener('scroll', () => {
  texts.forEach(text => {
    const pos = text.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      text.style.opacity = 1;
      text.style.transform = 'translateY(0)';
    }
  });

  checkConfetti();
});

// Vídeo otimizado
const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 });

videoObserver.observe(video);

// CONFETE UMA VEZ
let confettiDone = false;

function checkConfetti() {
  if (confettiDone) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    confettiDone = true;
    launchConfetti();
  }
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = ['#ff6fae', '#ffd1e8', '#ffffff'][Math.floor(Math.random()*3)];
    c.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}