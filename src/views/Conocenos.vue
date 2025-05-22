<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row">
      <div class="col-4">
        <q-img src="/fotosConocenos/frente.png" fit="cover" style="border-radius: 20px;"></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/FOTO29.jpg" fit="cover" style="border-radius: 20px;"></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/planta.jpg" fit="cover" style="border-radius: 20px;height:100% "></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/operario.png" fit="cover" style="border-radius: 20px;"></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/operario2.png" fit="cover" style="border-radius: 20px;"></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/operario3.png" fit="cover" style="border-radius: 20px; "></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/maquina1.jpg" fit="cover" style="border-radius: 20px;"></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/cnc.jpg" fit="cover" style="border-radius: 20px;height:70%;"></q-img>
      </div>
      <div class="col-4">
        <q-img src="/fotosConocenos/maquina3.jpg" fit="cover" style="border-radius: 20px;"></q-img>
      </div>
    </div>

    <div class="videos row">
      <div class="col-4">
        <video ref="video1" src="/fotosConocenos/Ajedrez.mp4" controls></video>
      </div>
      <div class="col-4">
        <video ref="video2" src="/fotosConocenos/Bodega.mp4" controls></video>
      </div>
      <div class="col-4">
        <video ref="video3" src="/fotosConocenos/Elevador.mp4" controls></video>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue"; // Asegúrate de que el path es correcto

const video1 = ref(null);
const video2 = ref(null);
const video3 = ref(null);

const videos = ref([]);

onMounted(() => {
  videos.value = [video1.value, video2.value, video3.value];
});
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.col-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  transition: transform 0.3s ease-in-out;
}

.col-4:hover {
  transform: scale(1.1);
}
.videos {
  display: flex;
  position: relative;
  top: 30px;
}
video {
  width: 80%;
  height: auto;
}
.footer {
  margin-top: 50px;
}
@media (max-width: 1035px) {
  .col-4 {
    width: 48%; /* Ajuste para que solo entren dos elementos por fila */
  }
  .videos {
    gap:20px;
  }
}
@media (max-width: 600px){
  .row{
    gap: 5px;
  }
  .col-4{
    width: 90%;
  }
}
</style>
