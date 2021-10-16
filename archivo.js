//Variables

let remeraM = 400
let remeraH = 400
let bermuda = 450
let short = 400
let calza = 600
let botella = 250
let iva = 1.21
let subtotal = 0

//Función 1

alert("Artículos para seleccionar (sin IVA incluido): remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250).")
console.log("Artículos para seleccionar (sin IVA incluido): remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250).")

function seleccionSuma() {

    let suma = 0
    let ingreso = prompt("Ingrese que desea comprar:  remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250)")

    while (ingreso != "ESC") {

        if (ingreso == "remeraM") {
            suma += remeraM
            console.log("El usuario ingresó: " + ingreso + ".")
            console.log("El usuario lleva sumado: $" + suma + ".")
        } else if (ingreso == "remeraH") {
            suma += remeraH
            console.log("El usuario ingresó: " + ingreso + ".")
            console.log("El usuario lleva sumado: $" + suma + ".")
        } else if (ingreso == "bermuda") {
            suma += bermuda
            console.log("El usuario ingresó: " + ingreso + ".")
            console.log("El usuario lleva sumado: $" + suma + ".")
        } else if (ingreso == "short") {
            suma += short
            console.log("El usuario ingresó: " + ingreso + ".")
            console.log("El usuario lleva sumado: $" + suma + ".")
        } else if (ingreso == "calza") {
            suma += calza
            console.log("El usuario ingresó: " + ingreso + ".")
            console.log("El usuario lleva sumado: $" + suma + ".")
        } else if (ingreso == "botella") {
            suma += botella
            console.log("El usuario ingresó: " + ingreso + ".")
            console.log("El usuario lleva sumado: $" + suma + ".")
        } else {
            alert("Ingreso NO valido")
            console.log("El usuario realizó un ingreso erróneo.")
            console.log("El usuario lleva sumado: $" + suma + ".")
        }

        ingreso = prompt("Ingrese si desea algo más y si no ingrese 'ESC':  remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250)")

    }

    console.log("El usuario sumó en total: $" + suma + ".")
    return suma
}

//Función 2

const sumaIva= (a, b) => a * b

//Función 3

function resultado() {
    console.log("El usuario lleva un total (más IVA) de: $" + total + ".")
    alert("Usted lleva total sumado (más IVA): $" + total + ".")
}

//Proceso

subtotal = seleccionSuma()
total = sumaIva(subtotal, iva)
resultado()
