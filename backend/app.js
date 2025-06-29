const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectPostgres = require('./config/postgres');
const connectMongo = require('./config/mongo');
const usuariosRoutes = require('./routes/usuarios');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);

connectPostgres();
connectMongo();

// Rutas
app.get('/', (req, res) => res.send('API del Spa funcionando correctamente'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));
