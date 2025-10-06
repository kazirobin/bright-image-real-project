// Free Trial Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Image comparison slider functionality
    const comparisonContainer = document.querySelector('.comparison-container');
    const comparisonSlider = document.querySelector('.comparison-slider');
    const comparisonAfter = document.querySelector('.comparison-after');
    
    if (comparisonContainer && comparisonSlider) {
        let isDragging = false;
        
        function updateSliderPosition(clientX) {
            const containerRect = comparisonContainer.getBoundingClientRect();
            const relativeX = clientX - containerRect.left;
            const percentage = (relativeX / containerRect.width) * 100;
            
            // Constrain between 0 and 100
            const constrainedPercentage = Math.max(0, Math.min(100, percentage));
            
            comparisonAfter.style.clipPath = `inset(0 ${100 - constrainedPercentage}% 0 0)`;
            comparisonSlider.style.left = `${constrainedPercentage}%`;
        }
        
        comparisonSlider.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                updateSliderPosition(e.clientX);
            }
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Touch events for mobile
        comparisonSlider.addEventListener('touchstart', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('touchmove', function(e) {
            if (isDragging && e.touches.length > 0) {
                updateSliderPosition(e.touches[0].clientX);
            }
        });
        
        document.addEventListener('touchend', function() {
            isDragging = false;
        });
        
        // Click to set position
        comparisonContainer.addEventListener('click', function(e) {
            if (!isDragging) {
                updateSliderPosition(e.clientX);
            }
        });
    }
    
    // File upload functionality
    const uploadArea = document.getElementById('uploadArea');
    const imageUpload = document.getElementById('imageUpload');
    const browseBtn = document.getElementById('browseBtn');
    const fileInfo = document.getElementById('fileInfo');
    
    if (uploadArea && imageUpload) {
        // Click on upload area or browse button to trigger file input
        uploadArea.addEventListener('click', function() {
            imageUpload.click();
        });
        
        browseBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering upload area click
            imageUpload.click();
        });
        
        // Handle file selection
        imageUpload.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                
                // Validate file type
                if (!file.type.match('image.*')) {
                    alert('Please select an image file (JPG, PNG, etc.)');
                    return;
                }
                
                // Validate file size (max 10MB)
                if (file.size > 10 * 1024 * 1024) {
                    alert('File size must be less than 10MB');
                    return;
                }
                
                // Display file info
                fileInfo.innerHTML = `
                    <strong>Selected file:</strong> ${file.name}<br>
                    <strong>Size:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB<br>
                    <strong>Type:</strong> ${file.type}
                `;
                fileInfo.style.display = 'block';
                
                // Change upload area appearance
                uploadArea.style.borderColor = '#28a745';
                uploadArea.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            }
        });
        
        // Drag and drop functionality
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--primary-color)';
            uploadArea.style.backgroundColor = 'rgba(60, 9, 108, 0.1)';
        });
        
        uploadArea.addEventListener('dragleave', function() {
            uploadArea.style.borderColor = '#ddd';
            uploadArea.style.backgroundColor = '';
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.style.borderColor = '#ddd';
            uploadArea.style.backgroundColor = '';
            
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                imageUpload.files = e.dataTransfer.files;
                const event = new Event('change');
                imageUpload.dispatchEvent(event);
            }
        });
    }
    
   // Service options data
const serviceOptions = [
    { value: 'background-removal', text: 'Background Removal' },
    { value: 'resizing', text: 'Resizing' },
    { value: 'masking', text: 'Masking' },
    { value: 'ecommerce-editing', text: 'E-commerce Editing' },
    { value: 'beauty-retouching', text: 'Beauty Retouching' },
    { value: 'clipping-path', text: 'Clipping Path' },
    { value: 'jewelry-retouching', text: 'Jewelry Retouching' },
    { value: 'real-estate-editing', text: 'Real Estate Editing' },
    { value: 'image-masking', text: 'Image Masking' },
    { value: 'blending', text: 'Blending' },
    { value: 'color-adjustment', text: 'Color Adjustment' },
    { value: 'image-combination', text: 'Image Combination' },
    { value: 'other', text: 'Other' }
];

// Remove first option and handle dropdown behavior
const serviceSelect = document.getElementById('service');
let originalOptions = [];

