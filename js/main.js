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
    // console.log(btnAgregar);

for (const boton of btnAgregar) {
    // console.log(boton.id);
    boton.addEventListener('click', () => {
        let agregar = juegosNovedades.find(item => item.id == boton.id)
        console.log(agregar);
        agregarCarrito(agregar)
    })
}

function agregarCarrito(agregar) {
    let contenedorCarrito = document.getElementById('contenedor-carrito')
    contenedorCarrito.innerHTML +=
        `                           
                                    <ul class=listaAgregados>
                                    <li>${agregar.nombre}</li>
                                    <li>${agregar.tipo}</li>
                                    <li>$${agregar.precio}</li>
                                    </ul>
                                    <hr>
    `
}