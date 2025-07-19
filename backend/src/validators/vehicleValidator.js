function validateVehicleData({ Marca, Modelo, Matricula, Año, Color }) {
    if (!Marca || !Modelo || !Matricula || !Año || !Color) {
        return { valid: false, message: 'Faltan campos obligatorios.' };
    }
    if (typeof Año !== 'number' || Año < 1900 || Año > new Date().getFullYear()) {
        return { valid: false, message: 'El año proporcionado no es válido.' };
    }
    return { valid: true, message: '' };
}

module.exports = {
    validateVehicleData
};