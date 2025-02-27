<template>
  <div>
    <div class="container">
      <div class="imgFondo">
        <q-img src="/src/assets/fondo.png"></q-img>
      </div>
      <div class="title">NUESTRA HISTORIA</div>
      <div
        class="frase"
      >"En IDIMCOL, transformamos el metal en soluciones innovadoras para la industria."</div>
      <div class="text">
        IDIMCOL SAS fue fundada en Bucaramanga, Santander, Colombia, en 2016 para satisfacer las necesidades de
        <br />reparaciones y fabricaciones mecánicas, metalmecánicas y metalúrgicas en diversas industrias del país.
        <br />Su objetivo es ofrecer soluciones rápidas, ágiles y confiables para mantenimiento y optimización de maquinaria,
        <br />cumpliendo con altos estándares de calidad y con un enfoque en la ingeniería de desarrollo industrial.
        <br />Con un equipo altamente calificado, la empresa se centra en cumplir las necesidades de sectores como minería,
        <br />petróleo, transporte, automotriz, manufactura y alimentos, entre otros. Además, promueve el desarrollo local
        <br />y la creación de empleo en la región, impulsando el crecimiento de Bucaramanga y sus alrededores.
      </div>
    </div>
    <div class="container2">
      <div class="vision">
        <div class="titleVision">Visión</div>
        <div class="textVision">
          Para el año 2023, IDIMCOL S.A.S será reconocida a nivel
          nacional como una empresa de soluciones y desarrollos
          efectivos y confiables en la industria metalmecánica y
          metalúrgica, respaldados por un equipo humano dinámico
          e integral, enfocado en la innovación, compromiso ambiental
          y avances tecnológicos en nuestros procesos de diseño,
          fabricación y reparación de equipos y maquinaria industrial,
          que permita cumplir las necesidades y expectativas de
          nuestros clientes, así como generar los recursos apropiados
          para el funcionamiento de la empresa y un retorno de la
          inversión con utilidades a su sociedad
        </div>
        <div class="imgVision">
          <q-img src="/src/assets/1.png"></q-img>
        </div>
      </div>
      <div class="mision">
        <div class="titleMision">Misión</div>
        <div class="textMision">
          Somos una empresa de ingeniería y desarrollo
          integral dedicada al diseño, mantenimiento,
          reparación, fabricación, servicios de diagnóstico y
          asesoramiento técnico en evaluación de proyectos
          para la reconstrucción y optimización de
          maquinaria industrial; contamos con un equipo
          humano competente y comprometido, buscamos la
          innovación en nuestros procesos de fabricación y
          tecnología de punta, con el fin de mejorar
          continuamente nuestros procesos y así cumplir las
          expectativas y necesidades de nuestros clientes y
          demás partes interesadas.
        </div>
        <div class="imgMision">
          <q-img
            src="https://wautechnologies.com/wp-content/uploads/2023/07/fabricas-inteligentes.jpg"
          ></q-img>
        </div>
      </div>
    </div>
    <div class="container3">
        <div class="title3">Encuentranos Aquí</div>
        <div class="ubicacion">
         Ubicación:<br>
         📌 Carrera 13 #23-33<br>
         🏙 Barrio - Girardot
         📍 Ciudad: Bucaramanga<br>
         co País: Colombia<br><br>
         Teléfonos:<br>
         📲 +57 316 4468484<br> 
         📲 +57 317 5768082<br>
         📲 +57 315 2434517<br>
         📲 +57 302 7903706<br><br>
         Correo electrónico:<br>
         ✉ gerencia@idimcol.com.co<br>
         ✉ comercial@idimcol.com.co<br>
        </div>
        <div id="map" style="height: 800px;"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(async () => {
  await nextTick(); // Espera a que el DOM se renderice

  const mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.error("Error: No se encontró el contenedor del mapa.");
    return;
  }

  const map = L.map('map').setView([7.124607928853439, -73.13054456123169], 15); // Bucaramanga

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([7.124607928853439, -73.13054456123169]).addTo(map)
    .bindPopup('IDIMCOL SAS - Bucaramanga')
    .openPopup();
});
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

}
.imgFondo {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
.title {
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  top: 6rem;
  left: 4rem;
}
.frase {
  position: absolute;
  z-index: 2;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  top: 14rem;
  left: 4rem;
}

.text {
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  top: 19rem;
  left: 4rem;
}
.container2 {
  background-color: #325e9b;
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 40px;
}
.vision,.mision {
  padding: 20px;
  border-radius: 20px;
  text-align: justify;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imgVision,.imgMision {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 4rem auto;
}
.imgMision{
    margin: 6rem auto;
}
.titleVision,.titleMision {
  font-size: 4rem;
  font-weight: bold;
}
.textVision,.textMision {
  font-size: 1.3rem;
}
.container3 {
  background-color: #325e9b;
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 40px;
}
.title3{
  position: absolute;
  font-size: 5rem;
  font-weight: bold;
  left:8rem;
}
.ubicacion{
  position: relative;
  font-size: 2rem;
  padding:8rem;
  }
</style>