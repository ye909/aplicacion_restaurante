
fetch(" /js/banderas.json")
  .then(res => res.json()) // Aquí convertimos la respuesta a JSON
  .then(data => console.log(data)) // Luego, trabajamos con los datos JSON
  .catch(error => console.error("Error:", error)); // Agregamos manejo de errores




