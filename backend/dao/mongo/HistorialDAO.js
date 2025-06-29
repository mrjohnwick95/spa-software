const HistorialDTO = require('../../dto/HistorialDTO');
const Historial = require('../../models/historialModel'); // Mongoose model

class HistorialDAO {
  async findAll() {
    const data = await Historial.find();
    return data.map(d => new HistorialDTO(d));
  }

  async create(data) {
    const nuevo = await Historial.create(data);
    return new HistorialDTO(nuevo);
  }

  // Puedes agregar update, delete, findById...
}

module.exports = HistorialDAO;
