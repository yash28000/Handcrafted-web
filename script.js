const carousel = document.querySelector(".carousel-inner");
const slides = document.querySelectorAll(".carousel-item");
let index = 0;

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = (-index * 100) / slides.length;
  carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000);

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
