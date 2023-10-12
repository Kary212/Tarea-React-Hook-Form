const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Asegúrate de poner tu usuario de MySQL aquí
  password: '', // Asegúrate de poner tu contraseña de MySQL aquí
  database: 'tramitesdb'
});



class Solicitud {
  static fetchAll(callback) {
    connection.query('SELECT * FROM solicitudes', callback);
  }

  static findById(id, callback) {
    connection.query('SELECT * FROM solicitudes WHERE id = ?', [id], callback);
  }

  static create(data, callback) {
    const query = 'INSERT INTO solicitudes (nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, nivel, muncipio, asunto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [data.nombreCompleto, data.curp, data.nombre, data.paterno, data.materno, data.telefono,data.celular,data.correo,data.nivel, data.muncipio, data.asunto], callback);
  }

  static update(id, data, callback) {
    const query = 'UPDATE solicitudes SET nombreCompleto=?, curp=?, nombre=?, paterno=?, materno=?, telefono=?, celular=?, correo=?, nivel=?, muncipio=?, asunto=? WHERE id = ?';
    connection.query(query, [data.nombreCompleto, data.curp, data.nombre, data.paterno, data.materno, data.telefono,data.celular,data.correo, data.nivel, data.muncipio, data.asunto, id], callback);
  }

  static delete(id, callback) {
    connection.query('DELETE FROM solicitudes WHERE id = ?', [id], callback);
  }
}

module.exports = Solicitud;
