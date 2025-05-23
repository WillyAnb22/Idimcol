<template>
  <div>
    <div v-for="sector in sectores" :key="sector.nombre" class="container">
      <div class="title">{{ sector.nombre }}</div>
      <div class="text">{{ sector.descripcion }}</div>
      <div class="carrusel">
        <q-carousel
          animated
          v-model="sector.slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            v-for="(img, index) in sector.imagenes"
            :key="index"
            :name="index + 1"
            :img-src="img"
          />
        </q-carousel>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Footer from "@/components/Footer.vue";

// import TheFooter from '../components/footer.vue';

const autoplay = ref(true);
const sectores = reactive([
  {
    nombre: "SECTOR INDUSTRIAL",
    descripcion:
      "Nos especializamos en el suministro de materiales y soluciones para el sector industrial, donde la precisión, resistencia y calidad son fundamentales. Este sector abarca una amplia gama de industrias que requieren componentes y estructuras de alto rendimiento para garantizar procesos eficientes y seguros. Nuestro compromiso es proporcionar productos que cumplan con los más altos estándares, respaldando la producción y el desarrollo de piezas esenciales para la manufactura, la construcción y otras aplicaciones industriales.",
    imagenes: [
      "/SecIndustrial/Escaleras.png",
      "/SecIndustrial/estructuraMetalica.png",
      "/SecIndustrial/puente.jpg",
      "/SecIndustrial/engranajes.jpeg",
      "/SecIndustrial/barrelodos.jpg",
      "/SecIndustrial/contenedores.jpg",
      "/SecIndustrial/plantaAmbiental.jpg",
      "/SecIndustrial/silo.jpg",
      "/SecIndustrial/estructura.JPG",
      "/SecIndustrial/grua.png",
    ],
    slide: ref(1)
  },
  {
    nombre: "SECTOR AUTOMOTRIZ",
    descripcion:
      "En el sector automotriz, la calidad y el rendimiento de los materiales son fundamentales para garantizar procesos eficientes y resultados óptimos. Ofrecemos metales de alta resistencia y precisión, diseñados para cumplir con los estándares de esta industria. Nuestro enfoque se centra en la innovación y la durabilidad, proporcionando soluciones confiables para cada aplicación.",
    imagenes: [
    "/Automotriz/automotriz.png",
    "/Automotriz/automotriz1.jpg",
      "/Automotriz/automotriz2.png",
      "/Automotriz/automotriz3.png",
      "/Automotriz/automotriz4.png",
      "/Automotriz/automotriz5.png",
      "/Automotriz/automotriz6.png",
      "/Automotriz/automotriz7.png",
      "/Automotriz/automotriz8.png",
      "/Automotriz/automotriz9.png"
    ],
    slide: ref(1)
  },
  {
    nombre: "SECTOR ALIMENTARIO",
    descripcion:
      "Cumplimos con los más altos estándares de seguridad y calidad, ofreciendo materiales especializados para la industria alimentaria. Nuestros productos cumplen con las normativas sanitarias vigentes, garantizando procesos seguros, eficientes y confiables. Brindamos soluciones adaptadas a las exigencias del sector, asegurando la calidad y productividad en cada etapa de la producción.",
    imagenes: [
      "/SecAlimentario/MAQUINA_CHOCOLATE.jpg",
      "/SecAlimentario/Alimenticio.jpg",
      "/SecAlimentario/maquina.jpg",
      "/SecAlimentario/carritos.JPG",
      "/SecAlimentario/maquina2.png",
      "/SecAlimentario/chocolate2.jpg",
      "/SecAlimentario/maquina(2).jpg",
      "/SecAlimentario/rodillo.png",
      "/SecAlimentario/maquina3.png",
      "/SecAlimentario/tolva.jpg"
    ],
    slide: ref(1)
  }
]);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: #325e9b;
  padding: 0 50px; /* Espacio en los lados */
}
.title {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 80px;
}
.text {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: justify;
}
.q-carrusel {
  width: 100%;
}
.q-carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.q-carousel-slide img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}
/* Responsividad */
@media (max-width: 1000px) {
  .title {
    font-size: 40px;
  }
  .text {
    font-size: 26px;
  }
}
@media (max-width: 500px) {
  .title{
    font-size: 30px;
  }
  .text {
    font-size: 20px;
  }
  .q-carousel {
    width: 100%;
    height: 400px;
  }
  .q-carousel-slide {
    height: 100%;
  }
  .q-carousel-slide img {
    height: 100%;
    object-fit: contain;
  }
}
@media (max-width:400px){
  .title{
    font-size:25px;
  }
  .text{
    font-size: 17px;
  }
  .q-carousel{
    height: 250px;
  }
}
@media (max-width:350px){
  .title{
    font-size:22px;
  }
  .text{
    font-size: 15px;
  }
  .q-carousel{
    height: 200px;
  }
}
@media (max-width: 300px){
  .title{
    font-size:17px;
  }
  .text{
    font-size: 10px;
  }
  .q-carousel{
    height: 200px;
  }
}
</style>
