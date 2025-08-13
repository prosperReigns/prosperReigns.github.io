  const challangeSection = document.querySelector('.challange');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        challangeSection.classList.add('show');
      } else {
        challangeSection.classList.remove('show');
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(challangeSection);

  const carousel = document.querySelector('.carousel');
  let scrollInterval;
  let scrollAmount = 300; // Amount to scroll per step (in px)
  let delay = 3000; // 3 seconds

  function startCarousel() {
    scrollInterval = setInterval(() => {
      // Scroll right
      if (
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth
      ) {
        // If reached end, scroll back to start
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, delay);
  }

  document.addEventListener('DOMContentLoaded', startCarousel);