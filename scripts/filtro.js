const filtroProductos = document.getElementById('filtroProductos')

const filtrarProductos = () => {
    const value = filtroProductos.value

    if (value === "all") {
        mostrarProductos(stockProductos)
    } else {
        const filtrado = stockProductos.filter((prod) => prod.categoria === value)
        mostrarProductos(filtrado)
    }

}



filtroProductos.addEventListener('change', () => {
    filtrarProductos()
})