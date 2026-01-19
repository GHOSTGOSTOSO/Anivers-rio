document.body.style.overflow = 'hidden';

const start = document.getElementById('start');
const main = document.getElementById('main');
const music = document.getElementById('music');
const video = document.getElementById('video');

start.addEventListener('click', () => {
  start.style.display = 'none';
  main.style.display = 'block';
  document.body.style.overflow = 'auto';

  // música
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.02;
    music.volume = vol;
    if (vol >= 1) clearInterval(fade);
  }, 100);

  // vídeo
  video.muted = false;
  video.play();
});