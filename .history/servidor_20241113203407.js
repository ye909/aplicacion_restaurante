const express = require("express")
const  app = express()



app.get("viws engine","ejs")

app.get("/",(req,res){
    res.render("hola")
})
// const port = v |3000

app.listen(3000, () =>{
console.log("servidor http://localhost:3000")
})

