const express = require('express'); 
const app=express();
const port =3001; 

const connection=require('./conexion');

// Ruta para obtener todas las solicitudes
app.get('/api/solicitudes', (req, res) => {
    connection.query('SELECT * FROM Solicitudes', (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta: ' + error.message);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
      res.json(results);
    });
  });

  // Ruta para obtener una solicitud por ID
app.get('/api/solicitudes/:id', (req, res) => {
    const solicitudId = req.params.id;
    connection.query('SELECT * FROM Solicitudes WHERE id = ?', solicitudId, (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta: ' + error.message);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Solicitud no encontrada' });
        return;
      }
      res.json(results[0]);
    });
  });

  // Ruta para crear una nueva solicitud
app.post('/api/solicitudes', (req, res) => {
    const nuevaSolicitud = req.body;
    connection.query('INSERT INTO Solicitudes SET ?', nuevaSolicitud, (error, result) => {
      if (error) {
        console.error('Error al insertar una nueva solicitud: ' + error.message);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
      res.json({ message: 'Solicitud creada con éxito', id: result.insertId });
    });
  });

  // Ruta para actualizar una solicitud existente
app.put('/api/solicitudes/:id', (req, res) => {
    const solicitudId = req.params.id;
    const datosActualizados = req.body;
    connection.query('UPDATE Solicitudes SET ? WHERE id = ?', [datosActualizados, solicitudId], (error) => {
      if (error) {
        console.error('Error al actualizar la solicitud: ' + error.message);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
      res.json({ message: 'Solicitud actualizada con éxito' });
    });
  });
  
  // Ruta para eliminar una solicitud
  app.delete('/api/solicitudes/:id', (req, res) => {
    const solicitudId = req.params.id;
    connection.query('DELETE FROM Solicitudes WHERE id = ?', solicitudId, (error) => {
      if (error) {
        console.error('Error al eliminar la solicitud: ' + error.message);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
      res.json({ message: 'Solicitud eliminada con éxito' });
    });
  });

 

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });