/*==================================================
SFAX MEDINA HERITAGE
Mobile hamburger navigation: opens/closes the nav
dropdown, closes on link click, outside click, Esc,
or window resize back to desktop width.
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const overlay = document.getElementById("navOverlay");

  if (!toggle || !nav) return;

  function openNav() {
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    if (document.body.classList.contains("nav-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) closeNav();
  });

});
