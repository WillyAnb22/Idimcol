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
        Información de Contacto
        <br />Cra 13# 23-33 Girardot, Colombia
        <br />+57 302 7903706
        <br />gerencia@idimcol.com.co
        <hr style="margin-top: 10px;"/>
        <p style="margin-top: 5px;">© 2025 IDIMCOL S.A.S. Todos los derechos reservados.</p>
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
    "Nos especializamos en el suministro de materiales y soluciones para el sector industrial, donde la precisión, resistencia y calidad son fundamentales. Este sector abarca una amplia gama de industrias que requieren componentes y estructuras de alto rendimiento para garantizar procesos eficientes y seguros. Nuestro compromiso es proporcionar productos que cumplan con los más altos estándares, respaldando la producción y el desarrollo de piezas esenciales para la manufactura, la construcción y otras aplicaciones industriales.",
    imagenes: [
      "/2 - Industrial.png",
      "/3 - Industrial.png",
      "/4 - Industrial.png",
      "/5 - Industrial.png",
      "/6 - Industrial.png",
      "/7 - Industrial.png",
      "/9 - Industrial.png",
      "/10 - Industrial.png",
      "/13 - Industrial.png"
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
  height: 1000px; /* Ajusta la altura según lo que necesites */
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
  padding: 35px;
  gap: 55%;
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
.red-social, img {
  height: 25px;
}
.social-link{
  text-decoration:none;
  font-size: 18px;
}

/* Responsividad */
@media (max-width: 1000px) {
.title{
    font-size: 40px;
  }
.text{
  font-size: 26px;
}
.footer {
  padding: 20px;
}
.izquierda {
  padding-left: 40px;
  font-size: 11.5px;
}
.redes-sociales {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.red-social {
  gap: 10px;
}
.red-social, img {
  height: 20px;
}
.social-link{
  font-size: 15px;
}
}
@media (max-width: 850px) {
  .redes-sociales {
    gap: 10px;
  }
.red-social {
    gap: 10px;
  }
.red-social, img {
    height: 20px;
  }
.social-link {
    font-size: 13px;
  }
}
@media (max-width: 600px){
  .izquierda {
    padding-left: 30px;
    font-size: 10px;
  }
.redes-sociales {
    display: flex;
    flex-direction: column;
  }
.red-social {
    gap: 8px;
  }
.red-social, img {
    height: 30px;
  }
span{
    display: none; /* Se oculta en pantallas menores a 600px */
  }
}
</style>
