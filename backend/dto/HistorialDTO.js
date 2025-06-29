class HistorialDTO {
  constructor({ id, usuario, observaciones, fecha }) {
    this.id = id;
    this.usuario = usuario;
    this.observaciones = observaciones;
    this.fecha = fecha;
  }
}

module.exports = HistorialDTO;
