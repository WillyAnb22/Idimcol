<template>
  <div class="container"> <!-- Agregamos un div como contenedor raíz -->
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-date v-model="date" :events="events" event-color="orange" />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          class="text"
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="2025/03/01">
            <div class="text-h4 q-mb-md">2025/03/01</div>
            <p>Lorem ipsum dolor sit amet...</p>
          </q-tab-panel>

          <q-tab-panel name="2025/03/05">
            <div class="text-h4 q-mb-md">2025/03/05</div>
            <video class="video" src="video.mp4" controls />
            <p>Lorem ipsum dolor sit amet...</p>
          </q-tab-panel>

          <q-tab-panel name="2025/03/06">
            <div class="text-h4 q-mb-md">2025/03/06</div>
            <img class="img" src="https://baysanquality.com/wp-content/uploads/2022/07/image_picture_icon_143003.png" />
            <p>Lorem ipsum dolor sit amet...</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
    
    <!-- Inportacion del footer -->
    <Footer class="footer" /> 
  </div>
</template>

<script setup> 
import { ref } from "vue";
import Footer from '@/components/Footer.vue';  // Asegúrate de que el path es correcto

const splitterModel = ref(50);
const date = ref("2025/03/01");
const events = ["2025/03/01", "2025/03/05", "2025/03/06"];
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
  overflow: hidden;
}
.q-pa-md {
  display: flex;
  justify-content: center;
  align-items: center;
margin-top: 150px;  
  color: #325e9b;
}
.q-date{
  transform: scale(1.5);
}

.text {
  color: black;
}
img {
  width: 100%;
  height: auto;
}
.q-splitter {
  flex-grow: 1; /* Hace que ocupe todo el espacio disponible */
  height: 100%;
}
.video, .img{
  width: 50%;
  height: 50%;
  display:block;
  margin:0 auto;
}

/* .footer{
  margin-top: 250px;
} */

</style>
