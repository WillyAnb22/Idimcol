<!-- <template>
  <div>
    <div class="container">
        <div class="img">
            <q-img src="/src/assets/estructurasMetalicas.png"></q-img>
        </div>
     <div class="title">NUESTROS SERVIVICIOS</div>
     <div class="title1"> ESTRUCTURAS METÁLICAS</div>
     <div class="text1">
        Ingenieria de detalle, simulación, calculo estructural, análisis de <br>
        cargas y personal altamente calificado, son los componentes que <br>
        acompañan nuestros procesos de calibración, fabricación y montaje<br>
        de sus proyectos industriales.
     </div>
    </div>
  </div>
</template>
-->
<template>
  <div class="container">
    <div
      class="service"
      v-for="(service, index) in services"
      :key="index"
    >
    <div class="background" :style="{ backgroundImage:`url(${service.image})`}"></div>
      <div class="content">
        <div class="title">{{ service.title }}</div>
        <div class="text">{{ service.description }}</div>
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
    description:"Ingeniería de detalle, simulación, cálculo estructural, análisis de\ncargas y personal altamente calificado, son los componentes que\nacompañan nuestros procesos de calibración, fabricación y montaje \nde sus proyectos industriales."
  },
  {
    image: "/proyectosIndustriales.png",
    title: "PROYECTOS INDUSTRIALES",
    description:"La planificación estratégica, el análisis financiero, la gestión de proyectos\n y el control de costos son los pilares que respaldan nuestra ingeniería\n y desarrollo, garantizando la ejecución exitosa de cada proyecto.\n Nuestro enfoque integral permite entregar soluciones eficientes,\n optimizando recursos y maximizando los resultados."
  },
  {
    image: "/mecanizado.png",
    title: "MECANIZADO",
    description:"Procesos computarizados y convencionales se unen en la fabricación,\n reparación y repotenciación de todo tipo de piezas, partes y repuestos,\n que respaldan sus necesidades de producción y mantenimiento."
  },
  {
    image: "/diseñoMecanico.png",
    title: "DISEÑO MECÁNICO",
    description:"Apoyados en el software de diseño asistido por computador (CAD) Solidwoks\n 2019, nuestro departamento de ingeniería y diseño evalúa las condiciones\n técnicas y conceptuales de sus equipos y máquinas industriales y accesorios\n para garantizar el óptimo desarrollo de sus operaciones."
  }
]);
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 50px;
  background-color: #325e9b;
  /* padding:40px  20px; */
}

.service {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center;  */
  min-height: 70vh;
  overflow: hidden;
}
.background{
  position: absolute;
  top: 0;
  left:0;
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
  color:white;
  gap:20px;
}
.title, .text{
  padding-left: 90px;

}
.title{
  font-size: 3rem;
  font-weight: bold;
  margin-bottom:40px;
}
.text{
  font-size: 1.8rem;
  line-height:1.6;
  white-space: pre-line; /* Respeta los saltos de línea */
}
.service:hover .background {
  transform: scale(1.1);
}
</style>
