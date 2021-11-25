// const filtroProductos = document.getElementById('filtroProductos')

const filtrarProductos = () => {
    // const value = filtroProductos.value
    const value = $('#filtroProductos').val()

    if (value === "all") {
        mostrarProductos(stockProductos)
    } else {
        const filtrado = stockProductos.filter((prod) => prod.categoria === value)
        mostrarProductos(filtrado)
    }

}


$('#filtroProductos').on('change', () => filtrarProductos())

/* filtroProductos.addEventListener('change', () => {
    filtrarProductos()
}) */