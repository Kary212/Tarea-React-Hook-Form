const mysql = require('mysql2');
const express = require('express');

const app = express();
const port = 3001;

//  Configuración de la conexión a la base de datos
 const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'tramitesdb',
});

// Conectar a la base de datos
 connection.connect((err) => {
   if (err) {
     console.error('Error al conectar a la base de datos:', err);
     throw err;
   }
   console.log('Conexión a la base de datos MySQL exitosa.');
 });

  module.exports = connection;

