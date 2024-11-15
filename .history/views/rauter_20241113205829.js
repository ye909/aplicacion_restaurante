const  express = require("express")
const rauter = express.Router()


const conexion = require("../bd/bd_conexion")

rauter.get("/",(req,res)=>{

conexion.query("SELECT * FROM registro_usuario",(error,result)=>{
 if (error) {
    throw error
 }else{
    res.send(result)
 }
})

})

module.exports = rauter