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
import Footer from '@/components/Footer.vue';  

// import TheFooter from '../components/footer.vue';

const autoplay = ref(true);
const sectores = reactive([
  {
    nombre: "SECTOR INDUSTRIAL",
    descripcion:
    "Nos especializamos en el suministro de materiales y soluciones para el sector industrial, donde la precisión, resistencia y calidad son fundamentales. Este sector abarca una amplia gama de industrias que requieren componentes y estructuras de alto rendimiento para garantizar procesos eficientes y seguros. Nuestro compromiso es proporcionar productos que cumplan con los más altos estándares, respaldando la producción y el desarrollo de piezas esenciales para la manufactura, la construcción y otras aplicaciones industriales.",
    imagenes: [
      "/Industrial/industrial1.png",
      "/Industrial/industrial2.png",
      "/Industrial/industrial3.png",
      "/Industrial/industrial4.png",
      "/Industrial/industrial6.png",
      "/Industrial/industrial7.png"
    ],
    slide: ref(1)
  },
  {
    nombre: "SECTOR AUTOMOTRIZ",
    descripcion:
    "En el sector automotriz, la calidad y el rendimiento de los materiales son fundamentales para garantizar procesos eficientes y resultados óptimos. Ofrecemos metales de alta resistencia y precisión, diseñados para cumplir con los estándares de esta industria. Nuestro enfoque se centra en la innovación y la durabilidad, proporcionando soluciones confiables para cada aplicación.",
    imagenes: [
      "https://cdn.quasar.dev/img/mountains.jpg",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/quasar.jpg"
    ],
    slide: ref(1)
  },
  {
    nombre: "SECTOR ALIMENTARIO",
    descripcion:
    "Cumplimos con los más altos estándares de seguridad y calidad, ofreciendo materiales especializados para la industria alimentaria. Nuestros productos cumplen con las normativas sanitarias vigentes, garantizando procesos seguros, eficientes y confiables. Brindamos soluciones adaptadas a las exigencias del sector, asegurando la calidad y productividad en cada etapa de la producción.",
    imagenes: [
      "https://cdn.quasar.dev/img/mountains.jpg",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/quasar.jpg"
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
.carrusel {
  margin-top: 50px;
}
.q-carousel {
  height: 600px; /* Ajusta la altura según lo que necesites */
}
.q-carousel-slide {
  height: 100%;
}
.q-carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;; /* Puedes usar 'contain' si no quieres recorte */
}
/* Responsividad */
@media (max-width: 1000px) {
.title{
    font-size: 40px;
  }
.text{
  font-size: 26px;
}
}
</style>
