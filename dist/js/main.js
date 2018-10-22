// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", evt => {
  menuBtn.classList[showMenu ? "remove" : "add"]("close");
  menu.classList[showMenu ? "remove" : "add"]("show");
  menuNav.classList[showMenu ? "remove" : "add"]("show");
  menuBranding.classList[showMenu ? "remove" : "add"]("show");
  navItems.forEach(item => item.classList[showMenu ? "remove" : "add"]("show"));
  // Set menu state
  showMenu = !showMenu;
});
