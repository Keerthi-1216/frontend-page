// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const mobileMenuBackdrop = document.querySelector(".mobile-menu-backdrop");
  const body = document.body;

  // Open mobile menu
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenuOverlay.classList.add("active");
    mobileMenuBackdrop.classList.add("active");
    body.style.overflow = "hidden";
  });

  // Close mobile menu
  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove("active");
    mobileMenuBackdrop.classList.remove("active");
    body.style.overflow = "";
  }

  mobileMenuClose.addEventListener("click", closeMobileMenu);
  mobileMenuBackdrop.addEventListener("click", closeMobileMenu);

  // Close menu when clicking on a nav item
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
  });
});
