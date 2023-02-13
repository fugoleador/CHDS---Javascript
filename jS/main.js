//registro
let nombre
registro()

function registro() {
    let nombre = prompt("ingrese su nombre");
    if (nombre) {
        alert("Bienvenido a Centro Holistico de Salud " + nombre + "!")
        listaProductos()
    }
    else {
        alert("Debe ingresar un nombre")
        registro()
    }
}


//funciones

function listaProductos() {
    let producto;

    do {
        producto = parseInt(prompt("Que clase deseas reservar?\n1) Yoga\n2) Meditacion\n3) Functional"))
        if (producto > 3 || producto < 0) {
            alert("El numero ingresado es incorrecto.")
        }
    }
    while (producto < 0 || producto > 3)



    switch (producto) {
        case 1:
            return productoYoga();
        case 2:
            return productoMeditacion();
        case 3:
            return productoFunctional();
    }
}
function productoYoga() {
    let clase;
    clase = prompt("Cuantos sesiones de yoga por semana deseas?\n1) Yoga 1\n2) Yoga 2\n3) Yoga 3\n4) Yoga 4")
    clase = parseInt(clase)
    debugger
    if (clase > 4 || clase < 0) {
        alert("El numero ingresado es incorrecto.")
    }
    switch (clase) {
        case 1:
            precio("Yoga 1");
            break
        case 2:
            precio("Yoga 2");
            break
        case 3:
            precio("Yoga 3");
            break
        case 4:
            precio("Yoga 4");
            break
        default:
    }
}
function productoMeditacion() {
    let clase;
    clase = prompt("Cuantas sesiones de meditacion por semana deseas?\n1) Meditacion 1\n2) Meditacion 2\n3) Meditacion 3 \n4) Meditacion 4\n5) Meditacion 5")
    clase = parseInt(clase)

    if (clase > 5 || clase < 0) {
        alert("El numero ingresado es incorrecto.")
    }

    switch (clase) {
        case 1:
            precio("Meditacion 1");
            break
        case 2:
            precio("Meditacion 2");
            break
        case 3:
            precio("Meditacion 3");
            break
        case 4:
            precio("Meditacion 4");
            break
        case 5:
            precio("Meditacion 5");
            break
        default: // esto solo salta cuando es while solo y no do while-
    }
}

// Ejemplo a seguir
function productoFunctional() {
    let clase;
    clase = prompt("Cuantas sesiones de Functional deseas?\n1) Functional 1\n2) Functional 2\n3) Functional 3\n4) Functional 4")
    clase = parseint(clase)
    if (clase > 4 || clase < 0) {
        alert("El numero ingresado es incorrecto.")
    }


    switch (clase) {
        case 1:
            precio("Functional 1");
            break
        case 2:
            precio("Functional 2");
            break
        case 3:
            precio("Functional 3");
            break
        case 4:
            precio("Functional 4");
            break
        default:
    }
}

// listaProductos()
// productoYoga()
// productoMeditacion()
// productoFunctional()

function precio(clase) {
    if (clase === "Yoga 1") {
        pagar(4000);
    }
    else if (clase === "Yoga 2") {
        pagar(7500);
    }
    else if (clase === "Yoga 3") {
        pagar(11000);
    }
    else if (clase === "Yoga 4") {
        pagar(14500);
    }
    else if (clase === "Meditacion 1") {
        pagar(2000);
    }
    else if (clase === "Meditacion 2") {
        pagar(3800);
    }
    else if (clase === "Meditacion 3") {
        pagar(5400);
    }
    else if (clase === "Meditacion 4") {
        pagar(7400);
    }
    else if (clase === "Meditacion 5") {
        pagar(9000);
    }
    else if (clase === "Functional 1") {
        pagar(2500);
    }
    else if (clase === "Functional 2") {
        pagar(4700);
    }
    else if (clase === "Functional 3") {
        pagar(7000);
    }
    else if (clase === "Functional 4") {
        pagar(9200);
    }
}




function pagar(precio) {

    let pago = prompt(`Usted esta por pagar $ ${precio}. Como desea pagar?\n1)Efectivo\n2)Transferencia\n3)Débito`)
    pago = parseInt(pago)
    if (pago == 1) {
        let efectivo = prompt("Seleccionaste Efectivo, ingresa el monto con el que vas a abonar el producto")
        if (efectivo > precio) {
            alert("Gracias por tu compra, tu vuelto es: $" + (efectivo - precio));
        } else if (efectivo == precio) {
            alert("Gracias por tu compra, pagaste con la cantidad justa de dinero");
        } else {
            alert("El monto con el que deseas pagar no es suficiente para realizar la compra.");
        }
    } else if (pago == 2) {
        alert("Envia el pago al alias CHDS.pesos y envianos el comprobante de pago a travez de WhatsApp\nPresentarte en nuestro establecimiento con documento.")

    } else if (pago == 3) {
        let numCard = prompt("Ingresa el número de tu tarjeta de débito, no compartiremos estos datos con nadie.")
        alert("Tu tarjeta nº " + numCard + "fue validada con exito, gracias por la compra y disfruta de tu producto. Siempre cuidando tu vista.")
    }
}

