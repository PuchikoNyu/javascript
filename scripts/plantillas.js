let stockProductos = []

const contenedorProductos = document.getElementById('contProd')
const cargarJSON = async () => {
    const stock = await fetch('../stock.json')
    stockData = await stock.json()
    stockProductos = stockData
    mostrarProductos(stockProductos)
}

const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ""
    array.forEach((producto) => {
        const div = document.createElement('div')
        div.className = "col-3 my-3 py-3 mx-3 border rounded d-flex flex-column justify-content-between"
        div.innerHTML = `<img src = ${producto.img} alt = "${producto.nombre}" class = "img-thumbnail">
        <h3> ${producto.nombre} </h3>
        <p> Tipo: ${producto.tipo} </p>
        <p class = "precioProducto"> Precio: $${producto.precio} </p>
        <button onclick = "agregarAlCarrito (${producto.id})" class = "agregar-carrito redondeado"> Agregar <i class = "fas fa-shopping-cart"> </i> </button>
`
        contenedorProductos.append(div)
    })
}

cargarJSON()