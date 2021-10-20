// Constructor y Método // en una Clase


class Producto {

    constructor(variedad, nombre, precio, talle, stock, color) {
        this.variedad = variedad
        this.nombre = nombre
        this.precio = precio
        this.talle = talle
        this.stock = stock
        this.color = color

        this.verStock = (cantidad) => {
            cantidad = parseInt(cantidad)
            if (this.stock >= cantidad) {
                console.log("El usuario desea comprar: " + cantidad + " unidades de: " + this.variedad + " tipo " + this.nombre + " color " + this.color + ".")
            } else {
                alert("La solicitud supera el stock disponible.")
                console.log("La solicitud del usuario supera el stock disponible.")
            }
        }
    }
}

// Objetos

const remeraM = new Producto("remera", "musculosa", 400, "mujer", 150, "violeta")
const remeraH = new Producto("remera", "manga corta", 400, "hombre", 150, "verde")
const bermuda = new Producto("pantalon", "bermuda", 550, "hombre", 150, "negro")
const short = new Producto("pantalon", "short", 550, "mujer", 150, "negro")
const calza = new Producto("pantalon", "calza", 700, "unisex", 150, "negro")
const botellaPlastico = new Producto("botella", "caramañola", 300, "unisex", 100, "transparente")
const botellaAluminio = new Producto("botella", "caramañola", 600, "unisex", 100, "aluminio")
let iva = 1.21
let total = 0
let subtotal = 0

//

const multiplicar = (a, b) => a * b

//
function unidad() {

    let unidades = parseFloat(prompt("Ingrese las unidades que desea: (1 a 5)"))

    while (unidades != "ESC") {

        if (unidades >= 1 && unidades <= 5) {
            console.log("El usuario ingreso: " + unidades + ".")
            return unidades
        } else {
            alert("Ingreso NO valido")
            console.log("El usuario realizó un ingreso erróneo de las unidades a solicitar.")
            unidades = parseFloat(prompt("ingrese nuevamente las unidades que desea: "))
        }
    }
}

//

function resultado() {
    console.log("El usuario lleva un total (más IVA) de: $" + total + ".")
    alert("Usted lleva total sumado (más IVA): $" + total + ".")
}

//

function seleccionSuma() {

    let total = 0
    let unidades = 0
    let suma = 0
    let ingreso = prompt("Ingrese que desea comprar:  remeraM ($400), remeraH ($400), bermuda ($550), short ($550), calza ($700), botellaPlastico ($300), botellaAluminio ($600)")
    console.log("El usuario ingresó: " + ingreso + ".")

    while (ingreso != "ESC") {

        if (ingreso == "remeraM") {
            unidades = unidad()
            total = multiplicar(remeraM.precio, unidades)
            suma += total
            remeraM.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else if (ingreso == "remeraH") {
            unidades = unidad()
            total = multiplicar(remeraH.precio, unidades)
            suma += total
            remeraH.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else if (ingreso == "bermuda") {
            unidades = unidad()
            total = multiplicar(bermuda.precio, unidades)
            suma += total
            bermuda.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else if (ingreso == "short") {
            unidades = unidad()
            total = multiplicar(short.precio, unidades)
            suma += total
            short.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else if (ingreso == "calza") {
            unidades = unidad()
            total = multiplicar(calza.precio, unidades)
            suma += total
            calza.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else if (ingreso == "botellaPlastico") {
            unidades = unidad()
            total = multiplicar(botellaPlastico.precio, unidades)
            suma += total
            botellaPlastico.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else if (ingreso == "botellaAluminio") {
            unidades = unidad()
            total = multiplicar(botellaAluminio.precio, unidades)
            suma += total
            botellaAluminio.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else {
            alert("Ingreso NO valido")
            console.log("El usuario realizó un ingreso erróneo.")
            console.log("El usuario lleva sumado: $" + suma + ".")
        }

        ingreso = prompt("Ingrese si desea algo más y si no ingrese 'ESC':  remeraM ($400), remeraH ($400), bermuda ($550), short ($550), calza ($700), botellaPlastico ($300), botellaAluminio ($600)")

    }
    console.log("El usuario sumó en total: $" + suma + ".")
    return suma
}

alert("Bienvenido! A continuación puede seleccionar los productos que desea adquirir como complemento a la carrera: ")

subtotal = seleccionSuma()
total = multiplicar(subtotal, iva)
resultado()