<template>
  <div>
    <div class="container">
      <div class="imgFondo">
        <q-img src="/fotosNuestraempresa/fondo.png"></q-img>
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
          Para el año 2028, IDIMCOL S.A.S será reconocida a nivel
          nacional como un fuerte grupo empresarial en la industria
          metalmecánica y metalúrgica, respaldados por un equipo
          humano dinámico e integral, enfocado en la innovación,
          compromiso ambiental y avances tecnológicos en nuestros
          procesos de diseño, fabricación, reparación de equipos
          y maquinaria industrial, que permita cumplir con las necesidades
          o expectativas de nuestros clientes, así como generar
          los recursos apropiados para el funcionamiento de la empresa
          y un retorno de la inversión con utilidades a su sociedad.
        </div>
        <div class="imgVision">
          <q-img src="/fotosNuestraempresa/operarios.png"></q-img>
        </div>
      </div>
      <div class="mision">
        <div class="titleMision">Misión</div>
        <div class="textMision">
          Somos una empresa de ingeniería y desarrollo
          integral dedicada al diseño, mantenimiento,
          reparación, fabricación, servicios de diagnóstico,
          asesoramiento técnico en evaluación de proyectos
          para la reconstrucción y optimización de
          maquinaria industrial; contamos con un equipo
          humano competente y comprometido, buscamos la
          innovación en nuestros procesos de fabricación con
          tecnología de punta, mejorando
          continuamente nuestros procesos y así cumplir las
          expectativas o necesidades de nuestros clientes y
          demás partes interesadas.
        </div>
        <div class="imgMision">
          <q-img src="/fotosNuestraempresa/soldador.jpg"></q-img>
        </div>
      </div>
    </div>
    <div class="container3">
      <div class="title3">Encuentranos Aquí</div>
      <div class="ubicacion">
        <div class="direccion">
          <p>
            <b>DIRECCIÓN:</b>
          </p>📌Carrera 13 #23-33 Barrio - Girardot
          <br />Ciudad: Bucaramanga/Santander
        </div>
        <div class="telefonos">
          <p>
            <b>LÍNEAS TELEFÓNICAS:</b>
          </p>📱 +57 302 7903706
          <br />📞 (607)-7013450
        </div>
        <div class="correos">
          <p>
            <b>CORREOS:</b>
          </p>✉ gerencia@idimcol.com.co -📱+57 316 4468484
          <br />✉ comercial@idimcol.com.co -📱+57 317 5768082
          <br />✉ gesproyectos@idimcol.com.co -📱+57 315 2434517
          <br />
        </div>
      </div>
      <div id="map"></div>
    </div>
    <!-- Importación del footer -->
    <Footer class="footer" />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "@/components/Footer.vue"; // Importación del footer

