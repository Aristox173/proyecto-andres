const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");

let slideInterval = setInterval(() => {
  moveSlide(1); // Mueve al siguiente slide automáticamente
}, 4000); // 4000ms = 4 segundos

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    moveSlide(offset);

    // Reinicia el intervalo cuando el usuario interactúa
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      moveSlide(1);
    }, 4000);
  });
});

function moveSlide(offset) {
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}
