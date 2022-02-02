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
    switch (eleccion) {
        case 1:
            console.log(juegosNovedades[0]);
            agregarAlCarrito(juegosNovedades[0]);
            break;
        case 2:
            console.log(juegosNovedades[1]);
            agregarAlCarrito(juegosNovedades[1]);
            break;
        case 3:
            console.log(juegosNovedades[2]);
            agregarAlCarrito(juegosNovedades[2]);
            break;
        case 4:
            console.log(juegosNovedades[3]);
            agregarAlCarrito(juegosNovedades[3]);
            break;
        case 5:
            console.log(juegosNovedades[4]);
            agregarAlCarrito(juegosNovedades[4]);
            break;
        case 6:
            console.log(juegosNovedades[5]);
            agregarAlCarrito(juegosNovedades[5]);
            break;
        case 7:
            console.log(juegosNovedades[6]);
            agregarAlCarrito(juegosNovedades[6]);
            break;
        case 8:
            console.log(juegosNovedades[7]);
            agregarAlCarrito(juegosNovedades[7]);
            break;
        case 9:
            console.log(juegosNovedades[8]);
            agregarAlCarrito(juegosNovedades[8]);
            break;

        default:
            console.error("Selección incorrecta");
            break;
    }

    // Se agrega juego al array juegosNovedades
    juegosNovedades.push({
        id: 9,
        nombre: "Deadpool",
        tipo: "Accion",
        precio: "2700"
    })

    pregunta = prompt("¿Desea agregar otro juego?");

    if (pregunta.toUpperCase() === "NO") {
        alert("Nos vemos, gracias por sus consultas");
        console.log(juegosNovedades);
    }

}

// Se agrega al array agregarAlCarrito
function agregarAlCarrito(producto) {
    carritoCompras.push(producto)
}