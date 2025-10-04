// FAQ Collapsible Functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Pricing Toggle Functionality
  const pricingToggle = document.getElementById('pricing-toggle');
  const prices = document.querySelectorAll('.price');
  
  if (pricingToggle) {
    pricingToggle.addEventListener('change', function() {
      prices.forEach(priceElement => {
        const singlePrice = priceElement.getAttribute('data-single');
        const bulkPrice = priceElement.getAttribute('data-bulk');
        
        if (this.checked) {
          priceElement.textContent = bulkPrice;
        } else {
          priceElement.textContent = singlePrice;
        }
      });
    });
  }
});