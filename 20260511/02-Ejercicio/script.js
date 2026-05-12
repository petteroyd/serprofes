// Creamos nuestra "Caja grande" (Array)
let carrito = ["🍎 Manzana","🍍 Piña"];
// Imprimir el carrito nada mas al cargar la página
document.getElementById("pantalla_cesta").textContent = carrito.join(" - ");

// La función para agregar cosas nuevas a la lista
function añadir_al_carrito(){
    // Atrapamos lo que escribe el usuario
    let item = document.getElementById("nuevo_item").value;
    // Magia de arrays: .push() mete el nuevo elemento al final de la lista
    carrito.push(item);
    // Volvemos a pintar la cesta para que se vea
    document.getElementById("pantalla_cesta").textContent = carrito.join(" - ");
    // Limpiamos el input
    document.getElementById("nuevoitem").value = "";
}

