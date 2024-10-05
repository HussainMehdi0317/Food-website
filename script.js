// Function to handle scroll event
window.addEventListener("scroll", () => {
  // Get the second section
  const section2 = document.querySelector(".second-part");
  const section2Top = section2.getBoundingClientRect().top;

  // Check if the section is visible and apply class to change styles
  if (section2Top <= 60) {
    document.body.classList.add("scroll-black"); // Add class to body
  } else {
    document.body.classList.remove("scroll-black"); // Remove class from body
  }
});

// Smooth scrolling when the down arrow is clicked
document.querySelector(".down-arrow").addEventListener("click", () => {
  document.getElementById("second-page").scrollIntoView({
    behavior: "smooth",
  });
});

// Smooth scrolling when the down arrow is clicked
document.querySelector(".down-arrow").addEventListener("click", () => {
  document.getElementById("second-page").scrollIntoView({
    behavior: "smooth",
  });
});

// Show and hide the back-to-top button based on scroll position
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Show button when scrolled down 100px
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Sliding Cards Logic
let slidePosition = 0;
const slides = document.querySelector(".slider-container");
const totalSlides = document.querySelectorAll(".food-card").length;
const slideWidth = slides.firstElementChild.offsetWidth + 20; // Width of each slide including margin

function slideCards(direction) {
  // Update slide position by one card width
  if (direction === 'next') {
    slidePosition -= slideWidth;
  } else {
    slidePosition += slideWidth;
  }

  // Loop back to start if at the end
  if (slidePosition < -((totalSlides - 3) * slideWidth)) {
    slidePosition = 0;
  } else if (slidePosition > 0) {
    slidePosition = -((totalSlides - 3) * slideWidth);
  }

  // Apply sliding effect
  slides.style.transform = `translateX(${slidePosition}px)`;
}

// Add click event to the right arrow for manual sliding
document.querySelector(".right-arrow").addEventListener("click", () => slideCards('next'));

// Add click event to the left arrow for manual sliding
document.querySelector(".left-arrow").addEventListener("click", () => slideCards('prev'));

