const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let nombres = [];

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  for (let i = 0; i < nombres.length; i++) {
    const li = document.createElement("li");
    li.textContent = nombres[i];
    lista.appendChild(li);
  }
}

function agregarAmigo() {
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
    }
  if (nombres.includes(nombre)) {
  alert("Ese nombre ya fue agregado.");
  return;
  }

  // Agregar nombre a la lista interna
  nombres.push(nombre);
  // Limpiar el campo de entrada
  input.value = "";
  actualizarLista(); // Actualizar la lista visual juego(el renderizado)
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];

  // Mostrar el resultado
  resultado.innerHTML = `<li>${nombreSorteado} ha sido seleccionado 🎉</li>`;
}