if (serviceSelect) {
    // Store original options
    originalOptions = Array.from(serviceSelect.options);
    
    // Remove first option initially
    if (serviceSelect.options.length > 0) {
        serviceSelect.remove(0);
    }
    
    // Add first option back when dropdown is opened (optional)
    serviceSelect.addEventListener('focus', function() {
        // You can choose to add it back or keep it removed
        // If you want to add it back, use the code below:
        /*
        if (serviceSelect.options.length === 12) { // Only actual services, no placeholder
            const placeholderOption = new Option('Select a service', '');
            serviceSelect.insertBefore(placeholderOption, serviceSelect.options[0]);
        }
        */
    });
    
    // Remove first option again when a selection is made
    serviceSelect.addEventListener('change', function() {
        if (this.value !== '' && serviceSelect.options.length > 0 && serviceSelect.options[0].value === '') {
            serviceSelect.remove(0);
        }
    });
}

// Update reset function
function resetServiceDropdown() {
    if (serviceSelect) {
        // Clear all options
        while (serviceSelect.options.length > 0) {
            serviceSelect.remove(0);
        }
        
        // Add back all options except first one
        for (let i = 1; i < originalOptions.length; i++) {
            serviceSelect.add(originalOptions[i]);
        }
    }
}
    
    // Form submission handling
    const trialForm = document.querySelector('.free-trial-form');
    if (trialForm) {
        trialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            
            if (!name || !email || !service) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!imageUpload.files || imageUpload.files.length === 0) {
                alert('Please upload an image for your free trial');
                return;
            }
            
            // Show loading state
            const submitBtn = trialForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(function() {
                // Show success message
                alert('Thank you! Your free trial request has been submitted. We will process your image within 24 hours and email you the results.');
                
                // Reset form
                trialForm.reset();
                if (fileInfo) fileInfo.style.display = 'none';
                if (uploadArea) {
                    uploadArea.style.borderColor = '#ddd';
                    uploadArea.style.backgroundColor = '';
                }
                
                // Reset service dropdown
                resetServiceDropdown();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    function resetServiceDropdown() {
        if (serviceSelect) {
            // Clear all options
            while (serviceSelect.options.length > 0) {
                serviceSelect.remove(0);
            }
            
            // Add placeholder only
            const placeholderOption = new Option('Select a service', '');
            serviceSelect.add(placeholderOption);
            
            // Reset population flag
            isPopulated = false;
        }
    }
    
    // Additional services toggle functionality
    const showMoreBtn = document.getElementById('trialShowMoreBtn');
    const additionalServices = document.getElementById('trialAdditionalServices');
    
    if (showMoreBtn && additionalServices) {
        showMoreBtn.addEventListener('click', function() {
            additionalServices.classList.toggle('active');
            this.classList.toggle('active');
            
            // Update button text
            const span = this.querySelector('span');
            if (additionalServices.classList.contains('active')) {
                span.textContent = 'Hide Additional Services';
            } else {
                span.textContent = 'View All Services';
            }
        });
    }
    
    // Learn more buttons functionality
    const learnMoreBtns = document.querySelectorAll('.trial-learn-more-btn');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.closest('.trial-service-category');
            const categoryTitle = category.querySelector('h3').textContent;
            
            // Show service details modal or navigate to service page
            alert(`You clicked Learn More for ${categoryTitle}. This would typically navigate to a detailed service page.`);
        });
    });
    
    // Service items click functionality
    const serviceItems = document.querySelectorAll('.trial-service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('strong').textContent.replace(':', '').trim();
            
            // Highlight selected service
            serviceItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            
            // Populate dropdown if not already populated
            if (!isPopulated) {
                populateServiceDropdown();
                isPopulated = true;
            }
            
            // Auto-select the service in the form dropdown
            if (serviceSelect) {
                // Find matching service option
                const matchingService = serviceOptions.find(service => 
                    service.text.toLowerCase().includes(serviceName.toLowerCase()) ||
                    serviceName.toLowerCase().includes(service.text.toLowerCase())
                );
                
                if (matchingService) {
                    serviceSelect.value = matchingService.value;
                }
            }
            
            // Scroll to form section
            const formSection = document.getElementById('trial-form');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Service selection in form
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            const selectedText = this.options[this.selectedIndex].text;
            
            if (selectedValue) {
                // Update service items highlighting
                serviceItems.forEach(item => {
                    const itemService = item.querySelector('strong').textContent.replace(':', '').trim();
                    if (selectedText.toLowerCase().includes(itemService.toLowerCase()) || 
                        itemService.toLowerCase().includes(selectedText.toLowerCase())) {
                        item.classList.add('selected');
                    } else {
                        item.classList.remove('selected');
                    }
                });
            }
        });
    }
    
    // Price calculator functionality (optional)
    const priceCalculator = document.getElementById('priceCalculator');
    if (priceCalculator) {
        priceCalculator.addEventListener('change', function() {
            calculatePrice();
        });
    }
    
    function calculatePrice() {
        // This would calculate price based on service type, image complexity, etc.
        console.log('Price calculation would happen here');
    }
    
    // Animation on scroll for service cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe service cards for animation
    const serviceCards = document.querySelectorAll('.trial-service-category');
    serviceCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add CSS for selected state
    const style = document.createElement('style');
    style.textContent = `
        .trial-service-item.selected {
            border-left-color: var(--accent-color) !important;
            background: rgba(76, 201, 240, 0.1) !important;
            transform: translateX(10px) !important;
            box-shadow: 0 8px 20px rgba(76, 201, 240, 0.2) !important;
        }
        
        .trial-service-item.selected::before {
            background: linear-gradient(90deg, transparent, rgba(76, 201, 240, 0.2), transparent) !important;
        }
        
        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .fa-spin {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize tooltips for service items
    serviceItems.forEach(item => {
        item.title = 'Click to select this service for your free trial';
    });
    
    // Add keyboard navigation for service items
    serviceItems.forEach((item, index) => {
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            // Arrow key navigation
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = (index + 1) % serviceItems.length;
                serviceItems[nextIndex].focus();
            }
            
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = (index - 1 + serviceItems.length) % serviceItems.length;
                serviceItems[prevIndex].focus();
            }
        });
        
        // Make service items focusable
        item.setAttribute('tabindex', '0');
    });
    
    // Auto-focus first service item
    if (serviceItems.length > 0) {
        serviceItems[0].focus();
    }
    
    // Add service category filtering (optional enhancement)
    const filterButtons = document.querySelectorAll('.trial-filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active filter button
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter service categories
                serviceCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Add image preview functionality
    if (imageUpload) {
        imageUpload.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // Create image preview
                    const preview = document.createElement('img');
                    preview.src = e.target.result;
                    preview.style.maxWidth = '200px';
                    preview.style.maxHeight = '200px';
                    preview.style.borderRadius = '8px';
                    preview.style.marginTop = '10px';
                    
                    // Remove existing preview
                    const existingPreview = uploadArea.querySelector('img');
                    if (existingPreview) {
                        existingPreview.remove();
                    }
                    
                    uploadArea.appendChild(preview);
                };
                
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Add form validation styling
    const formInputs = document.querySelectorAll('.free-trial-form input, .free-trial-form select, .free-trial-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '#28a745';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#28a745';
            }
        });
    });
    
    // Add character counter for instructions textarea
    const instructionsTextarea = document.getElementById('instructions');
    if (instructionsTextarea) {
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.fontSize = '0.8rem';
        counter.style.color = '#666';
        counter.style.textAlign = 'right';
        counter.style.marginTop = '5px';
        
        instructionsTextarea.parentNode.appendChild(counter);
        
        instructionsTextarea.addEventListener('input', function() {
            const remaining = 500 - this.value.length;
            counter.textContent = `${remaining} characters remaining`;
            
            if (remaining < 50) {
                counter.style.color = '#dc3545';
            } else if (remaining < 100) {
                counter.style.color = '#ffc107';
            } else {
                counter.style.color = '#666';
            }
        });
        
        // Initialize counter
        instructionsTextarea.dispatchEvent(new Event('input'));
    }
});

// Export functions for potential reuse
window.FreeTrialJS = {
    init: function() {
        // Re-initialize if needed
        document.dispatchEvent(new Event('DOMContentLoaded'));
    },
    
    resetForm: function() {
        const form = document.querySelector('.free-trial-form');
        if (form) {
            form.reset();
            const fileInfo = document.getElementById('fileInfo');
            if (fileInfo) fileInfo.style.display = 'none';
            const uploadArea = document.getElementById('uploadArea');
            if (uploadArea) {
                uploadArea.style.borderColor = '#ddd';
                uploadArea.style.backgroundColor = '';
                const preview = uploadArea.querySelector('img');
                if (preview) preview.remove();
            }
            
            // Reset service dropdown
            const serviceSelect = document.getElementById('service');
            if (serviceSelect) {
                // Clear all options
                while (serviceSelect.options.length > 0) {
                    serviceSelect.remove(0);
                }
                
                // Add placeholder only
                const placeholderOption = new Option('Select a service', '');
                serviceSelect.add(placeholderOption);
                
                // Reset population flag
                window.FreeTrialJS.isPopulated = false;
            }
            
            // Remove selected state from service items
            const serviceItems = document.querySelectorAll('.trial-service-item');
            serviceItems.forEach(item => {
                item.classList.remove('selected');
            });
        }
    },
    
    selectService: function(serviceName) {
        const serviceItems = document.querySelectorAll('.trial-service-item');
        serviceItems.forEach(item => {
            const itemService = item.querySelector('strong').textContent;
            if (itemService.includes(serviceName)) {
                item.click();
            }
        });
    },
    
    // Make population flag accessible
    isPopulated: false
};