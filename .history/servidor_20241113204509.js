const express = require("express")
const  app = express()




app.set("views engine","ejs")

app.use("/",require("./views/rauter"))

// const port = v |3000

app.listen(3000,() =>{
console.log("servidor http://localhost:3000")
})

