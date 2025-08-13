
document.addEventListener("DOMContentLoaded", function () {
  // Animate slide-in elements every time they enter the viewport
  const animatedElements = document.querySelectorAll(
    ".slide-from-left, .slide-from-right, .slide-from-bottom"
  );

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.add("in-view");
      } else {
        el.classList.remove("in-view");
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach((el) => slideObserver.observe(el));

  // Animate rotating images every time they enter viewport
  const images = document.querySelectorAll(".img");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.remove("rotate-180", "back-to-45"); // Reset in case

        el.classList.add("rotate-180");

        setTimeout(() => {
          el.classList.remove("rotate-180");
          el.classList.add("back-to-45");
        }, 1000);

        setTimeout(() => {
          el.classList.remove("back-to-45");
        }, 2000);
      }
    });
  }, { threshold: 0.5 });

  images.forEach((img) => imageObserver.observe(img));
});