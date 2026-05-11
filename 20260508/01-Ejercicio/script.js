// GENERAR NUMERO ALEATORIO
// Math.random() genera número aleatorio entre 0 y 1
// * 10 = 0 y 9
// + 1 = 1 y 10
// Math.floor elimina los decimales
let numero_secreto = Math.floor(Math.random() * 10) + 1;

// Variables del juego
let vidas = 3;

// FUNCION PRINCIPAL

function comprobar_numero() {
    // Captura el número que escribe el usario 
    let intento = Number(
        document.getElementById("input_numero").value
    );
    // Captura el párrafo donde mostramos mesajes
    let etiqueta =
        document.getElementById("mensaje_salida");
    // Captura el texto de vida 
    let texto_vidas =
        document.getElementById("texto_vidas");

    if (intento === numero_secreto) {
        etiqueta.textContent =
            "¡HAS GANADO! 🍀 El número era " + numero_secreto;
        etiqueta.style.color = "green";
    } else {
        // Restamos vidas
        vidas--;
        // Actualizar el texto de vidas en la pantalla
        texto_vidas.textContent =
            "Vidas: " + vidas + " ❤️";

        // **PISTAS**
        if (intento < numero_secreto) {
            etiqueta.textContent =
                "¡Fallo! El número es MAYOR ⬆️"
        } else {
            etiqueta.textContent =
                "¡Fallo! El número es MENOR ⬇️"
        }
        etiqueta.style.color = "orange";

        // GAME OVER
        if (vidas === 0) {
            etiqueta.textContent =
                "😵 GAME OVER. El número era " + numero_secreto;
            etiqueta.style.color = "red";
            // Desactivar el botón
            document.getElementById("btn_jugar").disabled = true;
        }
    }
}
