document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("pricingToggle");
  const perImageLabel = document.querySelector(".per-image");
  const bulkPricingLabel = document.querySelector(".bulk-pricing");
  const priceElements = document.querySelectorAll(".price");
  const priceUnits = document.querySelectorAll(".price-unit");
  const deliveryBadges = document.querySelectorAll(".delivery-badge");
  const featureLists = document.querySelectorAll(".features-list");

  // Pricing data
  const pricingData = {
    perImage: {
      basic: {
        price: "0.50",
        unit: "per image",
        delivery: "Next 24 Hours (500+ Images)",
        features: [
          "Simple product clipping",
          "Clean background removal",
          "Basic edge refinement",
          "24-hour delivery",
          "JPEG/PNG formats",
          "Free revisions",
        ],
      },
      standard: {
        price: "1.25",
        unit: "per image",
        delivery: "Next 24 Hours (500+ Images)",
        features: [
          "Medium complexity clipping",
          "Soft/fur edge refinement",
          "Shadow creation/removal",
          "Color correction",
          "12-hour delivery",
          "Free revisions (3x)",
        ],
      },
      premium: {
        price: "2.50",
        unit: "per image",
        delivery: "Next 24 Hours (500+ Images)",
        features: [
          "Complex multi-path clipping",
          "Jewelry & fine details",
          "Advanced retouching",
          "Multiple format delivery",
          "6-hour delivery",
          "Unlimited revisions",
        ],
      },
    },
    bulk: {
      basic: {
        price: "0.35",
        unit: "per image (100+ images)",
        delivery: "Next 48 Hours (Bulk Orders)",
        features: [
          "Simple product clipping",
          "Clean background removal",
          "Basic edge refinement",
          "48-hour delivery",
          "JPEG/PNG formats",
          "Free revisions",
          "Bulk discount applied",
          "Priority support",
        ],
      },
      standard: {
        price: "0.88",
        unit: "per image (100+ images)",
        delivery: "Next 48 Hours (Bulk Orders)",
        features: [
          "Medium complexity clipping",
          "Soft/fur edge refinement",
          "Shadow creation/removal",
          "Color correction",
          "24-hour delivery",
          "Free revisions (5x)",
          "Bulk discount applied",
          "Dedicated account manager",
        ],
      },
      premium: {
        price: "1.75",
        unit: "per image (100+ images)",
        delivery: "Next 48 Hours (Bulk Orders)",
        features: [
          "Complex multi-path clipping",
          "Jewelry & fine details",
          "Advanced retouching",
          "Multiple format delivery",
          "12-hour delivery",
          "Unlimited revisions",
          "Bulk discount applied",
          "White-glove service",
        ],
      },
    },
  };

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

    featureLists.forEach((list) => {
      list.classList.add("features-update");
      setTimeout(() => list.classList.remove("features-update"), 600);
    });
  });

  function updatePricingCards(isBulk) {
    const mode = isBulk ? "bulk" : "perImage";
    const cards = ["basic", "standard", "premium"];

    cards.forEach((cardType, index) => {
      const data = pricingData[mode][cardType];

      // Update price
      const priceElement = priceElements[index];
      priceElement.textContent = data.price;

      // Update price unit
      const priceUnitElement = priceUnits[index];
      priceUnitElement.textContent = data.unit;

      // Update delivery badge
      const deliveryBadge = deliveryBadges[index];
      deliveryBadge.textContent = data.delivery;

      // Update features list
      const featuresList = featureLists[index];
      featuresList.innerHTML = "";

      data.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
      });
    });
  }

  // Add smooth scroll behavior for better UX
  document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // You can add your actual CTA logic here
      console.log(
        "CTA clicked for:",
        this.closest(".pricing-card").querySelector("h3").textContent
      );
    });
  });

  // Add hover effects for cards
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
