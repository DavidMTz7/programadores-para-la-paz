const express = require('express');
const app = express();

app.use(express.json());

// Array global en memoria para almacenar los reportes de forma dinámica
let reportes = [];

// Endpoint GET: Retorna la lista completa de reportes guardados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Endpoint POST: Recibe un nuevo reporte, le asigna un ID autoincremental y lo agrega al array
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});