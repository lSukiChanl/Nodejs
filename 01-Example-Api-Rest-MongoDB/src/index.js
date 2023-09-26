// Importa las dependencias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const UserRouter = require('./Route/User');

// Carga las variables de entorno desde un archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();

// Configura middleware
app.use(bodyParser.json());
app.use('/api', UserRouter)

// Conecta a MongoDB usando Mongoose
mongoose.connect('mongodb://SukiChan:SukiChan%232036MON@45.41.206.139:27017/Example?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Define rutas de la API
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API REST!');
});

// Inicia el servidor en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
