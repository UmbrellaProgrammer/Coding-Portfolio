// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

// Add an on-click event on the menu icon that adds a callback function that
// toggles an active status on the icon
selectElement(".burger-menu-icon").addEventListener("click", () => {
  selectElement(".nav-list").classList.toggle("active");
});
