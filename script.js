// ==============================
// FIA'O - JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // PÁGINA ACTIVA DEL MENÚ
    // ==============================

    const paginaActual =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".menu a").forEach(link => {
        if (link.getAttribute("href") === paginaActual) {
            link.classList.add("active");
        }
    });


    // ==============================
    // ELEMENTOS DEL POPUP
    // ==============================

    const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("registerModal");
    const closeModal = document.getElementById("closeModal");
    const form = document.getElementById("registerForm");


    // ==============================
    // ABRIR SIGN UP
    // ==============================

    if (signupBtn && modal) {
        signupBtn.addEventListener("click", () => {
            modal.classList.add("active");
        });
    }


    // ==============================
    // CERRAR CON LA X
    // ==============================

    if (closeModal && modal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }


    // ==============================
    // CERRAR HACIENDO CLIC AFUERA
    // ==============================

    if (modal) {
        modal.addEventListener("click", (event) => {

            if (event.target === modal) {
                modal.classList.remove("active");
            }

        });
    }


    // ==============================
    // REGISTRO
    // ==============================

    if (form && modal) {
        form.addEventListener("submit", (event) => {

            event.preventDefault();

            alert("Account created successfully!");

            form.reset();

            modal.classList.remove("active");

        });
    }


    // ==============================
    // LOGIN
    // ==============================

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {

            alert("Login feature coming soon!");

        });
    }

});