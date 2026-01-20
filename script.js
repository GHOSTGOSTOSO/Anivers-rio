document.body.style.overflow = 'hidden';

const start = document.getElementById('start');
const main = document.getElementById('main');
const music = document.getElementById('music');
const video = document.getElementById('video');

/* CLIQUE INICIAL */
start.addEventListener('click', () => {
  start.style.display = 'none';
  main.style.display = 'block';
  document.body.style.overflow = 'auto';

  // Música com fade-in 5s
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
});

/* ANIMAÇÕES NO SCROLL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.text, .anime').forEach(el => observer.observe(el));

/* VÍDEO SÓ TOCA QUANDO VISÍVEL */
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

/* CONFETE NO FINAL */
let confettiDone = false;

window.addEventListener('scroll', () => {
  if (confettiDone) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    confettiDone = true;
    launchConfetti();
  }
});

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

function randomColor() {
  const colors = ['#ff6fae', '#ffb6d5', '#ffffff', '#f8a1c4'];
  return colors[Math.floor(Math.random() * colors.length)];
}