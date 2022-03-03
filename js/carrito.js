let btnQuitar = document.getElementsByClassName('quitar')
let contenedorCarrito = document.querySelector("#contenedor-carrito")


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