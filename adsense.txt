// adsense.js - espacios para anuncios de Google AdSense

// Esta función inserta bloques de anuncios en tu página.
// IMPORTANTE: reemplaza "TU-CODIGO-ADSENSE" con el ID real que te da Google AdSense.
function cargarAdsense() {
  const secciones = ["videos", "destiny", "minecraft", "space", "hollow", "division", "cod", "noticias", "ofertas"];

  secciones.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const adDiv = document.createElement("div");
      adDiv.className = "adsense-block";
      adDiv.innerHTML = `
        <!-- Bloque de anuncio AdSense -->
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="TU-CODIGO-ADSENSE"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      `;
      section.appendChild(adDiv);
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log("Error cargando anuncio:", e);
      }
    }
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarAdsense);