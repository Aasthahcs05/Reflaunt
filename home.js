let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
let slideInterval = setInterval(nextSlide, 2000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 2000);
}

// Attach reset to button clicks
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});
