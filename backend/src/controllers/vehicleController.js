const vehicleService = require('../services/vehicleService');
const { validateVehicleData } = require('../validators/vehicleValidator');

async function getVehicles(req, res) {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener vehículos.' });
    }
}

async function getVehicle(req, res) {
    try {
        const { matricula } = req.query;
        if (!matricula) return res.status(400).json({ message: 'La matrícula es obligatoria.' });
        const vehicle = await vehicleService.getVehicleByMatricula(matricula);
        if (!vehicle) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(vehicle);
    } catch (err) {
        res.status(500).json({ message: 'Error al buscar vehículo.' });
    }
}

async function addVehicle(req, res) {
    try {
        const { Marca, Modelo, Matricula, Año, Color } = req.body;
        const validation = validateVehicleData({ Marca, Modelo, Matricula, Año, Color });
        if (!validation.valid) return res.status(400).json({ message: validation.message });

        const existing = await vehicleService.getVehicleByMatricula(Matricula);
        if (existing)
            return res.status(400).json({ message: 'Matrícula ya registrada' });

        const saved = await vehicleService.createVehicle({ Marca, Modelo, Matricula, Año, Color });
        res.status(201).json({ message: 'Vehículo creado', vehicle: saved });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: 'Error al guardar vehículo.' });
    }
}

module.exports = { getVehicles, getVehicle, addVehicle };