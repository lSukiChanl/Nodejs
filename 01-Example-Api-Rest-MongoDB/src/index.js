// Importa las dependencias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./Models/User.js'); // Importa el modelo de libro

// Carga las variables de entorno desde un archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();

// Configura middleware
app.use(bodyParser.json());

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



// Ruta GET para obtener todos los libros
app.get('/api/users', async (req, res) => {
    try {
      const books = await User.find();
      res.json(books);
    } catch (err) {
      console.error('Error al obtener los Usuarios:', err);
      res.status(500).json({ error: 'Error al obtener los Usuarios' });
    }
  });
  
  // Ruta POST para crear un nuevo libro
  app.post('/api/users', async (req, res) => {
    const { username, password } = req.body;
    const book = new User({ username, password });
  
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      console.error('Error al crear el Usuario:', err);
      res.status(500).json({ error: 'Error al crear el Usuario' });
    }
  });