const express = require('express');
const app = express();

app.use(express.json());

// Ruta inicial (Pregunta 6)
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo (Pregunta 6)
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetro de nombre (Pregunta 6)
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta POST para recibir reportes (Pregunta 8)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});