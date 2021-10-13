//Actividad 1 Clase 1 - Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

let nombre = prompt("Ingresa el nombre de Homero Simpson de 39 años:")
console.log(nombre)

let apellido = prompt("Ingresa el apellido de Homero Simpson de 39 años:")
console.log(apellido)

let edad = parseFloat(prompt("ingresa la edad de Homero Simpson de 39 años:"))
console.log(edad + " años")

//Actividad 2 Clase 1 - Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

const ciudad1 = "Buenos Aires"
const ciudad2 = "Cordoba"
const ciudad3 = "Rosario"
const ciudad4 = "Mar del Plata"
const ciudad5 = "San Miguel de Tucumán"

alert("Las cinco ciudades más pobladas de Argentina son: " + ciudad1 + ", " + ciudad2 + ", " + ciudad3 + ", " + ciudad4 + " y " + ciudad5)
console.log("Las cinco ciudades más pobladas de Argentina son: " + ciudad1 + ", " + ciudad2 + ", " + ciudad3 + ", " + ciudad4 + " y " + ciudad5)

//Actividad 3 Clase 1 - Declarar variables para representar la información de un carnet de conducir.
//Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

let name = prompt("Ingrese su nombre:")
let surname = prompt("ingrese su apellido:")
let birthdate = prompt("Ingrese su fecha de nacimiento en formato DD/MM/AAAA:")
let nationality = prompt("Ingrese su nacionalidad:")
let adress = prompt("Ingrese su domicilio actual:")
let ht = prompt("Ingrese su estatura en cm:") + " cm"
let wt = prompt("Ingrese su peso:") + "kg"
let number = "B47U89RE243"

alert("Licencia de conducir: " + number + " " + "Otorgada a:" + name + " " + surname + " " + "Fecha de nacimiento:" + birthdate + " " + "Nacionalidad:" + nationality + " " + "Domicilio:" + adress + " " + "Peso:" + wt + " " + "Altura:" + ht + ".")
console.log("Licencia de conducir: " + number + " " + "Otorgada a:" + name + " " + surname + " " + "Fecha de nacimiento:" + birthdate + " " + "Nacionalidad:" + nationality + " " + "Domicilio:" + adress + " " + "Peso:" + wt + " " + "Altura:" + ht + ".")

//Actividad 4 Clase 1 - Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

let nombre1 = prompt("Ingresar primer miembro de la familia Simpson: ")
let nombre2 = prompt("Ingresar segundo miembro de la familia Simpson: ")
let nombre3 = prompt("Ingresar tercer miembro de la familia Simpson: ")
let nombre4 = prompt("Ingresar cuarto miembro de la familia Simpson: ")
let nombre5 = prompt("Ingresar quinto miembro de la familia Simpson: ")

alert("Usted ingresó: " + nombre1 + ", " + nombre2 + ", " + nombre3 + ", " + nombre4 + " y " + nombre5 + ".")
console.log("El usuario ingresó: " + nombre1 + ", " + nombre2 + ", " + nombre3 + ", " + nombre4 + " y " + nombre5 + ".")

//Actividad 5 Clase 1 - Solicitar al usuario uno o más precios.
//Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

let precio1 = parseFloat(prompt("Ingresar primer precio a pagar:"))
let precio2 = parseFloat(prompt("Ingresar segundo precio a pagar:"))
let precio3 = parseFloat(prompt("Ingresar tercer precio a pagar:"))

let descuento1 = parseFloat(0.90)
let descuento2 = parseFloat(0.80)
let descuento3 = parseFloat(0.70)

let uno = precio1 * descuento1
let dos = precio2 * descuento2
let tres = precio3 * descuento3

alert("Tus precios a pagar tienen descuentos diferentes: El primer precio a pagar con un %10: " + uno + ", el segundo precio a pagar con un %20: " + dos + ", y el tercer precio a pagar con un %30: " + tres + ".")
console.log("Los precios a pagar tienen descuentos diferentes: El primer precio a pagar con un %10: " + uno + ", el segundo precio a pagar con un %20: " + dos + ", y el tercer precio a pagar con un %30: " + tres + ".")