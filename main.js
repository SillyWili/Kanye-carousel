let slideIndex = 1;
let slideTimer;
startAutoSlide();
showSlide(slideIndex);

function nextSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n <= 0) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function startAutoSlide() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => {
    nextSlide(1);
    startAutoSlide();
  }, 3000);
}

//* Buttons functionality
const previousButton = document.querySelector("button.previous");
const nextButton = document.querySelector("button.next");

const firstSlide = document.querySelector("button.slide1");
const secondSlide = document.querySelector("button.slide2");
const thirdSlide = document.querySelector("button.slide3");

firstSlide.addEventListener("click", () => {
  showSlide((slideIndex = 1));
  startAutoSlide();
});

secondSlide.addEventListener("click", () => {
  showSlide((slideIndex = 2));
  startAutoSlide();
});

thirdSlide.addEventListener("click", () => {
  showSlide((slideIndex = 3));
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  nextSlide(1);
  startAutoSlide();
});

previousButton.addEventListener("click", () => {
  nextSlide(-1);
  startAutoSlide();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    nextSlide(1);
    startAutoSlide();
  }
  if (event.key === "ArrowRight") {
    nextSlide(-1);
    startAutoSlide();
  }
});
