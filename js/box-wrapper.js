  document.addEventListener('DOMContentLoaded', function () {
    const wrappers = document.querySelectorAll('.box-wrapper');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation class with stagger
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 200);
        } else {
          // Remove class when out of view, so it can animate again
          entry.target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% visible
    });

    wrappers.forEach(wrapper => {
      observer.observe(wrapper);
    });
  });
