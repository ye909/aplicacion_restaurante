
const express = require("mysql")

const conexion = express.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aplicacion_restaurante'

})



conexion.connect(function(err) {
    if (error) {
        throw err
    } else {
        console.log("conexion exitosa")
    }
})

