class Vehicle {
    constructor(brand, model, year, licensePlate, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.color = color;
    }

    getInfo() {
        return `Marca: ${this.brand}, Modelo: ${this.model}, Año: ${this.year}, Matrícula: ${this.licensePlate}, Color: ${this.color}`;
    }
}

const vehicles = [];

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("saveVehicleBtn");
    const form = document.getElementById("vehicleForm");
    const message = document.getElementById("form-message");

    if (!button || !form || !message) {
        console.error("❌ Error: Elementos no encontrados en el DOM.");
        return;
    }

    button.addEventListener("click", () => {
        const brand = document.getElementById("brand").value.trim();
        const model = document.getElementById("model").value.trim();
        const year = parseInt(document.getElementById("year").value.trim(), 10);
        const licensePlate = document.getElementById("licensePlate").value.trim();
        const color = document.getElementById("color").value.trim();

        if (!brand || !model || isNaN(year) || !licensePlate || !color) {
            message.textContent = "Error: Por favor, completa todos los campos correctamente.";
            return;
        }

        const existingVehicle = vehicles.find(v => 
            v.licensePlate === licensePlate // Ahora solo se compara la matrícula para evitar duplicados
        );

        if (existingVehicle) {
            message.textContent = "Error: Este vehículo ya está registrado.";
        } else {
            const vehicle = new Vehicle(brand, model, year, licensePlate, color);
            vehicles.push(vehicle);

            message.textContent = `Vehículo registrado: ${vehicle.getInfo()}`;
        }

        message.style.display = "block";
        message.style.visibility = "visible";

        // Limpiar formulario después de un pequeño retraso para que el usuario vea el mensaje
        setTimeout(() => {
            form.reset();
        }, 1500);
    });
});