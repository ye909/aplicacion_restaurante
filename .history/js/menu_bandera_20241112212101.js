
// const menu_bandera= document.getElementById("menu_bandera")
 
fetch("/js/banderas.json")
  .then(res => res.json()) // Aquí convertimos la respuesta a JSON
  .then(data => console.log(data)) // Luego, trabajamos con los datos JSON
  .catch(error => console.error("Error:", error)); // Agregamos manejo de errores


// bandera.forEach(data => {
//     console.log(data)
//     menu_bandera.innerHTML = `
//     <h3 class="" id"">${data.titulo}</h3>
//     <img src="${data.img}" class="img_modal">
//     <p>${data.descripcion}</p>
//  `

// });



