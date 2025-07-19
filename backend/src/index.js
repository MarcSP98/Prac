const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const vehiclesRouter = require('./routes/vehicles');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URI;

if (!port) {
    console.error('Error: La variable de entorno PORT no está configurada.');
    process.exit(1);
}
if (!MONGO_URI) {
    console.error('Error: La variable de entorno MONGODB_URI no está configurada.');
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
        process.exit(1);
    });

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/vehicles', vehiclesRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});