class DAOFactory {
  static getDAO(type) {
    switch (type) {
      case 'usuario':
        return new (require('./postgres/UsuarioDAO'))();
      case 'historial':
        return new (require('./mongo/HistorialDAO'))();
      default:
        throw new Error(`DAO tipo '${type}' no implementado`);
    }
  }
}

module.exports = DAOFactory;
