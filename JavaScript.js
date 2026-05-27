const colores = ["green", "red", "blue"];
const titulos = document.querySelectorAll("h5");
function colorAleatorio() {
    let numeroRandom = Math.floor(Math.random() * colores.length);

    return colores[numeroRandom];
}

titulos.forEach(function(titulo) {

    titulo.addEventListener("click", function() {

        titulo.style.color = colorAleatorio();

    });

});