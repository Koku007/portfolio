// Initialize AOS
AOS.init({
  duration: 700,
  once: true,
  offset: 100,
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("#carousel-dots button");
let index = 0;
let interval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("opacity-100", idx === i);
    slide.classList.toggle("opacity-0", idx !== i);
  });
  dots.forEach(dot => dot.classList.remove("bg-custom-accent"));
  dots[i].classList.add("bg-custom-accent");
}

function startAutoSlide() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 2000);
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    index = parseInt(dot.dataset.index);
    showSlide(index);
    startAutoSlide();
  });
});

showSlide(0);
startAutoSlide();
