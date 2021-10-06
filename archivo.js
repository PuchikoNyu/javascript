//SOLICITUD DE NOMBRE Y APELLIDO + SALUDO

let nombre = prompt("Ingrese su nombre");

let apellido = prompt("Ingrese su apellido");

alert("Hola," + " " + nombre + " " + apellido);

let nombreCompleto = nombre + " " + apellido;

console.log("Hola! " + nombreCompleto);

//SOLICITUD DE NUMEROS

const intereses = 0.55;

let monto = parseFloat(prompt("Ingrese el monto del prestamo que desea solicitar a pagar en 12 cuotas:"));

alert("Usted está solicitando un Prestamos por el monto de: $" +  monto + " a pagar en 12 cuotas.");

let total = monto + (monto * intereses);

let valorCuota = total / 12;

valorCuota = valorCuota.toFixed(2);

alert("El valor total a pagar es de: $" + total + ", abonando por mes una cuota de: $" + valorCuota);

console.log("El cliente solicitó un Prestamo por un valor total a pagar de: $" + total + ", abonando por mes una cuota de: $" + valorCuota)