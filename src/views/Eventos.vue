<template>
  <div class="container">
    <!-- Agregamos un div como contenedor raíz -->
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
          <q-tab-panel name="2025/03/05">
            <div class="text-h4 q-mb-md">2025/03/05</div>
            <!-- <video class="video" src="video.mp4" controls /> -->
            <img class="img" src="/Miércoles-Ceniza.png" />
            <br />
            <p>
              Que este día sea el inicio de un tiempo de esperanza y renovación. Que la ceniza en nuestra frente sea un
              símbolo de nuestra disposición a cambiar y a seguir a Cristo. Que este tiempo nos prepare para celebrar la alegría de la Pascua."
            </p>
          </q-tab-panel>

          <q-tab-panel name="2025/03/08">
            <div class="text-h4 q-mb-md">2025/03/08</div>
            <img class="img" src="/Día-Mujer.png" />
            <br />
            <p>
              "Hoy queremos expresar nuestro más sincero agradecimiento a todas las mujeres que, con su dedicación y esfuerzo,
              construyen un mundo mejor. Su trabajo, su amor y su sabiduría son un ejemplo para todos nosotros. En este Día de
              la Mujer, celebramos su grandeza y les deseamos un futuro lleno de éxitos y felicidad."
            </p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>

    <!-- Inportacion del footer -->
    <Footer class="footer" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Footer from '@/components/Footer.vue';  // Asegúrate de que el path es correcto

const splitterModel = ref(50);
const date = ref(getCurrentDate());  // Se inicia con la fecha actual
const events = ["2025/03/05", "2025/03/08"];
let intervalId = null;

// Función para obtener la fecha actual en formato "YYYY/MM/DD"
function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split("T")[0].replace(/-/g, "/"); // Convierte a "YYYY/MM/DD"
}

// Se ejecuta cuando el componente se monta
onMounted(() => {
  // Actualizar la fecha al iniciar
  date.value = getCurrentDate();

  // Configurar un intervalo para actualizar la fecha cada día a la medianoche
  intervalId = setInterval(() => {
    date.value = getCurrentDate();
  }, 86400000); // 86,400,000 ms = 24 horas
});

// Limpiar el intervalo cuando el componente se desmonta
onUnmounted(() => {
  clearInterval(intervalId);
});
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
.q-date {
  transform: scale(1.5);
}

.text {
  color: black;
}
img {
  width: 150%;
  height: 100px;
}
p {
  font-size: 20px;
  text-align: justify;
}
.q-splitter {
  flex-grow: 1; /* Hace que ocupe todo el espacio disponible */
  height: 100%;
}
.video,
.img {
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto;
}

.footer {
  margin-top: 25px;
}
</style>
