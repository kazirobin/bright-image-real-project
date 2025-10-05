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
            uploadArea.style.borderColor = var('--primary-color');
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
                const event = new Event('change', {