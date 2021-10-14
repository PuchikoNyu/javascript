//Actividad 1 Clase 2 - Solicitar al usuario un (1) nombre.
//Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
//Caso contrario, la salida será “Yo no fui”.

console.log("Ejercicio 1")
alert("Ejercicio 1")

let nombre = prompt("'Luna', culpable! Ingrese su nombre:")
let nombreAsignado = "Luna"

if (nombre === "") {
    alert("No ingresó ningún nombre.")
    console.log("No se ingresó ningún nombre.")    
} else if  (nombre == nombreAsignado){
    alert("Fui yo.")
    console.log("Se ingresó el valor culpable: " + nombreAsignado + ".")
} else {
    alert("Yo no fuí.")
    console.log("Se ingresó un valor no culpable: " + nombre + ".")
}

//Actividad 2 Clase 2 - Solicitar al usuario una (1) tecla.
//Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

console.log("Ejercicio 2")
alert("Ejercicio 2")

let tecla = prompt("Adiviná en cuál de una de las ultimas 3 letras del abecedario (x/X/y/Y/z/Z) estoy pensando:")

if (tecla === "") {
    alert("No ingresó nada.")
    console.log("No se ingresó nada.")
} else if (tecla == "y" || tecla == "Y") {
    alert("Correcto.")
    console.log("Se ingresó correctamente " + tecla + ".")
} else {
    alert("Error.")
    console.log("Se ingresó erroneamente " + tecla + ".")
}

//Actividad 3 Clase 2 - Solicitar al usuario un (1) un número.
//Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
//“Elegiste a Homero” si es 1.
//“Elegiste a Marge” si es 2.
//“Elegiste a Bart” si es 3.
//“Elegiste a Lisa” si es 4.


console.log("Ejercicio 3")
alert("Ejercicio 3")

let unNumero = parseFloat(prompt("Ingrese un dígito:"))

if (unNumero === "") {
    alert("No ingresó nada.")
    console.log("No se ingresó nada.")
} else if (unNumero == 1) {
    alert("Elegiste a Homero.")
    console.log("Se ha elegido a Homero.")
} else if (unNumero == 2) {
    alert("Elegiste a Marge.")
    console.log("Se ha elegido a Marge.")
} else if (unNumero == 3) {
    alert("Elegiste a Bart.")
    console.log("Se ha elegido a Bart.")
} else if (unNumero == 4) {
    alert("Elegiste a Lisa.")
    console.log("Se ha elegido a Lisa.")
} else {
    alert("No elegiste correctamente.")
    console.log("No se eligió correctamente.")
}

//Actividad 4 Clase 2 - Solicitar al usuario un (1) número.
//Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
//“Presupuesto bajo” si está entre 0 y 1000.
//“Presupuesto medio” si está entre 1001 y 3000.
//“Presupuesto alto” si es  mayor que 3000.

console.log("Ejercicio 4")
alert("Ejercicio 4")

let number = parseFloat(prompt("Ingrese un presupuesto:"))

if (tecla === "") {
    alert("No ingresó nada.")
    console.log("No se ingresó nada.")
} else if (number >= 0 && number <= 1000) {
    alert("Presupuesto bajo.")
    console.log("Presupuesto bajo, se ingresó: $" + number + ".")
} else if (number >= 1001 && number <= 3000){
    alert("Presupuesto medio.")
    console.log("Presupuesto medio, se ingresó: $" + number + ".")
} else {
    alert("Presupuesto alto.")
    console.log("Presupuesto alto, se ingresó: $" + number + ".")
}

//Actividad 5 Clase 2 - Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

console.log("Ejercicio 5")
alert("Ejercicio 5")

let producto1 = prompt("Ingrese el primer producto del almacen que desea comprar: ")
let producto2 = prompt("Ingrese el segundo producto del almacen que desea comprar: ")
let producto3 = prompt("Ingrese el tercer producto del almacen que desea comprar: ")
let producto4 = prompt("Ingrese el cuarto producto del almacen que desea comprar: ")

if (producto1, producto2, producto3, producto4 === ""){
    alert("Error: Es necesario cargar todos los productos.")
    console.log("Error: No se cargaron todos los productos.")
} else {
    alert("Su lista de mercado esta compuesta por: " + producto1 + ", " + producto2 + ", " + producto3 + " y " + producto4 + ".")
    console.log("La lista de mercado cargada esta compuesta por: " + producto1 + ", " + producto2 + ", " + producto3 + " y " + producto4 + ".")
}