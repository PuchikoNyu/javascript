// const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
// const botonAbrir = document.getElementById('boton-carrito')
// const botonCerrar = document.getElementById('carritoCerrar')
// const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

$('#boton-carrito').on('click', () => {
    $('.modal-contenedor').toggleClass('modal-active')
})

/* botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
}) */

$('#carritoCerrar').on('click', () => {
    $('.modal-contenedor').toggleClass('modal-active')
})
/* botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
 */

$('.modal-contenedor').on('click', () => {
    $('#carritoCerrar').trigger('click')
})

/* 
contenedorModal.addEventListener('click', () => {
    botonCerrar.click()
}) */

$('.modal-carrito').on('click', (e) => {
    e.stopPropagation()
})

/* modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
}) */