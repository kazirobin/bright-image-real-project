 // Simple animation trigger
      document.addEventListener('DOMContentLoaded', function() {
        const animateItems = document.querySelectorAll('.animate-item');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        }, { threshold: 0.1 });

        animateItems.forEach(item => {
          observer.observe(item);
        });
      });