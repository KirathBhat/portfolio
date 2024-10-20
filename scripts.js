// Dynamic profession change in the hero section
const professions = ["Web Developer", "Google Console Dev", "Game Developer"];
let index = 0;

const professionSpan = document.getElementById("profession");

function changeProfession() {
    index = (index + 1) % professions.length;
    professionSpan.textContent = professions[index];
}

setInterval(changeProfession, 3000);
