document.addEventListener("DOMContentLoaded", () => {
  // Select ALL carousels on the page
  const carousels = document.querySelectorAll(".food-carousel");

  carousels.forEach((carouselSection) => {
    const carousel = carouselSection.querySelector(".food-pack-image-inner");
    const slides = carouselSection.querySelectorAll(".food-pack-image .img");
    let index = 0;
    let intervalId;

    function showSlide(i) {
      carousel.style.transform = `translateX(-${i * 100}%)`;
    }

    function startCarousel() {
      if (intervalId) return; // avoid multiple intervals
      intervalId = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
      }, 3000);
    }

    function stopCarousel() {
      clearInterval(intervalId);
      intervalId = null;
    }

    // Observe EACH carousel independently
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCarousel();
        } else {
          stopCarousel();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(carouselSection);
  });
});