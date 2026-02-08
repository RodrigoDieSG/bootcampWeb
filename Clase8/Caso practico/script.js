let pantalla = document.getElementById("pantalla");

// Agregar valor a la pantalla
function agregarValor(valor) {
  pantalla.innerHTML += valor;
}

// Limpiar pantalla
function limpiarPantalla() {
  pantalla.innerHTML = "";
}

// Calcular expresión
function calcular() {
  try {
    pantalla.innerHTML = eval(pantalla.innerHTML);
  } catch (error) {
    pantalla.innerHTML = "Error";
  }
}