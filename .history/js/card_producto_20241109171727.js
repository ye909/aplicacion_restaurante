const shopping = document.getElementById("shopping");

const container_modal_card = document.getElementById("container_modal_card");
const container_fondo_card = document.getElementById("container_fondo_card");

// const container_alerta = document.getElementById("container_alerta");


const modal= () => {
  // container_modal_card.innerHTML = "";

  const hedear_modal = document.createElement("div");
  hedear_modal.className = "modal-header";

  const hedar_close = document.createElement("div");
  hedar_close.classList.add("close");
  hedar_close.innerHTML = `<div><img src="../public/imagen/login.gif" alt=""></div>
  <div class="texto_parafo"> <h1>productos</h1> </div>
  <div class="btnclose" id="btnclose">❌</div>
  `
  // hedear_modal.append(hedar_close);
  container_fondo_card.append(hedear_modal);




  console.log(container_modal_card)
//   btnclose.addEventListener("click", () => {
    

//     container_fondo_card.style.display = "none";
//     titulo_producto.style.display = "none";

    
//   });
// }

// const footer = document.createElement("div")
// footer.className = "modal-footer";
// footer.innerHTML =  ` `
// const titulo_producto = document.createElement("div");

// titulo_producto.className = "modal-body";
// titulo_producto.innerHTML = ` `;
// container_modal_card.append(titulo_producto);

// shopping.addEventListener("click", () => {
//   agregar_producto_carro.forEach((element) => {
//     const product_modal = document.createElement("div");
//     product_modal.className = "ventana_modal";
//     product_modal.innerHTML = `
//     <h3 class="modal_titulo" id"modal_titulo">${element.nombre}</h3>
//     <img src="${element.img}" class="img_modal">
//     <p>$ ${element.precio}</p>
//     <p class="descripcion_modal">${element.descripcion}</p>
//    <div class="botones">
//    <button>Enviar</button> 
//    <button class="delete" id="delete">Eliminar</button> 
   
//    </div> 

//     `;

//     titulo_producto.append(product_modal);

//     container_modal_card.style.display = "inline";
//     container_fondo_card.style.display = "inline";

//     const eleminar = product_modal.querySelector(".delete");
//     eleminar.addEventListener("click", () => {
//       delectecatprodoct(element.id);
//     });
//   });
// });

// falta validar que no se elimine las card de los productos
// const delectecatprodoct = (id) => {
//   const indecat = agregar_producto_carro.findIndex((intem) => intem.id == id);

//   console.log("pocicion", indecat);

//   console.log(agregar_producto_carro.splice(indecat, 1), "si");

};
shopping.addEventListener("click",modal)