function enviarPrompt(event){
    // Evitamos que el form recargue la página
    event.preventDefault();

    // 1.- Capturar el texto
    let mensaje = document.getElementById('mensaje-input').value.trim();
    
    // 2.- Condicionales
    if (mensaje === ""){
        alert("⚠️ ¡Error! Escribe algo primero ")
    }   else{
        alert("Mensaje recibido:\n" + mensaje);
        // 3.- Limpiar imput
        document.getElementById("mensaje-input").value="";
    }
}