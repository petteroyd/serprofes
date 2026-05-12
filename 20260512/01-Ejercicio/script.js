// 1.- El objeto
// Usamos llaves {} para crear la ficha técnica
// y dos puntos para dar valor

let producto = {
    nombre: "🍎 Manzanas",
    precio: 2.5,
    categoria: "Fruta",
};

// 2.- ¿Cómo leemos un dato concreto y lo mandamos
// al html?

document.getElementById("prod_nombre").textContent = producto.nombre;
document.getElementById("prod_precio").textContent = producto.precio;
document.getElementById("prod_cat").textContent = producto.categoria;

function mostrar_mi_ficha() {
    // 1.- Crea tu propio objeto "alumno"
    // 2.- Mostrar los datos en html

    let alumno = {
        nombre: "Pedro",
        edad: "42",
        ciudad: "Madrid",
    };

document.getElementById("alum_nombre").textContent = alumno.nombre;
document.getElementById("alum_edad").textContent = alumno.edad;
document.getElementById("alum_ciudad").textContent = alumno.ciudad;

}
