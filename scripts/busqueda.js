const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
// const resultado = document.querySelector("#resultado") NO VA

const filtrar = () => {

    contenedorProductos.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for (let producto of stockProductos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            const div = document.createElement('div')
            div.className = "col-3 my-3 py-3 mx-3 border rounded d-flex flex-column justify-content-between"
            div.innerHTML = `
                    <img src=${producto.img} alt="${producto.nombre}" class="img-thumbnail">
                    <h3>${producto.nombre}</h3>
                    <p>Tipo: ${producto.tipo}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="agregar-carrito rounded">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
            contenedorProductos.append(div)
        }
    }

    if (contenedorProductos.innerHTML === '') {
        contenedorProductos.innerHTML += `
    <li> Producto no encontrado...</li>
    `
    }

}

boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);

filtrar();