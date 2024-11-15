const { error } = require("console")
const express = require("mysql")

const conexion = express.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aplicacion_restaurante'

})




// conexion("SELECT * FORM registro_usuario")
conexion.connect(function(err) {
    if (error) {
        throw err
    } else {
        console.log("conexion exitosa")
    }
})

