
// Manejo de apertura y cierre del modal
document.addEventListener("DOMContentLoaded", () => {
    const modalRegister = document.getElementById("modalRegister");
    const closeButton = document.getElementById("closeModalRegisterBtn");
    const openButton = document.getElementById("openModalRegisterBtn");

    if (!modalRegister) return;

    // Ocultar modal al inicio solo si no tiene la clase 'visible'
    if (!modalRegister.classList.contains("visible")) {
        modalRegister.style.display = "none";
        modalRegister.classList.add("hidden");
        
    }

    // Evento para abrir el modal
    if (openButton) {
        openButton.addEventListener("click", () => {
            modalRegister.style.display = "block";
            modalRegister.classList.remove("hidden");
            modalRegister.classList.add("visible");
        });
    }

    // Evento para cerrar el modal
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modalRegister.style.display = "none";
            modalRegister.classList.remove("visible");
            modalRegister.classList.add("hidden");
        });
    }


});

