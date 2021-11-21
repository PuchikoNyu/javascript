class Producto {
    constructor(id, categoria, subcategoria, variedad, tipo, nombre, precio, img) {
        this.id = id
        this.categoria = categoria
        this.subcategoria = subcategoria
        this.variedad = variedad
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
}
const stockProductos = []
stockProductos.push(new Producto(1, "facial", "aguas", "aplicador", "rosas", "Agua de Rosas", 700, './media/aRosas.jpeg'))
stockProductos.push(new Producto(2, "facial", "aguas", "aplicador", "hamamelis", "Agua de Hamamelis", 750, './media/aHamamelis.jpeg'))
stockProductos.push(new Producto(3, "facial", "aguas", "aplicador", "azahar", "Agua de Azahar", 700, './media/aAzahar.jpeg'))
stockProductos.push(new Producto(4, "capilar", "shampoo", "solido", "seco", "Shampoo Sólido para Cabello Seco", 900, './media/seco.jpeg'))
stockProductos.push(new Producto(5, "capilar", "shampoo", "solido", "fortalecedor", "Shampoo Sólido Fortaleceer", 900, './media/fortalecedor.jpeg'))
stockProductos.push(new Producto(6, "capilar", "shampoo", "solido", "equilibrado", "Shampoo Sólido Equilibrado", 900, './media/equilibrado.jpeg'))
stockProductos.push(new Producto(7, "capilar", "shampoo", "solido", "graso", "Shampoo Sólido para Cabello Graso y Anti-Caspa", 900, './media/graso.jpeg'))
stockProductos.push(new Producto(8, "capilar", "acondicionador", "solido", "acondicionador", "Acondicionador Sólido", 1000, './media/acondicionador.jpeg'))
stockProductos.push(new Producto(9, "capilar", "serum", "aplicador", "serum", "Serum Capilar", 1100, './media/serum.jpeg'))
stockProductos.push(new Producto(10, "corporal", "crema", "manos", "nutritiva", "Crema para Manos Nutritiva", 700, './media/creMan.jpeg'))
stockProductos.push(new Producto(11, "corporal", "crema", "manos", "extra nutritiva", "Crema para Manos Extra-Nutritiva", 750, './media/creMan.jpeg'))
stockProductos.push(new Producto(12, "corporal", "crema", "cuerpo", "nutritiva", "Crema Corporal Nutritiva", 1250, './media/creCor.jpeg'))
stockProductos.push(new Producto(13, "corporal", "crema", "cuerpo", "extra nutritiva", "Crema Corporal Extra-Nutritiva", 1350, './media/creCorN.jpeg'))
stockProductos.push(new Producto(14, "corporal", "jabon", "exfoliante", "mentolado", "Jabón Exfoliante Mentolado", 650, './media/jabonExf.jpeg'))
stockProductos.push(new Producto(14, "corporal", "jabon", "esenciales", "tilo", "Jabón Esencial de Tilo", 400, './media/jabones.jpeg'))
stockProductos.push(new Producto(15, "corporal", "jabon", "esenciales", "oleo 31", "Jabón Esencial de Oleo 31", 400, './media/jabones.jpeg'))
stockProductos.push(new Producto(16, "corporal", "jabon", "esenciales", "coco", "Jabón Esencial de Coco", 400, './media/jabones.jpeg'))
stockProductos.push(new Producto(17, "corporal", "jabon", "especiales", "calendula", "Jabón Esencial de Caléndula", 550, './media/jabCal.jpeg'))
stockProductos.push(new Producto(18, "corporal", "jabon", "especiales", "jazmin", "Jabón Esencial de Jazmín", 5500, './media/jabJaz.jpeg'))
stockProductos.push(new Producto(19, "corporal", "pasta dental", "vidrio", "eucalipto", "Pasta dental de Eucalipto", 550, './media/pastaDental.jpeg'))
stockProductos.push(new Producto(20, "corporal", "pasta dental", "vidrio", "citrico", "Pasta dental Cítrica", 550, './media/pastaDental.jpeg'))
stockProductos.push(new Producto(21, "corporal", "desodorante", "vidrio", "mix foral", "Desodorante Mix Floral", 600, './media/desodorante.jpeg'))
stockProductos.push(new Producto(22, "corporal", "desodorante", "vidrio", "lavanda", "Desodorante Lavanda", 600, './media/desodorante.jpeg'))
stockProductos.push(new Producto(23, "accesorios", "peines", "madera", "simple", "Peine para Cabello Varios Modelos Simples", 650, './media/peineMadera.jpeg'))
stockProductos.push(new Producto(24, "accesorios", "peines", "madera", "cabello seco", "Peine para Cabello Seco", 900, './media/peineSeco.jpeg'))
stockProductos.push(new Producto(25, "accesorios", "peines", "madera", "cabello humedo", "Peine para Cabello Húmedo", 1000, './media/peineHumedo.jpeg'))
stockProductos.push(new Producto(26, "accesorios", "esponja", "vegetal", "exfoliante", "Esponja Vegetal Exfoliante", 450, './media/espVeg.jpeg'))
stockProductos.push(new Producto(27, "accesorios", "cepillo", "madera", "exfoliante", "Cepillo de cuerpo Exfoliante", 800, './media/cepExf.jpeg'))
stockProductos.push(new Producto(28, "accesorios", "cepillo", "bambu", "dental", "Cepillo de dientes", 400, './media/cepDental.jpeg'))
stockProductos.push(new Producto(29, "accesorios", "porta cepillo", "bambu", "doble", "Porta Cepillo de dientes Doble", 800, './media/portaCep.jpeg'))
stockProductos.push(new Producto(30, "accesorios", "porta cepillo", "bambu", "portable", "Estuche para Cepillo de Dientes", 900, './media/estucheCep.jpeg'))
stockProductos.push(new Producto(31, "accesorios", "jabonera", "bambu", "doble", "Jabonera Doble", 700, './media/jabonera.jpeg'))
stockProductos.push(new Producto(32, "otros", "almohadilla", "semillas", "chica", "Almohadilla de Semillas Chica", 1100, './media/almChica.jpeg'))
stockProductos.push(new Producto(33, "otros", "almohadilla", "semillas", "grande", "Almohadilla de Semillas Grande", 1550, './media/almGrande.jpeg'))

console.log(stockProductos)