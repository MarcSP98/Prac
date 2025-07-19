// 🔽 Minimizar/expandir el header con almacenamiento en localStorage
document.addEventListener("DOMContentLoaded", () => {
    const headerToggleButton = document.getElementById("toggleHeaderBtn");
    const pageHeader = document.getElementById("header");

    if (headerToggleButton && pageHeader) {
        const savedHeaderState = localStorage.getItem("headerMinimized") === "true";
        pageHeader.classList.toggle("minimized", savedHeaderState);
        headerToggleButton.textContent = savedHeaderState ? "🔼" : "🔽";

        headerToggleButton.addEventListener("click", () => {
            const isMinimized = pageHeader.classList.toggle("minimized");
            localStorage.setItem("headerMinimized", isMinimized ? "true" : "false");
            headerToggleButton.textContent = isMinimized ? "🔼" : "🔽";
        });
    }
});