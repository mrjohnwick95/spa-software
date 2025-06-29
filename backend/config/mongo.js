const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error en MongoDB:', error);
  }
};

module.exports = connectMongo;
