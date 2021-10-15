//Actividad 1 Clase 4 - Codificar tres funciones:
// Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// Una función procesamiento(valor), donde se transforme la entrada.
// Una función salida(valor), la cual mostrará el resultado por alerta.
// Luego, invocar las tres funciones.

// alert("Ejercicio 1")
// console.log("Ejercicio 1")

// let valor = ""

// function entrada() {
//     valor = prompt("Ingrese un valor: ")
//     console.log("Valor ingresado: " + valor + ".")
//     return valor
// }

// function procesamiento(valor) {
//     valor = parseFloat(valor)
//     return valor
// }

// function salida(valor) {
//     alert("Este es tu valor ingresado: " + valor + ".")
//     console.log(valor + ".")
// }

// valor = entrada();
// valor = procesamiento(valor)
// salida(valor)

//Actividad 2 Clase 4 - Codificar una función que reciba un número decimal por parámetro, y
//lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.


// alert("Ejercicio 2")
// console.log("Ejercicio 2")

// let numero

// function decimal(){
//     numero = parseFloat(prompt("Ingrese un numero decimal: ")) 
//     numero = Math.round(numero)
//     console.log("Valor redondeado: " + numero + ".")
//     return numero
// }

// for(let i=0;i<5;i++){
//     decimal()
// }

//Actividad 3 Clase 4 - Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje).
// En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.


// alert("Ejercicio 3")
// console.log("Ejercicio 3")

// let precio = ""
// let porcentaje = ""
// let total = ""

// function impuesto(precio, porcentaje) {
//     total = precio + (precio * (porcentaje / 100))
//     return total
// }

// for (let i = 0; i < 5; i++) {
//     precio = parseFloat(prompt("Ingrese un precio: "))
//     porcentaje = parseFloat(prompt("Ingrese un porcentaje: "))
//     console.log("Valores ingresados: " + precio + " y " + porcentaje + ".")
//     impuesto(precio, porcentaje)
//     alert("Valor total devuelto: " + total + ".")
//     console.log("Valor total devuelto: " + total + ".")    
// }

//Actividad 4 Clase 4 - Codificar dos funciones:
// Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos,
//y lo retorna en su equivalente en dólares.
// Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y
//lo retorna en su equivalente en pesos argentinos.
// Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


alert("Ejercicio 4")
console.log("Ejercicio 4")



//Actividad 5 Clase 4 - Codificar una función con la siguiente cabecera: validacion(cadena).
//En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía.
//Caso contrario, se retorna false. Luego invocar la función de forma iterativa,
// hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

alert("Ejercicio 5")
console.log("Ejercicio 5")