// 1.- Nuestro super ARRAY (Array lleno de objetos)
const carrito = [
    {nombre: "🥖 Pan de barra", precio:1.20}, // Elemento 1
    {nombre: "🥛 Leche entera", precio:0.90},
    {nombre: "🥚 Huevos campero", precio:2.50},
    {nombre: "🥑 Aguacate", precio:1.00},
    {nombre: "🥓 Bacon", precio:1.10 },
    {nombre: "🧀 Queso Gouda", precio:2.20 },
];

// Código de apoyo visual

let lista_HTML = document.getElementById("lista_producto");

for(let i = 0; i < carrito.length;i++){
    // Usamos carrito[i].nombre para sacar el dato en cada vuelta
    lista_HTML.innerHTML += `
    <li><span>${carrito[i].nombre}</span>
    <span>${carrito[i].precio.toFixed(2)}€</span>
    `
}

// La función cobrar
function cobrar(){
    // 1.- Creamos una variable = acumulador
    let suma_total = 0;
    // 2.- Creamos un bucle for para recorrer el array
    for (let i = 0; i< carrito.length; i++){
        // En cada vuelta le sumamos al "suma_total" el precio
    
        suma_total = suma_total + carrito[i].precio;

    }

    subtotal = suma_total / 1.21;
    precio_IVA = suma_total - subtotal;


    // 3.- Mostramos el resultado final en HTML
    document.getElementById("subtotal").textContent =
    "Sub-Total: " + subtotal.toFixed(2) + " €";

    document.getElementById("resultado_IVA").textContent =
    "IVA (21%): " + precio_IVA.toFixed(2) + " €";

    document.getElementById("resultado_total").textContent =
    "Total: " + suma_total.toFixed(2) + " €";

}