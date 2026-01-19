const animeLeft = document.querySelector(".anime.left");
const animeRight = document.querySelector(".anime.right");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  animeLeft.style.transform = `translateY(${y * 0.3}px)`;
  animeRight.style.transform = `translateY(${y * 0.4}px)`;
});