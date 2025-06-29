const UsuarioDTO = require('../../dto/UsuarioDTO');
const { Usuario } = require('../../models/usuarioModel'); // Sequelize model

class UsuarioDAO {
  async findAll() {
    const usuarios = await Usuario.findAll();
    return usuarios.map(u => new UsuarioDTO(u));
  }

  async create(data) {
    const nuevo = await Usuario.create(data);
    return new UsuarioDTO(nuevo);
  }

  // Puedes agregar update, delete, findById...
}

module.exports = UsuarioDAO;
