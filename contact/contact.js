// Add this script to your contact page or include it in your mainNavigation.js

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Collapsible Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add faq-icon class to all chevron icons
    faqItems.forEach(item => {
        const icon = item.querySelector('.faq-question i');
        if (icon) {
            icon.classList.add('faq-icon');
        }
    });
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Optional: Open first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});