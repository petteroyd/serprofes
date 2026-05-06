function comprobar_numero(){
    // 1.- Atrapamos el número usando let
    let numero = Number(document.getElementById('numero_input').value);
    let etiqueta = document.getElementById('mensaje_salida');

    // 2.- Tomamos la decisión con IF / ELSE
    if(numero >= 5) {
        // si el resto de la division entre 2 es 0 ...
        etiqueta.textContent = "Aprobaste con un " + numero;
        etiqueta.style.color = "green";
    }
    else{
        // Si no...
        etiqueta.textContent = "Suspendiste con un " + numero;
        etiqueta.style.color = "red";
    }

}