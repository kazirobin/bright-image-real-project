// SLIDER JAVASCRIPT CODE
document.addEventListener("DOMContentLoaded", function () {
  // Get slider elements
  const slideContainer = document.getElementById("slideContainer");
  const slides = document.querySelectorAll(".slide");
  const dotContainer = document.getElementById("dotContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Initialize variables
  let currentIndex = 0;
  let slideWidth = slides[0].clientWidth;
  let autoSlideInterval;
  let touchStartX = 0;
  let touchEndX = 0;

  // Create dots based on number of slides
  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => goToSlide(index));
      dotContainer.appendChild(dot);
    });
  }

  // Update the slider position
  function updateSlider() {
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;

    // Update active dot
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    // Handle bounds
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    currentIndex = index;
    slideWidth = slides[0].clientWidth; // Update slide width in case of resize
    updateSlider();
  }

  // Next slide function
  function nextSlide() {
    goToSlide(currentIndex + 1);
    resetAutoSlide();
  }

  // Previous slide function
  function prevSlide() {
    goToSlide(currentIndex - 1);
    resetAutoSlide();
  }

  // Start auto sliding
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // Stop auto sliding
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  // Reset auto slide timer
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Handle window resize
  function handleResize() {
    slideWidth = slides[0].clientWidth;
    updateSlider();
  }

  // Touch events for mobile swiping
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const touchDiff = touchStartX - touchEndX;

    // If the touch was significant enough (prevent accidental swipes)
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        nextSlide(); // Swipe left, go to next
      } else {
        prevSlide(); // Swipe right, go to previous
      }
    }
  }

  // Preload images for smoother experience
  function preloadImages() {
    slides.forEach((slide) => {
      const bgImg = slide.querySelector(".slide-image");
      if (bgImg) {
        const style = window.getComputedStyle(bgImg);
        const bgUrl = style.backgroundImage.replace(
          /url\\(['"]?(.*?)['"]?\\)/i,
          "$1"
        );

        if (bgUrl && bgUrl !== "none") {
          const img = new Image();
          img.src = bgUrl;
        }
      }
    });
  }

  // Initialize slider
  function initSlider() {
    // Create navigation dots
    createDots();

    // Set initial position
    updateSlider();

    // Start auto sliding
    startAutoSlide();

    // Add event listeners
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    window.addEventListener("resize", handleResize);

    // Touch events
    slideContainer.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    slideContainer.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    slideContainer.addEventListener("touchend", handleTouchEnd);

    // Pause auto-slide on hover
    slideContainer.addEventListener("mouseenter", stopAutoSlide);
    slideContainer.addEventListener("mouseleave", startAutoSlide);

    // Preload images
    preloadImages();
  }

  // Initialize the slider
  initSlider();

  // Make functions available globally for inline onclick handlers
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});