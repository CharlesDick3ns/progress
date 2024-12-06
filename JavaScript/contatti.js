const menuHamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

menuHamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

    hamburgerIcon.classList.toggle("open");
});

window.onload = function() {
    setInterval(immagineSuccessiva, 3000);
};