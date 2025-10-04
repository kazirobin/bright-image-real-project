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

      document.addEventListener("DOMContentLoaded", () => {
        // Smooth scrolling for TOC links
        const tocLinks = document.querySelectorAll(".toc a");

        tocLinks.forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
              const targetPosition = targetSection.offsetTop - 20;

              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              });
            }
          });
        });

        // Active section highlighting
        function updateActiveSection() {
          const sections = document.querySelectorAll(".terms-section");
          const scrollPosition = window.scrollY + 100;

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute("id");
            const correspondingLink = document.querySelector(
              `.toc a[href="#${sectionId}"]`
            );

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              tocLinks.forEach((link) => link.classList.remove("active"));
              if (correspondingLink) {
                correspondingLink.classList.add("active");
              }
            }
          });
        }

        // Update active section on scroll
        window.addEventListener("scroll", updateActiveSection);
        updateActiveSection();

        // Back to top button
        const backToTopBtn = document.createElement("button");
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = "back-to-top";
        document.body.appendChild(backToTopBtn);

        // Show/hide back to top button
        window.addEventListener("scroll", () => {
          if (window.scrollY > 500) {
            backToTopBtn.style.display = "block";
          } else {
            backToTopBtn.style.display = "none";
          }
        });

        // Back to top click handler
        backToTopBtn.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });

        // Print functionality
        function printTerms() {
          window.print();
        }

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
          if (e.key === "t" || e.key === "T") {
            if (!e.ctrlKey && !e.altKey) {
              const firstTocLink = document.querySelector(".toc a");
              if (firstTocLink) {
                firstTocLink.focus();
                e.preventDefault();
              }
            }
          }
        });
      });