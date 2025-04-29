// navigation.js

// Agrega funcionalidades de navegación personalizada
document.addEventListener("DOMContentLoaded", () => {
    const volverInicioBtns = document.querySelectorAll(".volver-inicio");

    volverInicioBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    });
});
