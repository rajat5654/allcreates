// Select elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("show");
        hamburger.classList.remove("active");
    }
});
// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300); // Delay for each box
    });
});
// Counting Effect
function startCounting(target, element, duration) {
    let start = 0;
    let increment = target / (duration / 10);
    
    let counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            clearInterval(counter);
            element.innerText = target;
        } else {
            element.innerText = Math.floor(start);
        }
    }, 10);
}

// Scroll Animation & Start Counting
document.addEventListener("DOMContentLoaded", function () {
    let counterBox = document.getElementById("counter-box");
    let counterElement = document.getElementById("count");
    let targetCount = 97;  // Target number

    function handleScroll() {
        let boxPosition = counterBox.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (boxPosition < screenPosition) {
            if (!counterBox.classList.contains("visible")) {
                counterBox.classList.add("visible");
                startCounting(targetCount, counterElement, 2000);
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector(".contact-container");

    function handleScroll() {
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

