<template>
  <div>
    <div class="container">
      <!-- <audio ref="audioRef">
        <source src="/_Bienvenidos a IDIMC.mp3" type="audio/mpeg">
      </audio>-->
      <!-- <audio autoplay>
        <source src="/_Bienvenidos a IDIMC.mp3" type="audio/mpeg" />
      </audio> -->
      <video ref="videoPlayer" autoplay loop playsinline>
        <source src="/video-para web.mp4" type="video/mp4">
      </video>
      <div class="title">IDIMCOL</div>
      <div class="textoIzquierda">
        Ingeniería y desarrollos integrales
        <br />metalmecánicos de Colombia
      </div>
      <div class="textoDerecha">
        "Hay muchas razones por las que empezar
        <br />una empresa, pero solo una buena, una
        <br />legítima: cambiar el mundo"
      </div>
    </div>
    <div>
      <div class="container2">
        <div class="imgFondo">
          <q-img src="/frontal.png"></q-img>
        </div>
        <div class="logo">
          <q-img src="/logo.png"></q-img>
        </div>
        <div class="text">CONOCE QUIENES SOMOS</div>
        <div class="btn">
          <q-btn color="primary" to="/Nosotros" label="Ir" style="width: 100px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const videoPlayer = ref(null);
onMounted(() => {
  const video = videoPlayer.value;
  video.muted = false; // desmutear video
  
//intentar reproducir despues de interaccion
const playVideo = () => {
  video.play().catch(error =>{
    console.error('El navegador bloqueó la reproducción automática con audio:', error);
  });
  document.removeEventListener("click", playVideo);
};
document.addEventListener("click", playVideo);
});
// import { ref, onMounted } from "vue";

// const audioRef = ref(null);

// onMounted(() => {
//   audioRef.value.play(); //Reproduce automaticamente cuando se carga la página
// });
</script>
<style scoped>
.container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.title {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 8rem;
  font-weight: bold;
  top: 8rem;
  left: 3rem;
}

.textoIzquierda {
  position: relative;
  z-index: 1;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  top: 20rem;
  right: 28rem;
}

.textoDerecha {
  text-align: center;
  position: relative;
  z-index: 1;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  top: 41rem;
  left: 15rem;
}
.container2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.imgFondo {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
.logo {
  position: absolute;
  width: 15%;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.text {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  top: 10rem;
}
.btn {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
</style>