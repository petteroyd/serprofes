function comprobar_numero(){
    // 1.- Atrapamos el número usando let
    let numero = Number(document.getElementById('numero_input').value);
    let etiqueta = document.getElementById('mensaje_salida');

    // 2.- Tomamos la decisión con IF / ELSE
    if(numero % 2 === 0) {
        // si el resto de la division entre 2 es 0 ...
        etiqueta.textContent = "El numero " + numero + " es PAR";
        etiqueta.style.color = "green";
    }
    else{
        // Si no...
        etiqueta.textContent = "El número " + numero + " es IMPAR";
        etiqueta.style.color = "red";
    }
}