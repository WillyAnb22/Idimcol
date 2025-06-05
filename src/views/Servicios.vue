<template>
  <div>      
    <!-- Hero principal -->
    <div class="hero-container">
      <div class="hero" style="background-image: url('/Sector-Servicio/1.png')">
        <div class="overlay">
          <div class="title">ESTRUCTURAS MÉTALICAS</div>
          <div class="text">
            Ingeniería de detalle, simulación, cálculo estructural, análisis de cargas y personal altamente calificado,
            son los componentes que acompañan nuestros procesos de calibración, fabricación y montaje de sus proyectos industriales.
          </div>
        </div>
      </div>

      <div class="hero" style="background-image: url('/Sector-Servicio/2.png')">
        <div class="overlay">
          <div class="title">PROYECTOS INDUSTRIALES</div>
          <div class="text">
            La planificación estratégica, el análisis financiero, la gestión de proyectos y el control de costos son los pilares que respaldan 
            nuestra ingeniería y desarrollo, garantizando la ejecución exitosa de cada proyecto. Nuestro enfoque integral permite entregar 
            soluciones eficientes, optimizando recursos y maximizando los resultados.
          </div>
        </div>
      </div>

      <div class="hero" style="background-image: url('/Sector-Servicio/3.png')">
        <div class="overlay">
          <div class="title"> MECANIZADO</div>
          <div class="text">
            Procesos computarizados y convencionales se unen en la fabricación, reparación y repotenciación de todo tipo de piezas, 
            partes y repuestos, que respaldan sus necesidades de producción y mantenimiento.
          </div>
        </div>
      </div>

      <div class="hero" style="background-image: url('/Sector-Servicio/4.png')">
        <div class="overlay">
          <div class="title">DISEÑO MECÁNICO</div>
          <div class="text">
            Apoyados en el software de diseño asistido por computador (CAD) Solidworks, nuestro departamento de ingeniería y diseño 
            evalúa las condiciones técnicas y conceptuales de sus equipos y máquinas industriales y elementos para garantizar el 
            óptimo desarrollo de sus operaciones.
          </div>
        </div>
      </div>
    </div>
    <!-- Importación del footer -->
    <Footer class="footer" />
  </div>
</template>


<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";

// const services = ref([
// {
//   image: "/Sector-Servicio/estructurasMetalicas.png",
//   title: "ESTRUCTURAS MÉTALICAS",
//   description:
//     "Ingeniería de detalle, simulación, cálculo estructural, análisis de cargas y personal altamente calificado, son los componentes que acompañan nuestros procesos de calibración, fabricación y montaje de sus proyectos industriales."
// },
// {
//   image: "/Sector-Servicio/proyectosIndustriales.png",
//   title: "PROYECTOS INDUSTRIALES",
//   description:
//     "La planificación estratégica, el análisis financiero, la gestión de proyectos y el control de costos son los pilares que respaldan nuestra ingeniería y desarrollo, garantizando la ejecución exitosa de cada proyecto. Nuestro enfoque integral permite entregar soluciones eficientes, optimizando recursos y maximizando los resultados."
// },
// {
//   image: "/Sector-Servicio/mecanizado.png",
//   title: "MECANIZADO",
//   description:
//     "Procesos computarizados y convencionales se unen en la fabricación, reparación y repotenciación de todo tipo de piezas, partes y repuestos, que respaldan sus necesidades de producción y mantenimiento."
// },
// {
//   image: "/Sector-Servicio/diseñoMecanico.png",
//   title: "DISEÑO MECÁNICO",
//   description:
//     "Apoyados en el software de diseño asistido por computador (CAD) Solidwoks, nuestro departamento de ingeniería y diseño evalúa las condiciones técnicas y conceptuales de sus equipos y máquinas industriales y elementos para garantizar el óptimo desarrollo de sus operaciones."
// }
// ]);
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
.hero-container{
  display: grid;
  gap: 2rem;
}
.hero {
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* oscurece un poco la imagen */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: rgb(195, 195, 195);
  margin-bottom: 1rem;
}
.text {
  font-size: 30px;
  color: white;
  max-width: 90%;
  text-align: justify;
}

@media (max-width: 1500px) {
  .service {
    min-height: 65vh;
  }
  .title {
    font-size: 3rem;
    margin-bottom: 30px;
    margin-top: 5%;
  }
  .text {
    font-size: 1.8rem;
  }
}
@media (max-width: 1200px) {
  .service {
    min-height: 55vh;
  }
  .title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-top: 8%;
  }
  .text {
    font-size: 1.3rem;
  }
}
@media (max-width: 1000px) {
  .service {
    min-height: 30vh;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 2px;
    margin-top: 2%;
  }
  .text {
    font-size: 1.1rem;
  }
}
@media (max-width: 850px) {
  .service {
    min-height: 30vh;
  }
  .title {
    font-size: 30px;
    margin-bottom: 2px;
    margin-top: 5%;
  }
  .text {
    font-size: 17px;
  }
}
@media (max-width: 768px) {
  .service .title {
    font-size: 1.8rem;
  }
  .service .text {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  /* .service {
    min-height: 30vh;
  } */
  .title {
    font-size: 24px;
    margin-bottom: 2px;
    margin-top: 5%;
  }
  .text {
    font-size: 14px;
  }
}
</style>
