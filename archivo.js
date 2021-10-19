//Actividad 1 Clase 5 - Declarar una clase Tienda que permita registrar:
// Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.





//Actividad 2 Clase 5 - Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas.
// Generar una única salida compuesta por la información de los objetos instanciados.




//Actividad 3 Clase 5 - Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora).
// Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
// Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas.
// Informar por alerta si la tienda está abierta, en función de la hora ingresada.





//Actividad 4 Clase 5 - Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre).
// Se retorna true si el nombre enviado corresponde al propietario de la tienda.
// Caso contrario, se retorna false.
// Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres.
// Informar por alerta si los nombres pertenecen a algún dueño de tienda.





//Actividad 5 Clase 5 - Declarar una clase Cliente que permita:
// Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
// Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto,
// siempre que este parámetro sea menor al valor enviado, y mayor que cero.
// Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números.
// Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar
// una transferencia de igual monto al ingresado.





//Variables

// let remeraM = 400
// let remeraH = 400
// let bermuda = 450
// let short = 400
// let calza = 600
// let botella = 250
// let iva = 1.21
// let subtotal = 0

// //Función 1

// alert("Artículos para seleccionar (sin IVA incluido): remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250).")
// console.log("Artículos para seleccionar (sin IVA incluido): remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250).")

// function seleccionSuma() {

//     let suma = 0
//     let ingreso = prompt("Ingrese que desea comprar:  remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250)")

//     while (ingreso != "ESC") {

//         if (ingreso == "remeraM") {
//             suma += remeraM
//             console.log("El usuario ingresó: " + ingreso + ".")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         } else if (ingreso == "remeraH") {
//             suma += remeraH
//             console.log("El usuario ingresó: " + ingreso + ".")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         } else if (ingreso == "bermuda") {
//             suma += bermuda
//             console.log("El usuario ingresó: " + ingreso + ".")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         } else if (ingreso == "short") {
//             suma += short
//             console.log("El usuario ingresó: " + ingreso + ".")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         } else if (ingreso == "calza") {
//             suma += calza
//             console.log("El usuario ingresó: " + ingreso + ".")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         } else if (ingreso == "botella") {
//             suma += botella
//             console.log("El usuario ingresó: " + ingreso + ".")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         } else {
//             alert("Ingreso NO valido")
//             console.log("El usuario realizó un ingreso erróneo.")
//             console.log("El usuario lleva sumado: $" + suma + ".")
//         }

//         ingreso = prompt("Ingrese si desea algo más y si no ingrese 'ESC':  remeraM ($400), remeraH ($400), bermuda ($450), short ($400), calza ($600) y/o botella ($250)")

//     }

//     console.log("El usuario sumó en total: $" + suma + ".")
//     return suma
// }

// //Función 2

// const sumaIva= (a, b) => a * b

// //Función 3

// function resultado() {
//     console.log("El usuario lleva un total (más IVA) de: $" + total + ".")
//     alert("Usted lleva total sumado (más IVA): $" + total + ".")
// }

// //Proceso

// subtotal = seleccionSuma()
// total = sumaIva(subtotal, iva)
// resultado()
