// Noticias.js - carga dinámica de noticias

// Noticias de tus juegos
const misNoticias = [
  { titulo: "Nuevo evento en Destiny 2", fecha: "Marzo 2026" },
  { titulo: "Actualización de Minecraft con nuevas criaturas", fecha: "Febrero 2026" },
  { titulo: "Space Marine 2 revela tráiler épico", fecha: "Enero 2026" },
  { titulo: "Guía avanzada de Hollow Knight", fecha: "Diciembre 2025" },
  { titulo: "The Division 2 recibe expansión en Washington", fecha: "Noviembre 2025" },
  { titulo: "Call of Duty lanza temporada competitiva", fecha: "Octubre 2025" }
];

// Noticias generales del mundo gamer
const gamingNoticias = [
  { titulo: "Rumores sobre GTA 6", fecha: "Marzo 2026" },
  { titulo: "E3 2026 anuncia nuevos RPGs", fecha: "Febrero 2026" },
  { titulo: "Mejores shooters de la década", fecha: "Enero 2026" },
  { titulo: "Nuevo tráiler de Zelda sorprende a fans", fecha: "Diciembre 2025" }
];

// Función para renderizar noticias
function cargarNoticias() {
  const misJuegosDiv = document.getElementById("mis-juegos");
  const gamingDiv = document.getElementById("gaming-news");

  misNoticias.forEach(noticia => {
    const item = document.createElement("p");
    item.textContent = `${noticia.fecha} - ${noticia.titulo}`;
    misJuegosDiv.appendChild(item);
  });

  gamingNoticias.forEach(noticia => {
    const item = document.createElement("p");
    item.textContent = `${noticia.fecha} - ${noticia.titulo}`;
    gamingDiv.appendChild(item);
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarNoticias);