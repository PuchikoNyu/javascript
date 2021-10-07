// 1

alert("Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.")

let persona = prompt("Ingrese su nombre completo")

let edad = parseFloat(prompt("ingrese su edad"))

console.log("presente: " + persona + " " + edad)

for (let x = 1; x <= 5; x++) {
    let total = edad + x
    alert(total)
    console.log(total)
}

// 2

alert("Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa 'ESC'.")

while (persona != "ESC") {
    alert("Bienvenida/o " + persona)
    persona = prompt("ingrese su nombre:")
    console.log(persona)
}

// 3

alert("Pedir un número por prompt, repetir la salida del mensaje 'Hola' la cantidad de veces ingresada.")

let numero = parseFloat(prompt("Ingrese un valor del 1 al 5:"))

while (numero < 1 || numero > 5) {
    numero = parseFloat(prompt("Numero incorrecto, ingrese nuevamente:"))
    console.log("Ingresó: " + numero)
}

for (let x = 1; x <= numero; x++) {
    alert("Hola")
    console.log("Hola")
}