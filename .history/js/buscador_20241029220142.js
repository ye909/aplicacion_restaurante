const caja_buscar = document.getElementById("caja_buscar")
const  container_buscardo_card = document.getElementById("container_buscardo_card")


caja_buscar.addEventListener("keyup",()=>{
        
    container_buscardo_card.innerText= caja_buscar.value



    // ploductos.forEach((element)=>{
        // caja_buscar.value.trim()
        // if (element !== caja_buscar.value) {
        //     const container_card_buscador=document.createElement("div")
        //     container_card_buscador.innerHTML=`
    
        //     <h1>${element.nombre} </h1> 
        //     <img src="${element.img}" alt="">
        //     <p>$  ${element.precio}</p>
        //     <span>${element.descripcion1}</span>
        //     <br><br>
        //     `
        //     container_buscardo_card.append(container_card_buscador)
        //     console.log(   container_card_buscador) 
        // }else{
        //    alert("a")
        // }
   
        
     
    // })



    //     container_buscardo_card.innerHTML=` <di> 
    //     <h1>$ a</h1> 
    //    <img src="$alt="">
    //    <p>$  d</p>
    //    <span>$f/span>
        
    //     </di>`
     
  

})