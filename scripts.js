// Dynamic profession change in the hero section
const professions = ["Web Developer", "Google Console Dev", "Game Developer"];
let index = 0;

const professionSpan = document.getElementById("profession");

function changeProfession() {
  index = (index + 1) % professions.length;
  professionSpan.textContent = professions[index];
}
// Toggle the navigation menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-links .nav-item a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const navLinksContainer = document.querySelector(".nav-links");

    // Remove 'active' class to hide the menu
    navLinksContainer.classList.remove("active");

    // Smooth scroll to target section
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
