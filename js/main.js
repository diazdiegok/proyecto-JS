let juegosNovedades = []
let carrito = []
let btnAgregar = document.getElementsByClassName('agregar')

fetch('js/juegosNovedades.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            juegosNovedades.push(item)
        })

    })

for (const boton of btnAgregar) {
    boton.addEventListener('click', () => {
        Swal.fire({
            title: '¡Agregado al carrito! 🤩 🎮',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
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
    })
}