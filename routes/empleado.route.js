const express = require ('express')
const app = express()
const empleadoRuta = express.Router()

//declaramos un objeto del modelo
let empleado = require ('../models/Empleado')
//const Empleado = require('../models/Empleado')
let Empleado = require('../models/Empleado')

//agregar un nuevo empleado
/* empleadoRuta.route('/create').post((req,res,next) =>{
    Empleado.create(req.body,(error,data) =>{
        if(error){
            return next(error)
        }else(
            res.json(data)
        )
    })
})
*/

//agregar un nuevo empleado
empleadoRuta.route('/create').post((req,res)=>{
    Empleado.create(req.body)
    .then((data) => {
        console.log('Se insertó el documento')
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

/*
//obtenemos todos los empleados 
empleadoRuta.route('/empleados').get((req,res,next) =>{
    Empleado.find((error,data) =>{
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    })
}) */

//obtenemos todos los empleados
empleadoRuta.route('/empleados').get((req,res)=>{
    Empleado.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})



/*
//obtener un solo empleado por su id
empleadoRuta.route('/empleado/:id').get((req,res,next) => {
    Empleado.findById(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
}) 
*/

//obtenemos un solo empleado por su id
empleadoRuta.route('/empleado/:id').get((req,res,next)=>{
    Empleado.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })    
})





/*
//actualizar un empleado
empleadoRuta.route('/update/:id').put((req,res,next) =>{
    Empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data) => {
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    })
})
*/

//actualizar
empleadoRuta.route('/update/:id').put((req,res) => {
    Empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})


/*
//eliminar empleado
empleadoRuta.route('delete/:id').delete((req,res,next) => {
    Empleado.findByIdAndRemove(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
*/

//eliminar
empleadoRuta.route('/delete/:id').delete((req,res) => {
    Empleado.findByIdAndRemove(req.params.id)
    .then((data) => {
     console.log('Se eliminó el documento')
     res.send(data)
    })
    .catch((err) => {
     console.error(err)
    })
 })

module.exports = empleadoRuta;