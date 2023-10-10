const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const UserRouter = require('./Route/Serie');
const app = express();
const Conexion = `mongodb://${process.env.UserMongoDB}:${process.env.PassMongoDB}@${process.env.IpMongoDB}:${process.env.PortMongoDB}/${process.env.DBMongoDB}?authSource=admin`;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', UserRouter)

console.log(Conexion);
mongoose.connect(Conexion, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión a MongoDB exitosa');
})
.catch((err) => {
  console.error('Error al conectar a MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});