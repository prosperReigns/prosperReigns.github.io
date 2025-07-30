document.addEventListener('DOMContentLoaded', function () {
    const observers = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view'); // 🔄 Makes it repeat
        }
      });
    }, {
      threshold: 0.2
    });
  
    observers.forEach(el => observer.observe(el));
  });
  