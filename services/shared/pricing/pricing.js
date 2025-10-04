document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("pricingToggle");
  const perImageLabel = document.querySelector(".per-image");
  const bulkPricingLabel = document.querySelector(".bulk-pricing");
  const priceElements = document.querySelectorAll(".price");
  const priceUnits = document.querySelectorAll(".price-unit");
  const deliveryBadges = document.querySelectorAll(".delivery-badge");
  const featureLists = document.querySelectorAll(".features-list");

  // Toggle functionality
  toggle.addEventListener("change", function () {
    const isBulk = this.checked;

    // Update label states
    perImageLabel.classList.toggle("active", !isBulk);
    bulkPricingLabel.classList.toggle("active", isBulk);

    // Update pricing cards
    updatePricingCards(isBulk);

    // Add animation classes
    priceElements.forEach((price) => {
      price.classList.add("price-change");
      setTimeout(() => price.classList.remove("price-change"), 500);
    });
  });

  function updatePricingCards(isBulk) {
    priceElements.forEach((priceElement) => {
      const perImagePrice = priceElement.getAttribute('data-per-image');
      const bulkPrice = priceElement.getAttribute('data-bulk');
      
      // Update price based on toggle state
      priceElement.textContent = isBulk ? bulkPrice : perImagePrice;
    });

    // Update price unit text
    priceUnits.forEach((unit) => {
      unit.textContent = isBulk ? "per image (100+ images)" : "per image";
    });

    // Update delivery badges
    deliveryBadges.forEach((badge) => {
      badge.textContent = isBulk ? "Next 48 Hours (Bulk Orders)" : "Next 24 Hours (500+ Images)";
    });

    // Update features lists
    updateFeaturesLists(isBulk);
  }

  function updateFeaturesLists(isBulk) {
    const featuresData = {
      basic: isBulk ? [
        "Simple product clipping",
        "Clean background removal",
        "Basic edge refinement",
        "48-hour delivery",
        "JPEG/PNG formats",
        "Free revisions",
        "Bulk discount applied",
        "Priority support"
      ] : [
        "Simple product clipping",
        "Clean background removal",
        "Basic edge refinement",
        "24-hour delivery",
        "JPEG/PNG formats",
        "Free revisions"
      ],
      standard: isBulk ? [
        "Medium complexity clipping",
        "Soft/fur edge refinement",
        "Shadow creation/removal",
        "Color correction",
        "24-hour delivery",
        "Free revisions (5x)",
        "Bulk discount applied",
        "Dedicated account manager"
      ] : [
        "Medium complexity clipping",
        "Soft/fur edge refinement",
        "Shadow creation/removal",
        "Color correction",
        "12-hour delivery",
        "Free revisions (3x)"
      ],
      premium: isBulk ? [
        "Complex multi-path clipping",
        "Jewelry & fine details",
        "Advanced retouching",
        "Multiple format delivery",
        "12-hour delivery",
        "Unlimited revisions",
        "Bulk discount applied",
        "White-glove service"
      ] : [
        "Complex multi-path clipping",
        "Jewelry & fine details",
        "Advanced retouching",
        "Multiple format delivery",
        "6-hour delivery",
        "Unlimited revisions"
      ]
    };

    featureLists.forEach((list, index) => {
      const cardTypes = ["basic", "standard", "premium"];
      const cardType = cardTypes[index];
      
      list.innerHTML = "";
      featuresData[cardType].forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        list.appendChild(li);
      });
      
      list.classList.add("features-update");
      setTimeout(() => list.classList.remove("features-update"), 600);
    });
  }

  // Rest of your existing code for smooth scroll and hover effects...
  document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
      console.log(
        "CTA clicked for:",
        this.closest(".pricing-card").querySelector("h3").textContent
      );
    });
  });

  document.querySelectorAll(".pricing-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = this.classList.contains("popular")
        ? "scale(1.05) translateY(-10px)"
        : "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = this.classList.contains("popular")
        ? "scale(1.05)"
        : "";
    });
  });

  // Initialize with per-image pricing
  updatePricingCards(false);
});