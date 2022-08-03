const express = require('express');
const todoSchema = require('../models/todo');
const router = express.Router();

//Apis o endpoints
//Crear todo
router.post('/addtodo', (req,res)=>{
    const todo =todoSchema(req.body);  //guardamos los datos que llegan de la peticion en una variable(req.body) 
    todo
        .save()  //guardamos enl nuevo todo en la bd
        .then((data)=> res.json(data))  //si se guardo con exito respondemos con esos datos
        .catch((error)=> res.json({message:error}));  //si no se guardo con exito mensaje error
});

//Mostrar todos
router.get('/todos', (req,res)=>{
    todoSchema
        .find()  //busca todos los todos de la tabla o coleccion todo (del todoschema)
        .then((data)=> res.json(data))  //nos regresa los todos en un json
        .catch((error)=> res.json({message:error}));  //si hay algun error
});

//Eliminar Todo
router.delete('/todo/:id', (req,res)=>{
    const {id} =req.params;  //extraemos el id que viene en los parametros de la peticion
    todoSchema
        .remove({_id:id})  //eliminamos el todo que tenga ese id
        .then((data)=> res.json(data))  //regresa si se elimino el elemento
        .catch((error)=> res.json({message:error}));  //si hay algun error
});

module.exports = router;