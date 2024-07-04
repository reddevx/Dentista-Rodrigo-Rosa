document.addEventListener('DOMContentLoaded', function () {
  const fadeIns = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // threshold de 50%
  });

  fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
  });
});