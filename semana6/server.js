const express = require('express');
const app = express();

// Middleware esencial para procesar los cuerpos JSON recibidos (req.body)
app.use(express.json());

// Endpoint de Registro (Pregunta 6 y 7)
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Endpoint de Incidencias Comunitarias (Pregunta 8)
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});