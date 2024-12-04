let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 18) {
  console.log("Puedes alquilar.");
} else {
  console.log("No puedes alquilar todavía.");
}

function mostrarAlquileres() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    resultado.innerHTML += `<p>Alquiler ${i}: Propiedad disponible.</p>`;
  }
}