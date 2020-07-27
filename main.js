// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

// Add an on-click event on the menu icon that adds a callback function that
// toggles an active status on the icon
selectElement(".burger-menu-icon").addEventListener("click", () => {
  selectElement(".nav-list").classList.toggle("active");
  selectElement(".burger-menu-icon").classList.toggle("toggle");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5);
    }
  });
});

// Close the nav bar when user makes a selection
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        console.log(index / 7 + 0.5);
      }
    });
  });
});

// Slideshow in My Workflow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
