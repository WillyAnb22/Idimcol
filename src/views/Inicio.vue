<template>
  <div>
    <div class="container">
      <video ref="videoPlayer" autoplay playsinline controls>
        <source src="fotosInicio/video.mp4" type="video/mp4" />
      </video>
      <div>
        <p class="title">IDIMCOL</p>
      </div>
      <div>
        <p class="textoIzquierda">
          Ingeniería y desarrollos integrales
          <br />metalmecánicos de Colombia
        </p>
      </div>
      <div>
        <p class="textoDerecha">
          "Hay muchas razones por las que empezar
          <br />una empresa, pero solo una buena, una
          <br />legítima: cambiar el mundo"
        </p>
      </div>
    </div>
    <div>
      <div class="container2">
        <div class="imgFondo">
          <q-img src="/fotosInicio/frontal.png"></q-img>
        </div>
        <div class="logo">
          <q-img src="/logos/logoBlanco.png"></q-img>
        </div>
        <div class="text">CONOCE QUIENES SOMOS</div>
        <div class="btn">
          <q-btn color="primary" to="/NuestraEmpresa" label="Ir" style="width: 100px;" />
        </div>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue"; // Asegúrate de que el path es correcto

const videoPlayer = ref(null);
const isPlaying = ref(true);

onMounted(() => {
  const video = videoPlayer.value;
  video.muted = false; //Desmutear video

  const playVideo = () => {
    video.play().catch(error => {
      console.error(
        "El navegador bloqueó la reproducción automática con audio:",
        error
      );
    });
    document.removeEventListener("click", playVideo);
  };
  document.addEventListener("click", playVideo);
});

// const togglePlayPause = () => {
//   if (videoPlayer.value.paused){
//     videoPlayer.value.play();
//     isPlaying.value = true;
//   } else {
//     videoPlayer.value.pause();
//     isPlaying.value = false;
//   }
// };
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
video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
}
.video-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 07);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  z-index: 3;
}
.title {
  position: absolute;
  z-index: 3;
  font-size: 8rem;
  font-weight: bold;
  top: 8%;
  left: 3%;
}
.textoIzquierda {
  position: absolute;
  z-index: 3;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  top: 30%;
  left: 4%;
}
.textoDerecha {
  text-align: center;
  position: absolute;
  z-index: 3;
  font-size: 25px;
  font-weight: bold;
  top: 73%;
  left: 62%;
}
.container2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 20%;
  height: auto;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.text {
  position: relative;
  z-index: 2;
  font-size: 40px;
  font-weight: bold;
  top: 90px;
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
  gap: 10px;
}
.red-social,
img {
  height: 25px;
}
.social-link {
  text-decoration: none;
  font-size: 18px;
}
@media (max-width: 1500px) {
  .title {
    font-size: 7rem;
  }
  .textoIzquierda {
    font-size: 30px;
    left: 4%;
  }
  .textoDerecha {
    font-size: 25px;
    left: 60%;
  }
  .imgFondo {
    object-fit: cover;
    width: 110%;
    height: 100vh;
  }
  .text {
    font-size: 2.5rem;
    top: 14%;
  }
  .btn {
    top: 74%;
  }
}
@media (max-width: 1300px) {
  .textoDerecha {
    font-size: 20px;
    left: 65%;
  }
  .imgFondo{
    width: 130%;
  }
}
@media (max-width: 1250px) {
  .title {
    font-size: 100px;
  }
  .textoIzquierda {
    font-size: 30px;
    left: 50px;
    top: 33%;
  }
  .textoDerecha {
    font-size: 25px;
    left: 52%;
  }
  .imgFondo {
    position: absolute;
    object-fit: cover;
    width: 140%;
    height: 100vh;
  }
  .text {
    font-size: 2.5rem;
    top: 9%;
  }
  .btn {
    top: 70%;
  }
}
@media (max-width: 1100px) {
  .textoDerecha {
    left: 58%;
  }
  .text {
    top: 10%;
  }
}
@media (max-width: 1035px) {
  .title {
    font-size: 5.5rem;
  }
  .textoIzquierda {
    font-size: 1.3rem;
    left: 5%;
  }
  .textoDerecha {
    font-size: 1rem;
    left: 65%;
  }
  .imgFondo {
    width: 160%;
  }
  .text {
    top: 10%;
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
  .red-social,
  img {
    height: 20px;
  }
  .social-link {
    font-size: 15px;
  }
}
@media (max-width: 853px) {
  .title {
    font-size: 85px;
  }
  .textoIzquierda {
    width: 45%;
    left: 4%;
    top: 25%;
  }
  .textoDerecha {
    font-size: 1rem;
    width: 20rem;
    left: 59%;
  }
  .imgFondo {
    width: 300%;
  }
  .logo {
    width: 30%;
    top: 35%;
  }
  .text {
    font-size: 2.5rem;
    top: 4rem;
  }
  .btn {
    top: 70%;
  }
  .redes-sociales {
    gap: 10px;
  }
  .red-social {
    gap: 10px;
  }
  .red-social,
  img {
    height: 20px;
  }
  .social-link {
    font-size: 13px;
  }
}

@media (max-width: 780px) {
  .textoIzquierda {
    width: 24rem;
    right: 18rem;
  }
  .textoDerecha {
    font-size: 1rem;
    width: 20rem;
    left: 55%;
  }
  .imgFondo {
    width: 210%;
  }
}
@media (max-width: 630px){
  .title {
    font-size: 80px;
  }
  .textoIzquierda {
    font-size: 17px;
    top: 23%;
  }
  .textoDerecha{
    font-size: 15px;
    left: 47%;
  }
  .imgFondo {
    width: 250%;
  }
}
@media (max-width: 600px) {
  .title {
    font-size: 70px;
  }
  .textoDerecha {
    font-size: 14px;
    left: 45%;
  }
  .imgFondo {
    width: 270%;
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
  .red-social,
  img {
    height: 30px;
  }
  span {
    display: none; /* Se oculta en pantallas menores a 600px */
  }
}
@media (max-width: 550px) {
  .textoIzquierda {
    font-size: 16px;
    top: 23%;
  }
  .imgFondo {
    width: 320%;
  }
}
@media (max-width: 500px){
  .textoDerecha{
    left: 35%;
  }
  .text{
    font-size:35px;
  }
}
@media (max-width: 450px) {
  .title {
    top: 15%;
    font-size: 60px;
  }
  .textoIzquierda {
    top: 25%;
    font-size: 15px;
  }
  .textoDerecha {
    font-size: 12px;
    left:29%;
  }
  .imgFondo {
    width: 400%;
  }
  .logo {
    width: 60%;
    height: auto;
    top: 35%;
    left: 50%;
  }
  .text {
    font-size: 28px;
    top: 70px;
  }
  .btn {
    top: 70%;
  }
}
@media (max-width: 380px){
  .textoDerecha{
    font-size: 11px;
    top: 85%;
    left: 20%;
  }
  .imgFondo{
    width: 450%;
  }
}
@media (max-width: 330px){
  .textoDerecha{
    font-size: 10px;
    top: 84%;
    left: 15%;
  }
  .text {
    font-size: 23px;
    top: 7%;
  }

  .imgFondo{
    width: 470%;
  }
}
</style>