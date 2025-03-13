<template>
  <div>
    <div class="container">
      <div class="imgFondo">
        <q-img src="/fondo.png"></q-img>
      </div>
      <div class="title">NUESTRA HISTORIA</div>
      <div
        class="frase"
      >"En IDIMCOL, transformamos el metal en soluciones innovadoras para la industria."</div>
     <div class="text">
        IDIMCOL SAS fue fundada en la ciudad de Bucaramanga, Santander, Colombia, en el año 2016 para satisfacer las necesidades de
        reparaciones y fabricaciones mecánicas, metalmecánicas y metalúrgicas en diversas industrias del país.
        Su objetivo es ofrecer soluciones rápidas, innovadoras y confiables para mantenimiento y optimización de maquinaria,
        cumpliendo con altos estándares de calidad y con un enfoque en la ingeniería de desarrollo industrial.
        Con un equipo altamente calificado, la empresa se especializa en cumplir las necesidades de sectores como; minería,
        petróleo, transporte, automotriz, manufactura, alimentos, entre otros. Además, promueve el desarrollo local
        y fomenta la creación de empleo en la región, impulsando el crecimiento industrial de Bucaramanga y sus alrededores.
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
          <q-img src="https://wautechnologies.com/wp-content/uploads/2023/07/fabricas-inteligentes.jpg"> </q-img>
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
        <p>
          <b>Ubicación:</b>
        </p>📌Carrera 13 #23-33
        <br />🏙 Barrio - Girardot
        <br />Ciudad: Bucaramanga
        <br />País: Colombia
        <br />
        <br />
        <p>
          <b>Teléfonos:</b>
        </p>📲+57 316 4468484
        <br />📲+57 317 5768082
        <br />📲+57 315 2434517
        <br />📲+57 302 7903706
        <br />
        <br />
        <p>
          <b>Correo electrónico:</b>
        </p>
        <p>gerencia@idimcol.com.co</p>
        <p>comercial@idimcol.com.co</p>
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

onMounted(async () => {
  await nextTick(); // Espera a que el DOM se renderice

  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Error: No se encontró el contenedor del mapa.");
    return;
  }

  const map = L.map("map").setView([7.124607928853439, -73.13054456123169], 17); // Bucaramanga

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([7.124607928853439, -73.13054456123169])
    .addTo(map)
    .bindPopup("IDIMCOL SAS - Bucaramanga")
    .openPopup();
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
.container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.imgFondo {
  position: absolute;
  width: 120%;
  height: 100vh;
  filter: brightness(30%); /* Reduce el brillo al 50% */
  z-index: 1;
}
.title {
  position: absolute;
  z-index: 2;
  font-size: 65px;
  font-weight: bold;
  top: 5%;
  left: 4rem;
}
.frase {
  position: absolute;
  z-index: 2;
  font-weight: bold;
  font-size: 1.5rem;
  top: 20%;
  left: 4rem;
}
.text {
  position: absolute;
  z-index: 2;
  color: white;
  text-align: justify;
  font-size: 27px;
  font-weight: bold;
  max-width: 90%;
  top: 30%;
  left: 4rem;
}
.container2 {
  background-color: #325e9b;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 40px;
}
.titleVision,
.titleMision {
  font-size: 4rem;
  font-weight: bold;
}
.textVision,
.textMision {
  font-size: 1.3rem;
}
.vision,
.mision {
  padding: 20px;
  text-align: justify;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imgVision,
.imgMision {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 4% auto;
}
.imgMision {
  margin: 15% auto;
}
.container3 {
  background-color: #325e9b;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 40px;
}
.title3 {
  position: absolute;
  font-size: 5rem;
  font-weight: bold;
  left: 8rem;
}
.ubicacion {
  position: relative;
  font-size: 2rem;
  padding: 8rem;
}
#map {
    width: 100%;
    height: 70%;
    top: 150px;
    right: 50px;
  }
/* Responsividad a 1500px */
@media (max-width: 1500px) {
  .container3 {
    padding: 10px;
    gap: 40px;
  }
  .title3 {
    position: absolute;
    font-size: 4rem;
    font-weight: bold;
    left: 8rem;
  }
  .ubicacion {
    position: relative;
    font-size: 1.7rem;
    padding: 8rem;
  }
  /* #map {
    width: 100%;
    height: 70%;
    top: 150px;
    right: 50px;
  } */
}
@media (max-width:1300px){
  .text{
    font-size: 25px;
  }
}
/* Responsividad a 1250px */
@media (max-width: 1250px) {
  .imgFondo {
    width: 140%;
    height: 100vh;
  }
  .title {
    font-size: 4rem;
  }
  .frase {
    font-size: 1.2rem;
    top: 12rem;
  }
  .text {
    font-size: 23px;
    max-width: 80%;
    top: 17rem;
  }
  .titleVision,
  .titleMision {
    font-size: 3.5rem;
  }
  .textVision,
  .textMision {
    font-size: 1.2rem;
  }
  .imgMision {
  margin: 25% auto;
}
  .title3 {
    font-size: 3.6rem;
    left: 4rem;
  }
  .ubicacion {
    font-size: 1.4rem;
    right: 4rem;
  }
  #map {
    width: 100%;
    height: 70%;
    top: 120px;
    right: 50px;
  }
}
@media (max-width: 1100px){
  .title{
    font-size:55px;
    top:2%;
  }
  .frase{
    top: 16%;
  }
  .text{
    top:25%;
  }
.imgMision {
  margin: 17% auto;
}
}
@media (max-width: 1035px) {
  .imgFondo {
    width: 120%;
  }
  .title{
    font-size: 50px;
  }
  .text{
    font-size: 20px;
  }
  .imgMision {
  margin: 20% auto;
}
  .ubicacion {
    font-size: 21px;
  }
  #correo {
    font-size: 15.8px;
  }
}
@media (max-width: 850px) {
  .imgFondo {
    width: 200%;
  }
  .title {
    font-size: 3rem;
  }
  .frase {
    font-size: 15px;
  }
  .imgVision, .imgMision {
    width: 90%;
    margin: 4rem auto;
  }
  .imgMision {
    margin: 8rem auto;
  }
  .ubicacion {
    font-size: 20px;
  }
}
@media (max-width: 600px) {
  .imgFondo {
    width: 270%;
  }
  .title {
    font-size: 2.5rem;
  }
  .text {
    font-size: 20px;
  }
  .container2 {
    display: flex; /* En lugar de grid, usa flexbox */
    flex-direction: column; /* Poner todo en una sola columna */
    align-items: center;
    text-align: center;
  }
  .vision,
  .mision {
    width: 100%; /* Para que ocupen toda la pantalla */
    padding: 20px;
  }
  .imgVision, .imgMision {
    width: 100%; /* Ajustar imágenes */
    margin: 2rem auto;
  }
  .container3 {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra los elementos */
    justify-content: flex-start; /* Asegura que el contenido empiece arriba */
    text-align: center;
    width: 100%;
    padding-top: 20px; /* Espacio extra en la parte superior */
  }
  .title3{
    font-size: 50px;
  }
  .ubicacion{
    text-align: center;
    width: 100%;
    right: 20px;
    font-size:25px;    
  }
  #map {
    width: 90%; /* Ajusta el ancho del mapa */
    height: 300px;
    margin-top: -250px;
    margin-left: 100px;
  }
}
</style> 