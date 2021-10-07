// 1

alert("Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.")

let numero = (parseFloat(prompt("Ingrese un número mayor a 1000:")))

if (numero > 1000) {
    alert("Valor Ingrasado mayor a 1000.")
    console.log("Valor ingresado: " + numero)
} else if (numero <= 1000) {
    alert("Valor Ingrasado menor o igual a 1000.")
    console.log("Valor ingresado: " + numero)
}


// 2

alert("Pedir un texto mediante prompt, y si es igual a 'Hola' mostrar un alerta por consola.")

let saludo = (prompt("Ingrese un saludo:"))

if (saludo == "Hola") {
    alert("Hola!, Bienvenido/a!")
    console.log("Saludo ingresado: " + saludo)
} else if (saludo != "Hola") {
    alert("Saludo ingresado incorrecto")
    console.log("Saludo ingresado: " + saludo)
    saludo = prompt("Ingrese un saludo nuevamente.")
}



// 3

alert("Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.")

let valor = parseFloat(prompt("Ingrese un valor entre 10 y 50:"))

if (valor > 10 && valor < 50) {
    alert("Correcto.")
    console.log("Valor correcto ingresado: " + valor)
} else if (valor <= 10 || valor >= 50) {
    alert("Incorrecto.")
    console.log("Valor incorrecto ingresado: " + valor)
}