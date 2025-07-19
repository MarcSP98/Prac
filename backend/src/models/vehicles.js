const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(
    {
        Marca: { type: String, required: true },
        Modelo: { type: String, required: true },
        Matricula: { type: String, required: true, unique: true },
        Año: { type: Number, required: true },
        Color: { type: String, required: true }
    },
    {
        versionKey: false,
        collection: 'vehicles'
    }
);

module.exports = mongoose.model('Vehicle', VehicleSchema);