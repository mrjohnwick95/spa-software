const DAOFactory = require('../dao/factory');

const usuarioDAO = DAOFactory.getDAO('usuario');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioDAO.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const crearUsuario = async (req, res) => {
  try {
    const usuario = await usuarioDAO.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsuarios,
  crearUsuario,
};
