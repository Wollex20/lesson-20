const slides = document.querySelectorAll(".slide");
const prevSlideBtn = document.querySelector("#prev-slide");
const nextSlideBtn = document.querySelector("#next-slide");

const slideFn = () => {
  let currentSlide = 2;
  const showSlides = () => {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }
    showSlides();
  };

  const goToNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    function stopSlider() {
      clearInterval(interval);
    }

    showSlides();
  };

  prevSlideBtn.addEventListener("click", goToPrevSlide);
  nextSlideBtn.addEventListener("click", goToNextSlide);
  const sliderInterval = setInterval(goToNextSlide, 5000);

  showSlides();
};

slideFn();

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const clockElement = document.getElementById("clock");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();