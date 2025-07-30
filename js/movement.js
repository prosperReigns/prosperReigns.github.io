
  document.addEventListener("DOMContentLoaded", function () {
    const liItems = document.querySelectorAll(".movement ul li");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Array.from(liItems).indexOf(entry.target);
        const leftClass = "slide-in-left";
        const rightClass = "slide-in-right";

        const className = index % 2 === 0 ? leftClass : rightClass;

        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(leftClass, rightClass);
        }
      });
    }, {
      threshold: 0.3
    });

    liItems.forEach((li) => observer.observe(li));
  });