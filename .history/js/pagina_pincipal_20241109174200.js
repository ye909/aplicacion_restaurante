
const bienvenida = document.getElementById("bienvenida")


const container_producto_principal = document.getElementById("container_producto_principal")
const agregar_producto_carro= []

ploductos.forEach((element)=>{


 const producto_principal = document.createElement("div")
 producto_principal.classList.add("producto_principal")
 producto_principal.innerHTML=`
 

 <h1>${element.nombre} </h1> 
 <img src="${element.img}" alt="">
 <p>$  ${element.precio}</p>
 <span>${element.descripcion1}</span>
 <br><br>
 `
 container_producto_principal.append(producto_principal)

 
const btnboton_agregar= document.createElement("button")
btnboton_agregar.classList.add("btnboton_agregar")
btnboton_agregar.setAttribute("id","btnboton_agregar")
btnboton_agregar.innerText="Agregar"


producto_principal.append(btnboton_agregar)

btnboton_agregar.addEventListener("click",()=>{



    agregar_producto_carro.push({
        id:element.id,
        nombre:element.nombre,
        precio:element.precio,
        descripcion:element.descripcion1,
        img:element.img,
        cantidad:element.cantidad
    
    })  
console.log(agregar_producto_carro)

})




})







