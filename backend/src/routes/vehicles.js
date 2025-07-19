const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/', vehicleController.getVehicles);
router.get('/searchByMatricula', vehicleController.getVehicle);
router.post('/add', vehicleController.addVehicle);

module.exports = router;