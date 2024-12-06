const menuHamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

function toggleTable(tableId) {
    var table = document.getElementById(tableId);
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; // Mostra la tabella
    } else {
        table.style.display = "none"; // Nascondi la tabella
    }
}

menuHamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

    hamburgerIcon.classList.toggle("open");
});

window.onload = function() {
    setInterval(immagineSuccessiva, 3000);
};