const contenedorProductos = document.getElementById('contProd')

const mostrarProductos = (array) => {
    $('#contProd').html('')
    for (let producto of array) {
    $('#contProd').append(`<div id="prod${producto.id}">
    <img src=${producto.img} alt="${producto.nombre}" class="img-thumbnail">
    <h3>${producto.nombre}</h3>
    <p>Tipo: ${producto.tipo}</p>
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button onclick="agregarAlCarrito(${producto.id})" class="agregar-carrito rounded">Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>`)
$(`#prod${producto.id}`).addClass('col-3 my-3 py-3 mx-3 border rounded d-flex flex-column justify-content-between')
    }
}
mostrarProductos(stockProductos)