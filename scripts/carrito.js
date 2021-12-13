const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const botonVaciar = document.getElementById('vaciar-carrito')

let carrito = []

if (localStorage.getItem('compra') != undefined) {
    carrito = JSON.parse(localStorage.getItem('compra'))
}

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})
const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)

    const found = carrito.find((prod) => prod.id === prodId)

    if(!found){
        const {id, nombre, precio} = item
        const itemParaCarrito = {
            id,
            nombre,
            precio,
            cantidad: 1
        }
        carrito.push(itemParaCarrito)
    } else {
        found.cantidad++
    }   

    actualizarCarrito()

    //TOASTIFY

    Toastify({
        text: `${item.nombre} \n Artículo agregado correctamente`,
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#fafafa",
            border: "solid 1px #000",
            color: "#000",
            "border-radius": "3px",
            "text-align": "center",
        }
    }).showToast();

}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    const compra = JSON.stringify(carrito)
    localStorage.setItem('compra', compra)

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = "productoEnCarrito text-dark"
        div.innerHTML = `
                    <p class= "col-6">${prod.nombre}</p>
                    <p class= "col-2">${prod.cantidad} u.</p>
                    <p class= "col-3">Precio: $${prod.precio}</p>
                    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar rounded col-1"><i class="fas fa-trash-alt"></i></button>
                `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0)

}

actualizarCarrito()