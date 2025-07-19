function validateVehicle(req, res, next) {
    const { Marca, Modelo, Matricula, Año, Color } = req.body;
    if (!Marca || !Modelo || !Matricula || !Año || !Color) {
        return res.status(400).json({ message: 'Faltan campos obligatorios del vehículo' });
    }
    next();
}

module.exports = validateVehicle;