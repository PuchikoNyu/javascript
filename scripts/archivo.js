//////

const productos = []

//////

class Productos {
    constructor(id, tipo, nombre, color, precio, stock) {
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.color = color
        this.precio = precio
        this.stock = stock

        this.verStock = (cantidad) => {
            cantidad = parseInt(cantidad)
            if (this.stock >= cantidad) {
                console.log("El usuario desea comprar: " + cantidad + " unidades de: " + this.tipo + " tipo " + this.nombre + " color " + this.color + ".")
            } else {
                alert("La solicitud supera el stock disponible.")
                console.log("La solicitud del usuario supera el stock disponible.")
            }
        }
    }
}

//////

productos.push(new Productos(0, "remera", "musculosa", "violeta", 600, 20))
productos.push(new Productos(1, "remera", "manga corta", "verde", 600, 20))
productos.push(new Productos(2, "pantalon", "bermuda", "negro", 750, 20))
productos.push(new Productos(3, "pantalon", "short", "negro", 700, 20))
productos.push(new Productos(4, "pantalon", "calza", "negro", 1000, 20))
productos.push(new Productos(5, "botella", "caramañola plastico", "transparente", 500, 20))
productos.push(new Productos(6, "botella", "caramañola aluminio", "aluminio", 700, 20))
productos.push(new Productos(7,"estuche", "porta celular", "gris", 300, 10))

//////

let iva = 1.21
let total = 0
let subtotal = 0

const multiplicar = (a, b) => a * b

//////

function unidad() {

    let unidades = parseFloat(prompt("Ingrese las unidades que desea: (0 a 5)"))

    while (unidades != "ESC") {

        if (unidades >= 0 && unidades <= 5) {
            console.log("El usuario ingreso: " + unidades + ".")
            return unidades
        } else {
            alert("Ingreso NO valido")
            console.log("El usuario realizó un ingreso erróneo de las unidades a solicitar.")
            unidades = parseFloat(prompt("ingrese nuevamente las unidades que desea: "))
        }
    }
}

//////

function resultado() {
    console.log("El usuario lleva un total (más IVA) de: $" + total + ".")
    alert("Usted lleva total sumado (más IVA): $" + total + ".")
}

//////

function seleccionSuma() {

    let total = 0
    let unidades = 0
    let suma = 0
    let ingreso = prompt("Ingrese un item por vez, respetando el orden:     1)musculosa     2)manga corta       3)bermuda       4)short      5)calza     6)caramañola plastico      7)caramañola aluminio      8)porta celular      FINALICE CON ENTER")
    console.log("El usuario ingresó: " + ingreso + ".")

    //

    productos.forEach(item => {
        if (ingreso === item.nombre) {
            unidades = unidad()
            total = multiplicar(item.precio, unidades)
            suma += total
            item.verStock(unidades)
            console.log("Total: $" + total + " por " + unidades + " de " + ingreso + ". Total por todo: $" + suma + ".")
        } else {
            alert("Ingreso NO valido")
            console.log("El usuario realizó un ingreso erróneo.")
            console.log("El usuario lleva sumado: $" + suma + ".")
        }

        ingreso = prompt("Ingrese un item por vez, respetando el orden:     1)musculosa     2)manga corta       3)bermuda       4)short      5)calza     6)caramañola plastico      7)caramañola aluminio      8)porta celular      FINALICE CON ENTER")
        console.log("El usuario ingresó: " + ingreso + ".")
    })
    console.log("El usuario sumó en total: $" + suma + ".")
    return suma
}

/////

function ordenamiento() {
    let filtro = prompt("Listar productos disponibles: ( id / nombre / precio )")

    if (filtro === "nombre") {

        const filtroNombre = productos.slice().sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1
            } else if (a.nombre < b.nombre) {
                return -1
            } else {
                return 0
            }
        })

        console.log(filtroNombre)
        alert("ORDEN CORRECTO")

    } else if (filtro === "precio") {

        const filtroPrecio = productos.slice().sort((a, b) => a.precio - b.precio)

        console.log(filtroPrecio)
        alert("ORDEN CORRECTO")

    } else if (filtro === "id") {

        const filtroOrden = productos.slice().sort((a, b) => a.id - b.id)

        console.log(filtroOrden)
        alert("ORDEN CORRECTO")

    } else {

        alert("ERROR DE INGRESO")
    }

}

/////

alert("Bienvenido!")
ordenamiento()
alert("A continuación puede seleccionar los productos que desea adquirir como complemento de la carrera: ")
subtotal = seleccionSuma()
total = multiplicar(subtotal, iva)
resultado()