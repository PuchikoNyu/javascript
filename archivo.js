//Actividad 1 Clase 3 - Solicitar al usuario un (1) un número y un (1) texto.
//Efectuar una salida por alerta con el mensaje ingresado por cada repetición, 
//hasta alcanzar el valor señalado por el usuario.

alert("Ejercicio 1.")
console.log("Ejercicio 1.")

let numero = parseFloat(prompt("Ingrese un número del 1 al 20: "))
console.log("Número ingresado: " + numero + ".")

while (numero < 1 || numero > 20 || numero == "") {
    alert("Error.")
    numero = parseFloat(prompt("Ingrese nuevamente un número del 1 al 20: "))
    console.log("Número ingresado: " + numero + ".")
}

let texto = prompt("Ingrese un texto de no más de 5 palabas: ")
console.log("El texto ingresado es: " + texto + ".")

while (texto == "") {
    alert("Error.")
    texto = (prompt("Ingrese nuevamente un texto de no más de 5 palabras: "))
    console.log("El texto ingresado es: " + texto + ".")
}

for (i = 1; i <= numero; i++) {
    alert(texto + " " + i)
    console.log(texto + " " + i)
}

//Actividad 2 Clase 3 - Solicitar al usuario un (1) un número.
//Emplear este valor para determinar la cantidad de repeticiones,
//y efectuar una salida por alerta con el mensaje “lado” en cada repetición.
//Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

alert("Ejercicio 2.")
console.log("Ejercicio 2.")

let valor = parseFloat(prompt("Ingresar un número del 1 al 30: "))
console.log("Número ingresado: " + valor + ".")

while (valor < 1 || valor > 30 || valor == "") {
    alert("Error.")
    valor = parseFloat(prompt("Ingrese un número del 1 al 30: "))
    console.log("Número ingresado: " + valor + ".")
}

for (i = 1; i < valor; i++) {
    if (i > 4) {
        break
    }
    alert("lado")
    console.log("lado" + i + ".")
}

//Actividad 3 Clase 3 - Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
//Luego realizar un única salida por alerta, con el listado de alumnos registrados.

alert("Ejercicio 3.")
console.log("Ejercicio 3.")

let nombre = ""

for (i = 0; i < 10; i++) {
    nombre += prompt("Ingrese el nombre de un alumno: ") + " "
    console.log("Alumno ingresado: " + nombre + ".")
}

alert("Listado de nombres: " + nombre)

//Actividad 4 Clase 3 - Solicitar al usuario la carga de nombres de forma consecutiva, hasta que se ingrese “Voldemort”.
//Luego realizar un única salida por alerta, con todos los nombres ingresados.

alert("Ejercicio 4.")
console.log("Ejercicio 4.")

let sumaNom = ""
let nombres = ""

while (nombres != "Voldemort") {
    nombres = prompt("Ingrese nombres de personajes de Harry Potter: ")
    sumaNom += nombres + ", "
    console.log("Personaje ingresado: " + nombres + ".")
}

alert("Listado de personajes de Harry Potter ingresados: " + sumaNom + ".")
console.log("Listado de personajes de Harry Potter ingresados: " + sumaNom + ".")

//Actividad 5 Clase 3 - Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”.
//Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
//“Tomate” si es 1.
//“Papa” si es 2.
//“Carne” si es 3.
//“Pollo” si es 4.

alert("Ejercicio 5.")
console.log("Ejercicio 5.")

let x = prompt("Ingrese un valor a X entre 1 y 10: ")
console.log("Valor ingresado a X: " + x + ".")

while (x != "ESC") {
    switch (x) {
        case "1":
            alert("Tomate")
            break;
        case "2":
            alert("Papa")
            break;
        case "3":
            alert("Carne")
            break;
        case "4":
            alert("Pollo")
            break;
        default:
            alert("Error.")
            break;
    }
    x = prompt("Ingrese un valor a X entre 1 y 10: ")
    console.log("Valor ingresado a X: " + x + ".")
}