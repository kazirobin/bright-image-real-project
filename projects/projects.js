      // Filter functionality
      document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.service-card');
        
        filterButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectCards.forEach(card => {
              if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hidden');
              } else {
                card.classList.add('hidden');
              }
            });
          });
        });
      });