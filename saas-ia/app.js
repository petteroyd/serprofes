// 1. NUESTRA BASE DE DATOS MOCK
// Array de objetos [ rol , texto ]
let historial_chat = [
    { rol: "ia", texto: "¡Hola! Soy IA Master. ¿En qué te ayudo?"},
    { rol: "usuario", texto: "Quiero aprender JavaScript"},
    { rol: "ia", texto: "¡Excelente elección! Empezaremos por los Arrays."}
];

//2. LA FUNCION PINTORA (Visual)
// Esta función recibe una lista (nuestro array) y lo dibuja en la pantalla
function pintar_chat(lista_mensajes){
    // PASO 1 = Buscamos en el HTML la etiqueta donde vamos a meter los mensajes
    let caja = document.getElementById('caja_mensajes');
    // PASO 2 = Borramos la pizarra.
    // Si no hacemos esto, cada vez que enviemos un mensajes nuevo,
    // se volverá a pintar todo el historial antiguo
    caja.innerHTML = "";
    // PASO 3: EL TRABAJADOR VIRTUAL (El bucle FOR)
    // MATENEMOS EL BUCLE FOR QUE APRENDIMOS AYER
    // Le decimos que dé tantas vueltas como mensajes haya en la lista.
    // (listaMensajes.length)
    for(let i = 0; i < lista_mensajes.length;i++){
        // PASO 4 : EL CONDICIONAL TERNARIO (Un "IF" resumido en una linea)
        // Le preguntamos: ¿El rol de este mensaje es "usuario"?
        // Si es true(?) -> usamos la clase verde("msg-usuario")
        // Si es false(:) -> usaos la clase gris ("msg-ia")
        let clase_CSS = lista_mensajes[i].rol === "usuario" ? "msg_usuario" : "msg_ia";
        // PASO 5 : INYECTAR EL HTML (Usando comillas invertidas ``)
        // Las comillas invertidas nos permiten meter variables de JS dentro del HTML
        // usando el símbolo de dólar y las llaves ${...}.
        // caja.innerHTML += significa "añade este bloque al final de lo que haya"
        caja.innerHTML +=
                             `<div class = "${clase_CSS}">
                             <b>${lista_mensajes[i].rol.toUpperCase()}:</b><br>
                             ${lista_mensajes[i].texto}</div>
                             `;
    }
    // PASO 6 : EL AUTO-SCROLL (El truco de Whatsapp)
    // Le decimos a la caja que baje su barra de desplazamiento hasta el fondo
    // Para que siempre veamos el último mensaje enviado
    caja.scrollTop = caja.scrollHeight;
}

pintar_chat(historial_chat);


function enviar_prompt(event) {
    // Evitamos que la pagina web parpadee y se recargue al enviar el formuario
    event.preventDefault();
    // Atrapamos la cajita de texto donde el usuario escribe
    let input = document.getElementById('mensaje_input');

    // Sacamos el texto que ha escrito y le quitamos los espacios en blanco
    // con .trim()
    let mensaje = input.value.trim();

    //2. Condicional

    if (mensaje === "") {
        alert("⚠️¡Error! Escribe algo primero");
        // El return expulsa a JS de la funcion para no siga leyendo
        return;
    }
    // a) Guardamos el mensaje real del usuario
    let nuevo_mensaje = { rol: "usuario", texto: mensaje};
    historial_chat.push(nuevo_mensaje);// Lo metemos al final del Array
    // b) EL TRUCO : Simulamos que la IA nos responde al instante creando otro objeto
    let respuesta_IA = { rol: "ia", texto: "Estoy procesando tu mensaje: '" + mensaje + "'"};
    historial_chat.push(respuesta_IA);

    // c) Como el array ha cambiado (Tiene dos mensajes más), obligamos a la web repintarse
    pintar_chat(historial_chat);
    // d) Limpiamos el texto que quedo escrito en el input
    input.value = "";
    input.focus();
}

function mostrar_todo(){
    pintar_chat(historial_chat);
}

// El portero (Filter)
function ver_mis_mensajes(){
    // Revisa todo el historial. Acaba mensaje lo llama "msj"
    // Devuelve una lista nueva SOLO con los que cumplan la regla
    // (rol === "usuario")
    let solo_usuario = historial_chat.filter(msj => msj.rol === "usuario");   
    // Le pasamos esa lista cortita a nuesrta función pintora
    pintar_chat(solo_usuario);

}

// Atributo map()
function modo_gritar(){
    // Entra en todo el historial. Por cada mensaje ("msj"), contruye un objeto nuevo 
    let chat_grita = historial_chat.map(msj => {
        return{
            rol:msj.rol,
            // Aquí está la transformación: convertimos el texto original a MAYÚSCULAS
            texto: msj.texto.toUpperCase()
        };
    });   
    // Le pasamos esa lista cortita a nuesrta función pintura
    pintar_chat(chat_grita);

}

// Reto 1 : Boton Borrar

function borrar(){
    //1. Vaciamos la memoria (Array vacío)
    historial_chat = [];
    //2. Pintamos en el html
    pintar_chat(historial_chat);
}

// Reto 2 : Buscador inteligente (Filter + Includes)
function buscar_mensaje() {
    //1. Atrapamos lo que el usuario ha escrito en la cajita del buscador
    // Usamos .toLowerCase() para pasarlo a minúsculas y evitar problemas de mayúsculas/minúsculas
    let palabra_buscada = document.getElementById('input_buscador').value.toLowerCase();
    //2. Usamos el portero (Filter) para revisar el historial
    let resultados = historial_chat.filter(msj => {
        //Pasamos el texto original del mensaje a minúsculas y le preguntaremos:
        // "¿Este texto .includes() (incluye) la palabra buscadas?"
        return msj.texto.toLowerCase().includes(palabra_buscada);
    });
    //3. Pintamos la pantalla SOLO los resultados encontrados
    pintar_chat(resultados);
}

