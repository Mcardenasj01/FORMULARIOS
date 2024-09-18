const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;

// Configurar Express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB (en local)
mongoose.connect('mongodb://localhost:27017/mi_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.log('Error al conectar a MongoDB:', err);
});

// Definir el modelo (schema) para el formulario
const FormularioSchema = new mongoose.Schema({
  municipio: String,
  codEstablecimiento: Number,
  fechaMaxSinSancion: Date,
  depto: String,
  numFormulario: Number,
  anioGravable: Date,
  comprasAnual: Number,
  numEmpleados: Number,
  comprasAnual: Number,
  estratoSocial: String,
  areaNegocio: String,
});

const Formulario = mongoose.model('Formulario', FormularioSchema);

// Ruta para manejar la recepción de datos del formulario
app.post('/api/form', (req, res) => {
  const { municipio, codEstablecimiento, fechaMaxSinSancion, depto, numFormulario, anioGravable, 
          numEmpleados, comprasAnual, estratoSocial, areaNegocio} = req.body;
  const nuevoFormulario = new Formulario({ municipio, codEstablecimiento, fechaMaxSinSancion, depto, numFormulario, anioGravable, 
          numEmpleados, comprasAnual, estratoSocial, areaNegocio });


  nuevoFormulario.save()
  .then(() => res.status(201).json({ message: 'Datos guardados exitosamente' }))
  .catch((err) => res.status(500).json({ message: 'Error guardando los datos', error: err.message }));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
