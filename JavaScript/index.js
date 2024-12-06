const immagini = ["./img/car1.jpg", "./img/car2.jpg", "./img/car3.jpg", "./img/car4.jpg", "./img/car5.jpg"];
let indiceCorrente = 0;
const immagineCarosello = document.getElementById("immagineCarosello");
const menuHamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

function immagineSuccessiva() {
    immagineCarosello.classList.add("fade-out");

    setTimeout(() => {
        indiceCorrente = (indiceCorrente < immagini.length - 1) ? indiceCorrente + 1 : 0;
        immagineCarosello.src = immagini[indiceCorrente];
        immagineCarosello.classList.remove("fade-out");
    }, 1000);
}

// Aggiungiamo l'evento di click per aprire il menu e trasformare l'hamburger in una "X"
menuHamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

    // Trasforma l'hamburger in una X
    hamburgerIcon.classList.toggle("open");
});

window.onload = function() {
    setInterval(immagineSuccessiva, 3000);
};
