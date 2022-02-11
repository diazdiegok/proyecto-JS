const juegosNovedades = [{
        id: 1,
        nombre: "Dying light 2",
        tipo: "Accion",
        precio: "2200"
    },
    {
        id: 2,
        nombre: "Elden right",
        tipo: "Aventura",
        precio: "1800"
    },
    {
        id: 3,
        nombre: "Gran turismo 7",
        tipo: "Carrera",
        precio: "3000"
    },
    {
        id: 4,
        nombre: "Horizon forbidden",
        tipo: "Aventura",
        precio: "2100"
    },
    {
        id: 5,
        nombre: "Sifu",
        tipo: "Aventura",
        precio: "1900"
    },
    {
        id: 6,
        nombre: "Wwe 2K22",
        tipo: "Pelea",
        precio: "2500"
    },
    {
        id: 7,
        nombre: "Fifa 22",
        tipo: "Deporte",
        precio: "4000"
    },
    {
        id: 8,
        nombre: "Nba 2K22",
        tipo: "Deporte",
        precio: "3800"
    },
]

let btnAgregar = document.getElementsByClassName('agregar')
let btnQuitar = document.getElementsByClassName('quitar')

for (const boton of btnAgregar) {

    boton.addEventListener('click', () => {
        let agregar = juegosNovedades.find(item => item.id == boton.id)
        agregarCarrito(agregar)

    })
}

function agregarCarrito(agregar) {

    let contenedorCarrito = document.getElementById('tablaCarrito')
    let tr = document.createElement('tr')
    tr.innerHTML +=
        `                  
                                    <td>${agregar.id}</td>
                                    <td>${agregar.nombre}</td>
                                    <td>${agregar.tipo}</td>
                                    <td>$${agregar.precio}</td>
                                    <td><button id="quitar${agregar.id}" type="button" class="btn btn-danger">X</button></td>
                                       `
    contenedorCarrito.appendChild(tr)

    let btnQuitar = document.getElementById(`quitar${agregar.id}`)

    btnQuitar.addEventListener('click', () => {
        btnQuitar.parentElement.parentElement.remove()

    })
}