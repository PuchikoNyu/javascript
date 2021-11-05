const productos = []
const carrito = []
//////

class Productos {
    constructor(id, tipo, nombre, color, precio, stock,img) {
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.color = color
        this.precio = precio
        this.stock = stock
        this.img = img

        this.verStock = (cantidad) => {
            cantidad = parseInt(cantidad)
            if (this.stock >= cantidad) {
                console.log("El usuario desea comprar: " + cantidad + " unidades de: " + this.tipo + " tipo " + this.nombre + " color " + this.color + ".")
            } else {
                alert("La solicitud supera el stock disponible.")
                console.log("La solicitud del usuario supera el stock disponible.")
            }
        }
        this.restarStock = (cantidadResta) => {
            cantidadResta = parseInt(cantidadResta)
            if (this.stock >= cantidadResta) {
                this.stock -= cantidadResta
                console.log("STOCK DISPONIBLE")
            } else {
                alert("STOCK INSUFICIENTE")
                console.log("STOCK INSUFICIENTE")
            }
        }
    }
}

//////

productos.push(new Productos(0, "remera", "musculosa", "violeta", 600, 20,'../media/musculosa.jpeg'))
productos.push(new Productos(1, "remera", "manga corta", "verde", 600, 20,'../media/manga_corta.jpeg'))
productos.push(new Productos(3, "pantalon", "short", "negro", 700, 20,'../media/short.jpeg'))
productos.push(new Productos(4, "pantalon", "calza", "negro", 1000, 20,'../media/calza.jpeg'))
productos.push(new Productos(5, "botella", "caramañola plastico", "transparente", 500, 20,'../media/caramanola_plastico.jpeg'))
productos.push(new Productos(6, "botella", "caramañola aluminio", "aluminio", 700, 20,'../media/caramanola_aluminio.jpeg'))
productos.push(new Productos(7, "estuche", "porta celular", "gris", 300, 10,'../media/porta_celular.jpeg'))

//////

let iva = 1.21
let suma = 0
let total = 0

const botonProductos = document.querySelectorAll('input');
const div = document.querySelector('div#sumaProd')

botonProductos.forEach(e => {
    e.addEventListener('click', (ev) => {
        ev.preventDefault()
        seleccionSuma(e.value)
        let subtotal = carrito.reduce((acc, carr) => acc + carr.precio,0)
        sessionStorage.setItem('subtotal', JSON.stringify(subtotal))
        const prodSumados = document.createElement('div')
        div.innerHTML=""
        prodSumados.innerHTML=`<h1>El precio total de los productos seleccionados es de $${subtotal}</h1>`
        div.append(prodSumados)
    });
});

const seleccionSuma = (prodElegido => {
    const unidades = 1
    productos.forEach(item => {
        if (prodElegido === item.nombre && unidades <= item.stock) {
            item.restarStock(unidades)
            // let total = multiplicar(item.precio, unidades)
            console.log(`Precio de item agregado: $${item.precio}`)
            carrito.push(item)
            console.log(item.stock)
            // console.log(carrito)
        }
    })
})

const muestra = document.querySelector('div#muestraProd')

productos.forEach( (prod) => {
    const creaElem = document.createElement('div')
    creaElem.classList.add('creaElem')
    creaElem.innerHTML=`
    <h2 class="caps">${prod.nombre}</h2>
    <img src="${prod.img}" alt="${prod.nombre}">
    <p>Precio: $${prod.precio}</p>
    <p>Stock diponible: ${prod.stock}</p>
    `
    muestra.append(creaElem)
})