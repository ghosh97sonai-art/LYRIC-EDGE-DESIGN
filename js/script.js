const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {

    toggleBtn.classList.toggle("active");
    navLinks.classList.toggle("active");

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        toggleBtn.classList.remove("active");
        navLinks.classList.remove("active");

    });

});