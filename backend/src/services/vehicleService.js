const Vehicle = require('../models/vehicles');

async function getAllVehicles() {
    return Vehicle.find();
}

async function getVehicleByMatricula(Matricula) {
    return Vehicle.findOne({ Matricula });
}

async function createVehicle(data) {
    const vehicle = new Vehicle(data);
    return vehicle.save();
}

module.exports = {
    getAllVehicles,
    getVehicleByMatricula,
    createVehicle
};