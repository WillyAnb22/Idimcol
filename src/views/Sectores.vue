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
    <div class="footer">
      <div class="izquierda">
        Información Contacto
        <br />Cra 13# 23-33 Girardot, Colombia
        <br />+57
        <br />+57
        <br />gerencia@idimcol.com.co
      </div>
      <div class="redes-sociales">
        <a href="https://www.facebook.com/share/14ucNZh2Zi/" target="_blank" class="social-link">
          <div class="red-social">
            <img src="/facebook.png" />
            <span>idimcol SAS Colombia</span>
          </div>
        </a>
        <a href="https://www.instagram.com/idimcol7?igsh=MWt6OWZmZTh2Mm56Yw==" target="_blank" class="social-link">
          <div class="red-social">
            <img src="/instagram.png" />
            <span>idimcol7</span>
          </div>
        </a>
        <a href="https://www.tiktok.com/@idimcol?_t=ZS-8uIpWWEOBPj&_r=1" target="_blank" class="social-link">
          <div class="red-social">
            <img src="/tik-tok.png" />
            <span>idimcol</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// import TheFooter from '../components/footer.vue';

const autoplay = ref(true);
const sectores = reactive([
  {
    nombre: "SECTOR INDUSTRIAL",
    descripcion:
      "Proporcionamos materiales  de excelencia, diseñados para impulsar la productividad y eficiencia de la industria. Nuestra calidad asegura el éxito de cada proyecto, con soluciones a medida para cada necesidad.",
    imagenes: [
      "/1.png",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/quasar.jpg",
      "/1.png"
    ],
    slide: ref(1)
  },
  {
    nombre: "SECTOR AUTOMOTRIZ",
    descripcion:
      "Trabajamos con metales de alto rendimiento para la industria automotriz. Proveemos materiales para componentes clave, garantizando durabilidad, resistencia y optimización en cada parte del vehículo.",
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
      "Cumplimos con los estándares más altos de seguridad y calidad, ideales para la industria alimentaria. Ofrecemos productos que cumplen con las normativas sanitarias, asegurando la integridad y seguridad de los procesos de producción.",
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
}
.title {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 80px;
  margin-left: 100px;
  padding: 0 50px; /* Espacio en los lados */
}
.text {
  font-size: 28px;
  margin-bottom: 20px;
  margin-left: 100px;
  padding: 0 50px; /* Espacio en los lados */
}

.carrusel {
  margin-top: 50px;
}

.q-carousel {
  height: 700px; /* Ajusta la altura según lo que necesites */
}

.q-carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.q-carousel-slide img {
  max-height: 100%;
  width: auto;
  object-fit: cover; /* Puedes usar 'contain' si no quieres recorte */
}
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
  gap: 50%;
  background-color: #1e1f2d;
}
.izquierda {
  padding-left: 40px;
}
.redes-sociales {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.red-social {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
}
.red-social,
img {
  height: 20px;
}
.social-link{
  text-decoration:none;
  font-size: 18px;
}
</style>
