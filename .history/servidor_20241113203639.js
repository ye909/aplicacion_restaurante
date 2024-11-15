const express = require("express")
const  app = express()




app.get("views engine","ejs")

app.get("/",(req,res)=>{
    res.send("hola")
})
// const port = v |3000

app.listen(3000,() =>{
console.log("servidor http://localhost:3000")
})

