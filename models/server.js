const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tramitesdb',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// rutas para CRUD
app.post('/solicitudes', (req, res) => {
  const { nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, nivel, municipio, asunto } = req.body;
  const sql = `INSERT INTO solicitudes (nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, nivel, muncipio, asunto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, nivel, municipio, asunto], (err, result) => {
    if (err) {
      console.error('Error al insertar solicitud:', err);
      res.status(500).json({ message: 'Error al insertar solicitud' });
    } else {
      res.status(201).json({ message: 'Solicitud insertada con éxito' });
    }
  });
});

app.get('/solicitudes', (req, res) => {
  const sql = 'SELECT * FROM solicitudes';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener solicitudes:', err);
      res.status(500).json({ message: 'Error al obtener solicitudes' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/solicitudes/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM solicitudes WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al obtener solicitud:', err);
      res.status(500).json({ message: 'Error al obtener solicitud' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Solicitud no encontrada' });
      } else {
        res.status(200).json(result[0]);
      }
    }
  });
});

app.put('/solicitudes/:id', (req, res) => {
  const id = req.params.id;
  const { nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, nivel, municipio, asunto } = req.body;
  const sql = `UPDATE solicitudes SET nombreCompleto=?, curp=?, nombre=?, paterno=?, materno=?, telefono=?, celular=?, correo=?, nivel=?, muncipio=?, asunto=? WHERE id = ?`;
  db.query(sql, [nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, nivel, municipio, asunto, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar solicitud:', err);
      res.status(500).json({ message: 'Error al actualizar solicitud' });
    } else {
      res.status(200).json({ message: 'Solicitud actualizada con éxito' });
    }
  });
});

app.delete('/solicitudes/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM solicitudes WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar solicitud:', err);
      res.status(500).json({ message: 'Error al eliminar solicitud' });
    } else {
      res.status(200).json({ message: 'Solicitud eliminada con éxito' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
