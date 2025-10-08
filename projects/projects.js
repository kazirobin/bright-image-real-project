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
  
  // Check if we need to auto-activate any filter
  activateAutoFilter();
});

// Function to trigger auto filter based on URL hash
function activateAutoFilter() {
  // Check if we're on the projects page and URL has a hash
  if (window.location.pathname.includes('projects.html') && window.location.hash) {
    
    // Extract filter value from hash (remove the #)
    const filterValue = window.location.hash.substring(1);
    
    // Wait a bit for DOM to be ready and filter buttons to be available
    setTimeout(() => {
      triggerFilter(filterValue);
    }, 100);
  }
}

// Function to trigger the specific filter
function triggerFilter(filterValue) {
  const filterButton = document.querySelector(`.filter-btn[data-filter="${filterValue}"]`);
  
  if (filterButton) {
    // Add active class to filter button
    filterButton.classList.add('active');
    
    // Remove active class from other filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn !== filterButton) {
        btn.classList.remove('active');
      }
    });
    
    // Trigger click event on filter button
    filterButton.click();
    
    // Scroll to projects section if needed
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Also check on hash change
window.addEventListener('hashchange', activateAutoFilter);

// Image comparison functionality - YOUR ORIGINAL CODE
