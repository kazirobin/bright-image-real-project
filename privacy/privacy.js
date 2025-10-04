      // Simple Responsive Menu - Perfect for Client Projects
      document.addEventListener("DOMContentLoaded", function () {
        "use strict";

        // DOM Elements
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        const mobileMenu = document.querySelector(".mobile-menu");
        const mobileMenuOverlay = document.querySelector(
          ".mobile-menu-overlay"
        );
        const mobileMenuClose = document.querySelector(".mobile-menu-close");
        const mobileDropdownBtns = document.querySelectorAll(
          ".mobile-dropdown-btn"
        );
        const body = document.body;

        // State
        let isMobileMenuOpen = false;

        // Mobile Menu Toggle
        function toggleMobileMenu() {
          isMobileMenuOpen = !isMobileMenuOpen;
          if (isMobileMenuOpen) {
            openMobileMenu();
          } else {
            closeMobileMenu();
          }
        }

        // Open Mobile Menu
        function openMobileMenu() {
          mobileMenu.classList.add("active");
          mobileMenuOverlay.classList.add("active");
          mobileMenuBtn.classList.add("active");
          body.style.overflow = "hidden";
          isMobileMenuOpen = true;
        }

        // Close Mobile Menu
        function closeMobileMenu() {
          mobileMenu.classList.remove("active");
          mobileMenuOverlay.classList.remove("active");
          mobileMenuBtn.classList.remove("active");
          body.style.overflow = "";
          isMobileMenuOpen = false;

          // Close all mobile dropdowns
          document
            .querySelectorAll(".mobile-dropdown.active")
            .forEach((dropdown) => {
              dropdown.classList.remove("active");
            });
        }

        // Mobile Dropdown Toggle
        function toggleMobileDropdown(dropdown) {
          const isActive = dropdown.classList.contains("active");

          // Close all other dropdowns
          document
            .querySelectorAll(".mobile-dropdown.active")
            .forEach((otherDropdown) => {
              if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("active");
              }
            });

          // Toggle current dropdown
          if (isActive) {
            dropdown.classList.remove("active");
          } else {
            dropdown.classList.add("active");
          }
        }

        // Event Listeners
        if (mobileMenuBtn) {
          mobileMenuBtn.addEventListener("click", () => {
            if (mobileMenu.classList.contains("active")) {
              closeMobileMenu();
            } else {
              openMobileMenu();
            }
          });
        }

        if (mobileMenuClose) {
          mobileMenuClose.addEventListener("click", closeMobileMenu);
        }

        if (mobileMenuOverlay) {
          mobileMenuOverlay.addEventListener("click", closeMobileMenu);
        }

        // Mobile dropdown event listeners
        mobileDropdownBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const dropdown = btn.closest(".mobile-dropdown");
            const dropdownContent = dropdown.querySelector(
              ".mobile-dropdown-content"
            );
            const menuContent = document.querySelector(".mobile-menu-content");

            // Toggle this dropdown only
            const isActive = dropdown.classList.contains("active");
            closeAllDropdowns(); // Close all first

            if (!isActive) {
              dropdown.classList.add("active");

              // Wait for the dropdown to expand, then scroll
              setTimeout(() => {
                // Get the position of the dropdown button relative to the menu content
                const btnRect = btn.getBoundingClientRect();
                const menuRect = menuContent.getBoundingClientRect();
                const dropdownHeight = dropdownContent.scrollHeight;

                // Calculate if dropdown extends beyond visible area
                const dropdownBottom =
                  btnRect.bottom - menuRect.top + dropdownHeight;
                const menuHeight = menuContent.clientHeight;

                if (dropdownBottom > menuHeight) {
                  // Scroll the menu content to show the dropdown
                  const scrollTop = menuContent.scrollTop;
                  const targetScroll =
                    scrollTop + (dropdownBottom - menuHeight) + 20; // 20px padding
                  menuContent.scrollTo({
                    top: targetScroll,
                    behavior: "smooth",
                  });
                }
              }, 150); // Wait for CSS transition to start
            }
          });
        });

        // Helper: Close all dropdowns
        function closeAllDropdowns() {
          document
            .querySelectorAll(".mobile-dropdown.active")
            .forEach((item) => {
              item.classList.remove("active");
            });
        }

        // Close mobile menu on window resize
        window.addEventListener("resize", () => {
          if (window.innerWidth > 768 && isMobileMenuOpen) {
            closeMobileMenu();
          }
        });

        // Close mobile menu on escape key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && isMobileMenuOpen) {
            closeMobileMenu();
          }
        });

        // Prevent body scroll when mobile menu is open
        function preventBodyScroll(e) {
          if (isMobileMenuOpen && !mobileMenu.contains(e.target)) {
            e.preventDefault();
          }
        }

        // Add touch event listeners for better mobile experience
        document.addEventListener("touchmove", preventBodyScroll, {
          passive: false,
        });

        // Close dropdowns when clicking outside
        document.addEventListener("click", (e) => {
          // Close desktop dropdowns if clicking outside
          if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
              dropdown.classList.remove("active");
            });
          }

          // Close mobile dropdowns when clicking outside mobile menu
          if (
            !e.target.closest(".mobile-menu") &&
            !e.target.closest(".mobile-menu-btn")
          ) {
            if (isMobileMenuOpen) {
              closeMobileMenu();
            }
          }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });

              // Close mobile menu if open
              if (isMobileMenuOpen) {
                closeMobileMenu();
              }
            }
          });
        });

        // Add loading state for buttons
        document.querySelectorAll(".btn").forEach((btn) => {
          btn.addEventListener("click", function (e) {
            // Add your button click logic here
            console.log("Button clicked:", this.textContent);
          });
        });

        // Improve scrolling within dropdown content areas
        document
          .querySelectorAll(".mobile-dropdown-content")
          .forEach((content) => {
            // Enable smooth scrolling for dropdown content
            content.style.scrollBehavior = "smooth";
            // Add touch scroll momentum for iOS
            content.style.webkitOverflowScrolling = "touch";
          });

        // Ensure mobile menu content is scrollable
        const mobileMenuContent = document.querySelector(
          ".mobile-menu-content"
        );
        if (mobileMenuContent) {
          mobileMenuContent.style.scrollBehavior = "smooth";
          mobileMenuContent.style.webkitOverflowScrolling = "touch";
        }

        // Initialize
        console.log("✅ Simple Responsive Menu initialized successfully!");
      });
      // GSAP Animations and Interactions
      document.addEventListener("DOMContentLoaded", () => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Initialize animations
        initializeAnimations();
        initializeNavigation();
        initializeForm();
        initializeBackToTop();
      });

      function initializeAnimations() {
        // Hero animations
        const heroTimeline = gsap.timeline();

        heroTimeline
          .to(".hero-content h1", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            ".hero-content p",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .to(
            ".last-updated",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          );

        // Section animations
        gsap.utils.toArray(".policy-section").forEach((section, index) => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });
        });

        // TOC animations
        gsap.from(".toc-container", {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        });

        // Contact form animation
        gsap.from(".contact-form", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
          },
        });
      }

      function initializeNavigation() {
        const tocLinks = document.querySelectorAll(".toc-link");
        const sections = document.querySelectorAll(".policy-section");

        // Smooth scrolling for TOC links
        tocLinks.forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
              const offsetTop = targetSection.offsetTop - 100;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }
          });
        });

        // Active section highlighting
        function updateActiveSection() {
          const scrollPosition = window.scrollY + 150;

          sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const correspondingLink = tocLinks[index];

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              // Remove active class from all links
              tocLinks.forEach((link) => link.classList.remove("active"));
              // Add active class to current link
              if (correspondingLink) {
                correspondingLink.classList.add("active");
              }
            }
          });
        }

        // Throttled scroll listener
        let ticking = false;
        function onScroll() {
          if (!ticking) {
            requestAnimationFrame(() => {
              updateActiveSection();
              ticking = false;
            });
            ticking = true;
          }
        }

        window.addEventListener("scroll", onScroll);
        updateActiveSection(); // Initial call
      }

      function initializeForm() {
        const form = document.getElementById("privacyForm");
        const submitBtn = form.querySelector(".submit-btn");

        form.addEventListener("submit", (e) => {
          e.preventDefault();

          // Get form data
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);

          // Validate form
          if (!validateForm(data)) {
            return;
          }

          // Show loading state
          const originalText = submitBtn.textContent;
          submitBtn.textContent = "Submitting...";
          submitBtn.disabled = true;

          // Simulate form submission
          setTimeout(() => {
            showNotification(
              "Privacy request submitted successfully! We will respond within 30 days.",
              "success"
            );
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        });

        // Real-time validation
        const inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
          input.addEventListener("blur", function () {
            validateField(this);
          });

          input.addEventListener("input", function () {
            clearFieldError(this);
          });
        });
      }

      function validateForm(data) {
        let isValid = true;
        const requiredFields = [
          "requestType",
          "fullName",
          "email",
          "description",
        ];

        requiredFields.forEach((field) => {
          if (!data[field] || data[field].trim() === "") {
            showFieldError(field, "This field is required");
            isValid = false;
          }
        });

        // Email validation
        if (data.email && !isValidEmail(data.email)) {
          showFieldError("email", "Please enter a valid email address");
          isValid = false;
        }

        // Verification checkbox
        if (!data.verification) {
          showNotification(
            "Please confirm that you are the account holder or authorized representative",
            "error"
          );
          isValid = false;
        }

        return isValid;
      }

      function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;

        clearFieldError(field);

        if (field.hasAttribute("required") && !value) {
          showFieldError(fieldName, "This field is required");
          return false;
        }

        if (fieldName === "email" && value && !isValidEmail(value)) {
          showFieldError(fieldName, "Please enter a valid email address");
          return false;
        }

        return true;
      }

      function showFieldError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        const formGroup = field.closest(".form-group");

        // Remove existing error
        const existingError = formGroup.querySelector(".field-error");
        if (existingError) {
          existingError.remove();
        }

        // Add error message
        const errorDiv = document.createElement("div");
        errorDiv.className = "field-error";
        errorDiv.textContent = message;
        errorDiv.style.color = "#e53e3e";
        errorDiv.style.fontSize = "0.875rem";
        errorDiv.style.marginTop = "5px";

        formGroup.appendChild(errorDiv);
        field.style.borderColor = "#e53e3e";
      }

      function clearFieldError(field) {
        const formGroup = field.closest(".form-group");
        const errorDiv = formGroup.querySelector(".field-error");

        if (errorDiv) {
          errorDiv.remove();
        }

        field.style.borderColor = "#e2e8f0";
      }

      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      function showNotification(message, type = "info") {
        // Remove existing notifications
        const existingNotifications =
          document.querySelectorAll(".notification");
        existingNotifications.forEach((notification) => notification.remove());

        // Create notification
        const notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Styles
        Object.assign(notification.style, {
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "15px 20px",
          borderRadius: "8px",
          color: "white",
          fontWeight: "500",
          zIndex: "10000",
          maxWidth: "400px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          transform: "translateX(100%)",
          transition: "transform 0.3s ease",
        });

        // Type-specific styles
        if (type === "success") {
          notification.style.background =
            "linear-gradient(135deg, #48bb78, #38a169)";
        } else if (type === "error") {
          notification.style.background =
            "linear-gradient(135deg, #f56565, #e53e3e)";
        } else {
          notification.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
          notification.style.transform = "translateX(0)";
        }, 100);

        // Auto remove
        setTimeout(() => {
          notification.style.transform = "translateX(100%)";
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        }, 5000);
      }

      function initializeBackToTop() {
        const backToTopBtn = document.getElementById("backToTop");

        // Show/hide button based on scroll position
        function toggleBackToTop() {
          if (window.scrollY > 300) {
            backToTopBtn.classList.add("visible");
          } else {
            backToTopBtn.classList.remove("visible");
          }
        }

        // Smooth scroll to top
        backToTopBtn.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });

        // Throttled scroll listener
        let ticking = false;
        function onScroll() {
          if (!ticking) {
            requestAnimationFrame(() => {
              toggleBackToTop();
              ticking = false;
            });
            ticking = true;
          }
        }

        window.addEventListener("scroll", onScroll);
        toggleBackToTop(); // Initial call
      }

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        // Escape key to close notifications
        if (e.key === "Escape") {
          const notifications = document.querySelectorAll(".notification");
          notifications.forEach((notification) => {
            notification.style.transform = "translateX(100%)";
            setTimeout(() => {
              if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
              }
            }, 300);
          });
        }
      });

      // Print functionality
      function printPolicy() {
        window.print();
      }

      // Add print button functionality if needed
      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "p") {
          e.preventDefault();
          printPolicy();
        }
      });

      // Performance optimization
      function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      }

      // Lazy loading for images (if any are added later)
      function lazyLoadImages() {
        const images = document.querySelectorAll("img[data-src]");
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach((img) => imageObserver.observe(img));
      }

      // Initialize lazy loading
      lazyLoadImages();

      // Accessibility improvements
      function improveAccessibility() {
        // Add skip link
        const skipLink = document.createElement("a");
        skipLink.href = "#main-content";
        skipLink.textContent = "Skip to main content";
        skipLink.className = "skip-link";
        skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #667eea;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;

        skipLink.addEventListener("focus", function () {
          this.style.top = "6px";
        });

        skipLink.addEventListener("blur", function () {
          this.style.top = "-40px";
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content ID
        const mainContent = document.querySelector(".main-content");
        if (mainContent) {
          mainContent.id = "main-content";
        }
      }

      // Initialize accessibility improvements
      improveAccessibility();