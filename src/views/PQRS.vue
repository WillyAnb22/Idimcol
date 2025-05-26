<template>
  <div>
    <div class="contenedor">
      <p class="titulo">Información PQR</p>
      <div class="contenido">
        <q-img class="imagen" src="/pqr.png"></q-img>
        <div class="texto">
          <p id="subtitulo">Envíanos tu solicitud</p>
          <hr />
          <br />
          <p>
            Idimcol S.A.S informa que cualquier PQR (Petición, Queja y Reclamo ),
            puede presentarse a través de los siguientes canales de atención:
          </p>
          <p id="lineasAtencion">Línea de Atención al Cliente:</p>302 7903706
          <p id="lineasAtencion">Línea fija:</p>607-7013450
          <p id="lineasAtencion">Correo Electrónico:</p>juridico@idimcol.com.co
        </div>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>


<style scoped>
.contenedor {
  padding: 20px;
}
.titulo {
  text-align: center;
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: bold;
  font-style: italic;
}
.contenido {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 40px;
}
.imagen {
  width: 80%;
  height: auto;
  border-radius: 10px;
}
#subtitulo {
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
}
hr {
  height: 5px;
  background-color: rgb(117, 33, 22);
  border: none;
  width: 100%;
  margin: 20px 0;
}
#lineasAtencion {
  font-weight: bold;
}
.texto {
  min-width: 250px;
  font-size: 20px;
}
@media (max-width: 950px) {
  .contenido {
    grid-template-columns: 1fr;
  }

  .imagen {
    width: 100%;
  }

  .titulo {
    font-size: 40px;
  }

  #subtitulo {
    font-size: 30px;
  }
}
</style>
<script setup>
import Footer from "@/components/Footer.vue";
</script>