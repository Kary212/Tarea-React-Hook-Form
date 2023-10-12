const express = require('express');
const bodyParser = require('body-parser');
const Solicitud = require('./solicitud');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// CRUD: Create
app.post('/solicitud', (req, res) => {
    Solicitud.create(req.body, (error, results) => {
    if (error) return res.status(500).json({ error });
    res.json({ id: results.insertId });
  });
});

// CRUD: Read (all)
app.get('/solicitud', (req, res) => {
    Solicitud.fetchAll((error, results) => {
    if (error) return res.status(500).json({ error });
    res.json(results);
  });
});

// CRUD: Read (one by id)
app.get('/solicitud/:id', (req, res) => {
    Solicitud.findById(req.params.id, (error, results) => {
    if (error) return res.status(500).json({ error });
    if (results.length === 0) return res.status(404).json({ message: 'Not found' });
    res.json(results[0]);
  });
});

// CRUD: Update
app.put('/solicitud/:id', (req, res) => {
    Solicitud.update(req.params.id, req.body, (error) => {
    if (error) return res.status(500).json({ error });
    res.json({ message: 'Updated successfully' });
  });
});

// CRUD: Delete
app.delete('/solicitud/:id', (req, res) => {
    Solicitud.delete(req.params.id, (error) => {
    if (error) return res.status(500).json({ error });
    res.json({ message: 'Deleted successfully' });
  });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


module.exports = Solicitud;