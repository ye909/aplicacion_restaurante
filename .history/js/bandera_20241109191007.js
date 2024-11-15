


const s  = async function () {
    const a = await fetch("../bd/bandera.json")
    const s = await a.json()
    console.log(s)
}
// const menu_bandera= document.getElementById("menu_bandera")

// fetch("../bd/bandera.json")
// .then(res => res.json())
// .then(data =>
//     console.log(data)
//    menu_bandera.innerHTML = `
//     <h3 class="" id"">${data.titulo}</h3>
//     <img src="${data.img}" class="img_modal">
//     <p>${data.descripcion}</p>
//  `

// )
