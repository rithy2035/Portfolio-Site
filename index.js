// --------------------
// Hamgburger Menu Toggle
// --------------------

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Toggle open/close
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  const menuLinks = document.querySelectorAll(".mobile-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // Auto-close if resizing back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
    }
  });
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

// -----------------------------
// WDHomepage Text Hover Effect
// -----------------------------

 
        const paragraph = document.querySelector(".paragraph");
        const words = paragraph.innerText.split(" ");

        paragraph.innerHTML = words.map((word, i) => {
        return `<span style="animation-delay:${i * 0.2}s">${word}&nbsp;</span>`;
        }).join("");
  

        // ------ V.2 Bottom Text-Box Effect -------

       window.addEventListener("DOMContentLoaded", () => {
          document.querySelectorAll("#bottom .text-box-left, #bottom .text-box-right").forEach(wrapper => {
            const box = wrapper.querySelector(".logo-box");
            const desc = wrapper.querySelector(".type-animate");
        
            box.addEventListener("mouseenter", () => {
              desc.innerHTML = ""; // reset
              const words = desc.dataset.text.split(" ");
              desc.innerHTML = words.map((word, i) => {
                return `<span style="animation-delay:${i * 0.15}s">${word}&nbsp;</span>`;
              }).join("");
            });
        
            box.addEventListener("mouseleave", () => {
              desc.innerHTML = "";
            });
          });
        });
