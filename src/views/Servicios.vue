<template>
  <div>
    <div class="container">
      <div class="service" v-for="(service, index) in services" :key="index">
        <div class="background" :style="{ backgroundImage:`url(${service.image})`}"></div>
        <div class="content">
          <div class="title">{{ service.title }}</div>
          <div class="text">{{ service.description }}</div>
        </div>
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
import { ref } from "vue";

const services = ref([
  {
    image: "/estructurasMetalicas.png",
    title: "ESTRUCTURAS MÉTALICAS",
    description:
      "Ingeniería de detalle, simulación, cálculo estructural, análisis de cargas y personal altamente calificado, son los componentes que acompañan nuestros procesos de calibración, fabricación y montaje de sus proyectos industriales."
  },
  {
    image: "/proyectosIndustriales.png",
    title: "PROYECTOS INDUSTRIALES",
    description:
      "La planificación estratégica, el análisis financiero, la gestión de proyectos y el control de costos son los pilares que respaldan nuestra ingeniería y desarrollo, garantizando la ejecución exitosa de cada proyecto. Nuestro enfoque integral permite entregar soluciones eficientes, optimizando recursos y maximizando los resultados."
  },
  {
    image: "/mecanizado.png",
    title: "MECANIZADO",
    description:
      "Procesos computarizados y convencionales se unen en la fabricación, reparación y repotenciación de todo tipo de piezas, partes y repuestos, que respaldan sus necesidades de producción y mantenimiento."
  },
  {
    image: "/diseñoMecanico.png",
    title: "DISEÑO MECÁNICO",
    description:
      "Apoyados en el software de diseño asistido por computador (CAD) Solidwoks 2019, nuestro departamento de ingeniería y diseño evalúa las condiciones técnicas y conceptuales de sus equipos y máquinas industriales y accesorios para garantizar el óptimo desarrollo de sus operaciones."
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
  /* justify-content: center;
  align-items: center; */
  background-color: #325e9b;
  /* padding:40px  20px; */
}
.service {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 70vh;
  overflow: hidden;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease-in-out;
}
.content {
  position: relative;
  z-index: 2;
  color: white;
}
.title, .text {
  padding-left: 40px;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: rgb(195, 195, 195) ;
}
.text {
  font-size: 1.8rem;
  text-align: justify;
  justify-content: center;
  max-width: 90%;
}
.service:hover .background {
  transform: scale(1.1);
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
@media (max-width: 1500px) {
.service {
  min-height: 65vh;
}
.title {
  font-size: 3rem;
  margin-bottom: 30px;
  margin-top:5%;
}
.text {
  font-size: 1.8rem;
}
}
@media (max-width: 1200px) {
.service {
  min-height: 55vh;
  }
.title{
  font-size: 2.5rem;
  margin-bottom: 20px;
  margin-top:8%;
}
.text{
  font-size: 1.3rem;
}
}
@media (max-width: 1000px){
.service {
  min-height: 30vh;
  }
.title{
  font-size: 2rem;
  margin-bottom: 2px;
  margin-top:2%;
}
.text{
  font-size: 1.1rem;
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
@media (max-width:850px){
.service {
    min-height: 30vh;
  }
.title{
  font-size: 30px;
  margin-bottom: 2px;
  margin-top:5%;
}
.text{
  font-size: 17px;
}
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
@media (max-width:600px){
/* .service {
    min-height: 30vh;
  } */
.title{
  font-size: 24px;
  margin-bottom: 2px;
  margin-top:5%;
}
.text{
  font-size: 14px;
}
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
