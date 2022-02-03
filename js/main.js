let pregunta = prompt("Bienvenidos a Juegos Digitales PS, ¿Desea agregar un juego a su carrito?");

const carritoCompras = []

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

while (pregunta.toUpperCase() === "SI") {

    let eleccion = Number(prompt("Que juego desea agregar? \n1 - Dying light 2 \n2 - Elden right \n3 - Gran turismo 7 \n4 - Horizon forbidden \n5 - Sifu \n6 - Wwe 2K22 \n7 - Fifa 22 \n8 - Nba 2K22"));


    pregunta = prompt("¿Desea agregar otro juego?");

    if (pregunta.toUpperCase() === "NO") {
        alert("Nos vemos, gracias por sus consultas");
    }

    buscar(eleccion);

}

// Se agrega juego al array juegosNovedades
juegosNovedades.push({
    id: 9,
    nombre: "Deadpool",
    tipo: "Accion",
    precio: "2700"
})

console.log(juegosNovedades);

// Se agrega al array agregarAlCarrito
function agregarAlCarrito(producto) {
    carritoCompras.push(producto)
}
console.log(carritoCompras);

// se usa el metodo find para buscar en el array segun la condicion

function buscar(eleccion) {
    let juego = juegosNovedades.find(item => item.id == eleccion)
    console.log(juego);
    agregarAlCarrito(juego)
    if (juego == undefined) {
        alert('el producto no fue en contrado en la base de datos!')

    }
}