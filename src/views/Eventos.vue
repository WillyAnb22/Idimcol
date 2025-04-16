<template>
  <div class="container">
    <div class="row">
      <q-card class="my-card">
        <img src="/Día-Mujer.png" />
        <q-card-section>
          <div class="text-h4">Día de la mujer</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>
            "En IDIMCOL, queremos agradecer a las mujeres que hacen y han sido parte de nuestra familia. Su dedicación,
            esfuerzo y talento han sido fundamentales para el crecimiento de nuestra empresa. Hoy y siempre, reconocemos
            su valiosa labor y el impacto positivo que generan en cada área donde están presentes. Gracias por ser inspiración,
            fortaleza y motor de cambio."
          </p>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-card-section>
          <div class="text-h4">Día de la mujer</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>
            "En IDIMCOL, queremos agradecer a las mujeres que hacen y han sido parte de nuestra familia. Su dedicación,
            esfuerzo y talento han sido fundamentales para el crecimiento de nuestra empresa. Hoy y siempre, reconocemos
            su valiosa labor y el impacto positivo que generan en cada área donde están presentes. Gracias por ser inspiración,
            fortaleza y motor de cambio."
          </p>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-card-section>
          <div class="text-h4">Día de la mujer</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>
            "En IDIMCOL, queremos agradecer a las mujeres que hacen y han sido parte de nuestra familia. Su dedicación,
            esfuerzo y talento han sido fundamentales para el crecimiento de nuestra empresa. Hoy y siempre, reconocemos
            su valiosa labor y el impacto positivo que generan en cada área donde están presentes. Gracias por ser inspiración,
            fortaleza y motor de cambio."
          </p>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-card-section>
          <div class="text-h6">Día de la mujer</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>
            "En IDIMCOL, queremos agradecer a las mujeres que hacen y han sido parte de nuestra familia. Su dedicación,
            esfuerzo y talento han sido fundamentales para el crecimiento de nuestra empresa. Hoy y siempre, reconocemos
            su valiosa labor y el impacto positivo que generan en cada área donde están presentes. Gracias por ser inspiración,
            fortaleza y motor de cambio."
          </p>
        </q-card-section>
      </q-card>
    </div>
    <!-- Agregamos un div como contenedor raíz -->
    <!-- <q-splitter v-model="splitterModel" style="height: 450px">
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
            <video class="video" src="video.mp4" controls />
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
    </q-splitter>-->
    <!-- <div class="tarjeta">
      <div class="contenido">
        <q-img src="fondo.png" fit="cover" style="border-radius: 20px;"></q-img>
        <p>14/04/2025</p>
        <P>
          bla la lechuza hace shh todos calladitos, todos calladitos hace shhhh
          <br />la lucehza, tres tristes trigues comen trigo en un trigal
        </P>
      </div>
    </div>
    <div class="tarjeta">
      <div class="contenido">
        <q-img src="fondo.png" fit="cover" style="border-radius: 20px;"></q-img>
        <p>14/04/2025</p>
        <P>
          bla la lechuza hace shh todos calladitos, todos calladitos hace shhhh
          <br />la lucehza, tres tristes trigues comen trigo en un trigal
        </P>
      </div>
    </div>
    <div class="tarjeta">
      <div class="contenido">
        <q-img src="fondo.png" fit="cover" style="border-radius: 20px;"></q-img>
        <p>14/04/2025</p>
        <P>
          bla la lechuza hace shh todos calladitos, todos calladitos hace shhhh
          <br />la lucehza, tres tristes trigues comen trigo en un trigal
        </P>
      </div>
    </div>
        <div class="tarjeta">
      <div class="contenido">
        <q-img src="fondo.png" fit="cover" style="border-radius: 20px;"></q-img>
        <p>14/04/2025</p>
        <P>
          bla la lechuza hace shh todos calladitos, todos calladitos hace shhhh
          <br />la lucehza, tres tristes trigues comen trigo en un trigal
        </P>
      </div>
    </div>-->
    <!-- Inportacion del footer -->
    <Footer class="footer" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Footer from "@/components/Footer.vue"; // Asegúrate de que el path es correcto

const splitterModel = ref(50);
const date = ref(getCurrentDate()); // Se inicia con la fecha actual
const events = ["2025/03/05", "2025/03/08"];
let intervalId = null;

// Función para obtener la fecha actual en formato "YYYY/MM/DD"
function getCurrentDate() {
  const today = new Date();
  return today
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "/"); // Convierte a "YYYY/MM/DD"
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
/* .container {
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
  flex-grow: 1; 
  height: 100%;
}
.video,
.img {
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto;
} */
/* .tarjeta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.contenido{
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 400px;
}
.img-tarjeta{
  width: 100%;
  max-height: 250px;
  border-radius: 20px;
  margin-bottom: 10px;
}
p{
  font-size:18px;
  margin: 5px 0;
  text-align:justify;
} */
.row {
  gap: 50px;
}
.my-card {
  left: 10%;
  top: 40px;
  width: 100%;
  max-width: 550px;
}
p{
  font-size: 20px;
}
.footer {
  margin-top: 10%;
}
</style>
