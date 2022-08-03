const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/todo");

const app = express();

const port = process.env.PORT || 3000;

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middleware
app.use(express.json());  //para recibir el req.body correctamente
app.use('/api',userRoutes);  //añade /api a todas las rutas (apis) y accedemos a todas las apis de todo que estan en routes

//mongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('Estas conectado a la bd'))
    .catch((error) => console.error(error));

app.listen(port, ()=>console.log('server corriendo en puerto',port));