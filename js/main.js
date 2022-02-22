const juegosNovedades = [{
        id: 1,
        nombre: "Dying light 2",
        tipo: "Accion",
        precio: "2200",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Elden right",
        tipo: "Aventura",
        precio: "1800",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Gran turismo 7",
        tipo: "Carrera",
        precio: "3000",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Horizon forbidden",
        tipo: "Aventura",
        precio: "2100",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Sifu",
        tipo: "Aventura",
        precio: "1900",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Wwe 2K22",
        tipo: "Pelea",
        precio: "2500",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "Fifa 22",
        tipo: "Deporte",
        precio: "4000",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Nba 2K22",
        tipo: "Deporte",
        precio: "3800",
        cantidad: 1
    },
]

let carrito = []
let btnAgregar = document.getElementsByClassName('agregar')
let btnQuitar = document.getElementsByClassName('quitar')
let contenedorCarrito = document.querySelector("#contenedor-carrito")

for (const boton of btnAgregar) {

    boton.addEventListener('click', () => {
        const existe = carrito.some(item => item.id == boton.id)
        if (existe) {
            carrito = carrito.map(item => {
                if (item.id == boton.id) {
                    const { id, nombre, tipo, precio } = item
                    const cantidad = item.cantidad + 1
                    const productoActualizado = {
                        id: id,
                        nombre: nombre,
                        tipo: tipo,
                        precio: precio,
                        cantidad: cantidad
                    }
                    return productoActualizado
                } else {
                    return item
                }
            })
            console.log(carrito)
        } else {
            let productoEncontrar = juegosNovedades.find(item => item.id == boton.id)
            carrito.push(productoEncontrar)
            console.log(carrito)

        }
        localStorage.setItem('carrito', JSON.stringify(carrito))

        mostrarCarrito(carrito)

    })
}

function mostrarCarrito(carrito) {
    contenedorCarrito.innerHTML = ""
    for (const producto of carrito) {
        const tr = document.createElement("tr")
        tr.innerHTML =
            `                  
                                    <td>${producto.id}</td>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.tipo}</td>
                                    <td>$${producto.precio}</td>
                                    <td>${producto.cantidad}</td>
                                    <td><button id="quitar${producto.id}" type="button" class="btn btn-danger">X</button></td>
                                       `
        contenedorCarrito.appendChild(tr)

        let btnQuitar = document.getElementById(`quitar${producto.id}`)

        btnQuitar.addEventListener('click', () => {
            btnQuitar.parentElement.parentElement.remove()
            carrito = carrito.filter(item => item.id != producto.id)
            localStorage.setItem('carrito', JSON.stringify(carrito))
        })
    }
}

function recuperar() {
    let juegosLS = JSON.parse(localStorage.getItem('carrito')) || []

    mostrarCarrito(juegosLS)
}
recuperar()