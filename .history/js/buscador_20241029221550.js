const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

// Función para actualizar los resultados
function actualizarResultados() {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = ""; // Limpiar resultados previos

    if (query) {
        // Filtrar productos por coincidencia con la búsqueda y limitar a 10 resultados
        const resultados = productos.filter(producto => 
            producto.toLowerCase().includes(query)
        ).slice(0, 10);

        // Mostrar cada resultado en la lista
        resultados.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = producto;
            resultsList.appendChild(li);
        });
    }
}

// Escuchar el evento 'keyup' en el input
searchInput.addEventListener("keyup", actualizarResultados);


// const caja_buscar = document.getElementById("caja_buscar")
// const  container_buscardo_card = document.getElementById("container_buscardo_card")


// caja_buscar.addEventListener("keyup",()=>{
        
//  console.log( caja_buscar.value)



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
     
  

// })
