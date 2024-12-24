let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 18) {
  console.log("Puedes alquilar.");
} else {
  console.log("No puedes alquilar todavía.");
}

let esDeMontevideo = prompt("¿Eres de Montevideo? (sí/no)").toLowerCase();

if (esDeMontevideo === "sí") {
    console.log("Eres de Montevideo.");
} else if (esDeMontevideo === "no") {
    console.log("No eres de Montevideo.");
} else {
    console.log("Por favor, responde 'sí' o 'no'.");
}


function mostrarAlquileres() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpia el contenido previo

  alquileres.forEach((alquiler) => {
    // Crear el contenido dinámico
    resultado.innerHTML += `
      <div class="alquiler">
        <img src="${alquiler.imagen}" alt="${alquiler.nombre}">
        <h3>${alquiler.nombre}</h3>
        <p>Precio: $${alquiler.precio} USD</p>
        <p>Ubicación: ${alquiler.ubicacion}</p>
        <p>${alquiler.descripcion}</p>
        <button onclick="alert('Has seleccionado: ${alquiler.nombre}')">Alquilar</button>
      </div>
    `;
  });
}

let alquileres = [
  {
    nombre: "Apartamento en Pocitos",
    precio: 500,
    ubicacion: "Montevideo, Uruguay",
    descripcion: "Cómodo apartamento de 2 habitaciones cerca de la playa.",
    imagen: "./img/casa1.jpg"
  },
  {
    nombre: "Casa en el Prado",
    precio: 750,
    ubicacion: "Montevideo, Uruguay",
    descripcion: "Casa espaciosa con un hermoso jardín.",
    imagen: "./img/casa2.jpg"
  },
  {
    nombre: "Estudio en Centro",
    precio: 400,
    ubicacion: "Montevideo, Uruguay",
    descripcion: "Ideal para estudiantes, a pasos de la universidad.",
    imagen: "./img/casa3.jpeg"
  },
  {
    nombre: "Casa en Carrasco",
    precio: 1200,
    ubicacion: "Montevideo, Uruguay",
    descripcion: "Lujosa casa con piscina y amplio espacio verde.",
    imagen: "./img/casa4.jpeg"
  }
];

function filtrarPorPrecio(maxPrecio) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpia el contenido previo

  let alquileresFiltrados = alquileres.filter((alquiler) => alquiler.precio <= maxPrecio);

  alquileresFiltrados.forEach((alquiler) => {
    resultado.innerHTML += `
      <div class="alquiler">
        <img src="${alquiler.imagen}" alt="${alquiler.nombre}">
        <h3>${alquiler.nombre}</h3>
        <p>Precio: $${alquiler.precio} USD</p>
        <p>Ubicación: ${alquiler.ubicacion}</p>
        <p>${alquiler.descripcion}</p>
        <button onclick="alert('Has seleccionado: ${alquiler.nombre}')">Alquilar</button>
      </div>
    `;
  });
}

