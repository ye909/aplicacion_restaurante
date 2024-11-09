const caja_buscar = document.getElementById("caja_buscar")
const  container_buscardo_card = document.getElementById("container_buscardo_card")


caja_buscar.addEventListener("keyup",()=>{
    container_buscardo_card.innerText= caja_buscar.value

})