onMounted(async () => {
  await nextTick(); // Espera a que el DOM se renderice

  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Error: No se encontró el contenedor del mapa.");
    return;
  }
  //Coordenadas de Idimcol
  const latitude = 7.124607928853439;
  const longitude = -73.13054456123169;

  const map = L.map("map").setView([latitude, longitude], 17); // Bucaramanga
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  delete L.Icon.Default.prototype._getIconUrl;
const customIcon =L.icon({
  iconUrl: "/fotosNuestraempresa/iconoUbicacion.png",
  iconSize: [50,50],
  iconAnchor:[20, 30],
  popupAnchor:[0, -40],
})


  L.marker([latitude, longitude],{ icon: customIcon})
    .addTo(map)
    .bindPopup("IDIMCOL SAS - Bucaramanga")
    .openPopup();
  //Evento para ir al gps
  map.on("click", () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      "_blanck"
    );
  });
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
  filter: brightness(30%);
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
  margin: 11% auto;
}
.imgMision{
  width: 70%;
}
.imgVision {
  margin: 6% auto;
}
.container3 {
  background-color: #325e9b;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
}
.title3 {
  position: absolute;
  font-size: 5rem;
  font-weight: bold;
  left: 8rem;
}
.ubicacion {
  position: relative;
  font-size: 30px;
  top: 15%;
  left: 12%;
}
b {
  color: #032a3d;
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
  }
}
@media (max-width: 1330px) {
  .text {
    font-size: 25px;
  }
  .title3{
    left:7%;
  }
  .ubicacion{
    font-size: 22px;
  }
  #map{
    left: 45px;
    width: 90%;
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
  .title3 {
    font-size: 3.6rem;
    left: 4rem;
  }
  .ubicacion {
    font-size: 1.4rem;
    left: 9%;
  }
  #map {
    width: 90%;
    height: 70%;
    top: 120px; 
    left: 50px;
  }
}
@media (max-width: 1100px) {
  .title {
    font-size: 55px;
    top: 2%;
  }
  .frase {
    top: 16%;
  }
  .text {
    top: 25%;
  }
  .imgMision {
    margin: 14% auto;
  }
  .ubicacion{
    max-width: 350px;
  }
  #map{
    width: 100%;
    margin-left: -40px;
  }
}
@media (max-width: 1035px) {
  .imgFondo {
    width: 160%;
  }
  .title {
    font-size: 50px;
  }
  .text {
    font-size: 25px;
  }
  .imgMision,
  .imgVision {
    width: 100%;
  }
  .imgMision{
    margin: 19% auto;
  }
  .ubicacion {
    font-size: 21px;
  }
  .container3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .ubicacion {
    position: relative;
    font-size: 25px;
    margin-top: -4%;
    margin-left: -4%;
    max-width: 700px;
    width: 100%;
  }
  #map {
    width: 90%;
    height: 320px;
    left: 9%;
  }
}
@media (max-width: 950px) {
  .imgFondo {
    width: 250%;
  }
  .imgVision {
    width: 350px;
  }
  .imgMision {
    width: 370px;
    margin: 12% auto;
  }
}
@media (max-width: 850px) {
  .imgFondo {
    width: 210%;
  }
  .title {
    font-size: 3rem;
  }
  .frase {
    font-size: 15px;
  }
  .imgVision,
  .imgMision {
    width: 90%;
  }
  .imgMision {
    margin: 19% auto;
  }
  .container3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .ubicacion {
    position: relative;
    font-size: 23px;
  }
}
@media (max-width: 760px) {
  .imgFondo {
    width: 230%;
  }
  .text{
    font-size: 23px;
  }
  .ubicacion {
    position: relative;
    font-size: 20px;
    margin-top: -5%;
    margin-left: -3%;
    max-width: 500px;
    width: 90%;
  }
}
@media (max-width: 700px) {
  .imgFondo {
    width: 250%;
  }
  .text{
    font-size: 21px;
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
  .imgVision,
  .imgMision {
    width: 100%; /* Ajustar imágenes */
    margin: 2rem auto;
  }
  .title3 {
    font-size: 50px;
    margin-top: -10%;
  }
  .ubicacion {
    position: relative;
    font-size: 18px;
    margin-top: -15%;
    margin-left: -3%;
    max-width: 500px;
    width: 50%;
  }
  #map {
    width: 100%; /* Ajusta el ancho del mapa */
    height: 300px;
    margin-top: -2px;
    margin-left: -50px;
  }
}
@media (max-width: 520px) {
  .imgFondo {
    width: 320%;
  }
  .title3 {
    left: 55px;
    font-size: 45px;
  }  
  .frase{
  font-size: 13px;
  left: 34px;
  text-align: center;
  }
  .ubicacion {
    margin-top: -90px;
  }
  #map {
    margin-top: -20px;
    height: 300px;
    width: 90%;
    left: 15%;
  }
}
@media (max-width: 480px){
  .imgFondo{
    width: 380%;
  }
  .text{
    font-size: 18px;
  }
}
@media (max-width: 430px) {
  .title {
    font-size: 30px;
    top: 50px;
  }
  .imgFondo {
    width: 390%;
  }
  .frase {
    font-size: 14px;
  }
  .text {
    font-size: 17px;
    left: 50px;
  }
  .title3{
    font-size: 40px;
    left: 40px;
  }
  #map{
    left: 20%;
    height: 250px;
  }
}
@media (max-width:400px){
  .frase{
    left: 10px;
  }
  .text{
    left: 50px;
  }
  #map{
    height: 250px;
  }
}
@media (max-width:376px){
  .text{
    font-size: 15px;
  }
  .imgFondo{
    width:450%;
  }
  .title3{
    font-size: 35px;
  }
}
@media (max-width: 370px){
  .imgFondo{
    width: 200vh;
  }
  .title{
    left: 40px;
  }
  .frase{
    font-size: 14px;
    left: 10px;
  }
  .text{
    left: 40px;
  }
  .title3{
    font-size: 30px;
  }
  .ubicacion{
    font-size: 17px;
    margin-left: -4%;
    width: 60%;
  }
  #map{
    height: 150px;
  }
}

@media (max-width:320px){
  .text{
    font-size:15px
  }
  #map{
    margin-top: -20px;
    height: 200px;
  }
}
@media (max-width: 300px){
  .ubicacion{
    font-size: 18px;
    margin-top: -10%;
    width: 90%;
  }
}
</style> 