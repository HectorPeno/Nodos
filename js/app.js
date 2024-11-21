// Función para mostrar la imagen del plato seleccionado
function mostrarImagen(selectId, imgId) {
    const selectElement = document.getElementById(selectId);
    const imgElement = document.getElementById(imgId);
    
    // Obtener el valor seleccionado
    const selectedValue = selectElement.value;

    // Cambiar la imagen según el valor seleccionado
    if (selectedValue) {
        imgElement.src = `images/${selectElement.options[selectElement.selectedIndex].text.split(' ')[0].toLowerCase()}.jpg`; // Asegúrate de que las imágenes estén en la carpeta 'images'
        imgElement.alt = selectElement.options[selectElement.selectedIndex].text; // Actualiza el texto alternativo
        imgElement.style.display = 'block'; // Muestra la imagen
    } else {
        imgElement.src = ''; // Si no hay selección, no muestra imagen
        imgElement.style.display = 'none'; // Oculta la imagen
    }
}

// Función para calcular el total
function calcularTotal() {
    const primerPlato = parseFloat(document.getElementById('primerPlato').value) || 0;
    const segundoPlato = parseFloat(document.getElementById('segundoPlato').value) || 0;
    const postre = parseFloat(document.getElementById('postre').value) || 0;
    const aplicarDescuento = document.getElementById('descuento').checked;

    // Sumar los precios
    let total = primerPlato + segundoPlato + postre;

    // Aplicar descuento del 10% si está seleccionado
    if (aplicarDescuento) {
        total *= 0.9; // 10% de descuento
    }

    // Mostrar el total en el elemento correspondiente
    document.getElementById('total').textContent = `Total: ${total.toFixed(2)}€`;
}