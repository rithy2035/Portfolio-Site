// --------------------
// Hamgburger Menu Toggle
// --------------------

// Grab elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("text-headers");

// Add click event
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// --------------------
// GD1 Nav-Box Pop-up
// --------------------

// Get the box element
const scrollBox = document.getElementById('scrollBox');

// Listen for scroll events
window.addEventListener('scroll', function() {
  // Show the box if the user scrolls down more than 100px
  if (window.scrollY > 10) {
    scrollBox.style.display = 'block';
  } else {
    scrollBox.style.display = 'none';
  }
});


alert("Hello");

/*
document.addEventListener("DOMContentLoaded", function() {
  const scrollBox = document.getElementById("nav-box");
  
// Get the box element
const scrollBox = document.getElementById("nav-box");

// Listen for scroll events
window.addEventListener('scroll', function() {
  // Show the box if the user scrolls down more than 100px
  if (window.scrollY > 100) {
    scrollBox.style.display = 'block';
  } else {
    scrollBox.style.display = 'none';
  }
});

console.log("Scroll position:", window.scrollY); 

document.addEventListener("DOMContentLoaded", function() {
    const scrollBox = document.getElementById("nav-box");

    // Safety check
    if (!scrollBox) {
        console.error("nav-box element not found!");
        return;
    }

    // Show/hide box on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {  // change 100 to adjust when it appears
            scrollBox.style.display = "block";
        } else {
            scrollBox.style.display = "none";
        }
    });
});
*/
