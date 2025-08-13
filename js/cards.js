  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate'); // Re-trigger animation if desired
        }
      });
    }, {
      threshold: 0.3
    });

    cards.forEach(card => observer.observe(card));
  });
