// 🌓 Modo oscuro/claro con almacenamiento en localStorage
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggleButton = document.getElementById("toggleThemeBtn");

    if (themeToggleButton) {
        const savedTheme = localStorage.getItem("theme") || "light";
        body.classList.remove("dark-theme", "light-theme");
        body.classList.add(savedTheme === "dark" ? "dark-theme" : "light-theme");
        themeToggleButton.textContent = savedTheme === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro";

        themeToggleButton.addEventListener("click", () => {
            const isDark = body.classList.contains("dark-theme");
            body.classList.toggle("dark-theme", !isDark);
            body.classList.toggle("light-theme", isDark);
            localStorage.setItem("theme", isDark ? "light" : "dark");
            themeToggleButton.textContent = isDark ? "🌙 Modo oscuro" : "☀️ Modo claro";
        });
    }
});