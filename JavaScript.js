// Esperamos a que el HTML esté completamente cargado para evitar conflictos de lectura
document.addEventListener("DOMContentLoaded", function() {

    // Arreglo con los tres colores requeridos por la rúbrica
    const colores = ["green", "blue", "red"];

    // Seleccionamos específicamente los h5 dentro del contenedor de las tarjetas del abecedario
    const titulosLetras = document.querySelectorAll(".letra-card h5");

    // Función para obtener un color aleatorio de la lista
    function obtenerColorAleatorio() {
        const indiceRandom = Math.floor(Math.random() * colores.length);
        return colores[indiceRandom];
    }

    // Asignamos el evento de clic a cada h5 de manera limpia y segura
    titulosLetras.forEach(function(titulo) {
        // Añadimos estilo de cursor para indicar visualmente que es un elemento cliqueable
        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", function() {
            // Aplica el color de fondo/texto de forma repetible e instantánea
            titulo.style.color = obtenerColorAleatorio();
        });
    });

});