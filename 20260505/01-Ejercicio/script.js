console.log("!Cerebro conectado con defer¡");
function CalcularPrecioFinal(){

    // 1. ATRAPAMOS los datos de HTML
    // Usamos 'let' porque son valores que el usuario puede cambiar
    // cada vez que teclea

    let precio = Number(document.getElementById('precio').value);
    let porcentaje = Number(document.getElementById('descuento').value);
    
    // 2.LOGICA (Matematica )
    // Usamos 'const' porque, una vez calculados, estos resultados
    // matematicos no van a cambiar en ese evento

    const decuento_en_euros = precio * (porcentaje / 100);
    const precio_final = precio - decuento_en_euros;

    // 3. INYECTAMOS el resultado en el HTML
    // todFixed(2) obliga siempre que haya 2 decimales (ej:80:00 €)
    document.getElementById('texto-resultado').textContent = precio_final.toFixed(2) + " €";
}