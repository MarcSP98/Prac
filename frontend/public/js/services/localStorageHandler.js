
// 📂 Manejo de almacenamiento local para vehículos
function saveVehicle(vehicles) {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

function getVehicles() {
    return JSON.parse(localStorage.getItem("vehicles")) || [];
}

function isVehicleRegistered(licensePlate) {
    return getVehicles().some(v => v.licensePlate === licensePlate);
}
