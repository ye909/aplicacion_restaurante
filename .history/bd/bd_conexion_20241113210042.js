
const express = require("mysql")

const conexion = express.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aplicacion_restaurante'

})



conexion.connect(function(error) {
    if (error) {
        console.error("el error de conexion es "+ error)
    } else {
        console.log("conexion exitosa")
    }
})

