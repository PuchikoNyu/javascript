const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado")

const filtrar = () => {

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for (let producto of stockProductos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <li class="my-2">${producto.nombre} - Valor: $${producto.precio}</li>
            `
        }
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
    <li> Producto no encontrado...</li>
    `
    }

}

boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);

filtrar();