const caja_buscar = document.getElementById("caja_buscar")



caja_buscar.addEventListener("keyup",()=>{
        
    ploductos.forEach((element)=>{
        
        const  container_buscardo_card = document.getElementById("container_buscardo_card")  

        container_buscardo_card.innerHTML=`

        <h1>${element.nombre} </h1> 
        <img src="${element.img}" alt="">
        <p>$  ${element.precio}</p>
        <span>${element.descripcion1}</span>
        <br><br>
        `
     

        console.log( container_buscardo_card)
        
 
    })



    //     container_buscardo_card.innerHTML=` <di> 
    //     <h1>$ a</h1> 
    //    <img src="$alt="">
    //    <p>$  d</p>
    //    <span>$f/span>
        
    //     </di>`
     
  

})
