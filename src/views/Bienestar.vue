<template>
  <div class="container">
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="fixed">
        <q-card>
          <q-card-section>
            <div class="text-h3">{{ dialogTitle }}</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="width: 500px; height: 700px; overflow-y: auto;">
            <img :src="dialogImage" style="width: 100%; margin-bottom:20px;"/>
            <p>{{ dialogText }}</p>
          </q-card-section>
        </q-card>
      </q-dialog>

      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="(item, index) in items" :key="index" class="example-item">
          <q-card flat bordered class="q-ma-sm">
            <img :src="item.imageUrl" class="card-image" @click="showDialog(item)" style="cursor: pointer" />
            <q-card-section>
              <div class="text-h5">{{ item.title }}</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>

    <Footer class="footer" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";

const fixed = ref(false);
const dialogTitle = ref("");
const dialogText = ref("");
const dialogImage = ref("");

function showDialog(item) {
  dialogTitle.value = item.title;
  dialogText.value = item.dialogText;
  dialogImage.value = item.dialogImage;
  fixed.value = true;
}
//Aquí se definen los datos para cada tarjeta, incluyendo título e imagen
const items = ref([
  {
    title: "Día de la Mujer",
    imageUrl:"https://i.pinimg.com/originals/d0/28/49/d02849269d00094b1109921a20d4ed87.jpg", // Ruta relativa desde la carpeta public
    dialogText: "En IDIMCOL, queremos agradecer a las mujeres que hacen y han sido parte de nuestra familia. Su dedicación, esfuerzo y talento han sido fundamentales para el crecimiento de nuestra empresa. Hoy y siempre, reconocemos su valiosa labor y el impacto positivo que generan en cada área donde están presentes. Gracias por ser inspiración, fortaleza y motor de cambio.",
    dialogImage: "/fotosBienestar/Día-Mujer.png"
  },
  {
    title: "Día de la madre",
    imageUrl: "https://www.shutterstock.com/image-vector/feliz-dia-de-la-madre-600nw-2290617869.jpg",
    dialogText: "Queremos celebrar y felicitar a todas las madres en su día. Gracias por su amor incondicional, por su entrega diaria y por motivarnos a ser mejores cada día. Su presencia es una fuente de inspiración y un pilar fundamental en nuestras vidas. ¡Feliz Día de la Madre!",
    dialogImage: "/fotosBienestar/Día-Madre.png"
  },
  {
    title:"Día de la Secretaria",
    imageUrl:"https://www.elinformador.com.co/images/stories/sociales/2019/04-abril/26entrete.jpg",
    dialogText:"Agradecemos tu dedicación y profesionalismo que hacen que todo funcione con armonía y eficacia. Gracias por ser parte fundamental de nuestra familia IDIMCOL. ¡Feliz Día de la Secretaria!",
    dialogImage:"/fotosBienestar/secretaria.png"
  }
]);
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}
.my-card {
  width: 100%;
  top: 40px;
  max-width: 550px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
p {
  font-size: 20px;
  text-align: justify;
}
.footer {
  margin-top: 20%;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
.example-item {
  height: 290px;
  width: 290px;
}
.card-image{
  width: 100%;
  height: 200px;
  object-fit: cover;
}
@media (max-width: 630px) {
  .my-card {
    max-width: 450px;
  }
}
@media (max-width: 450px) {
  .my-card {
    max-width: 350px;
    top: 20px;
  }
}
@media (max-width: 360px) {
  .my-card {
    max-width: 300px;
  }
  .footer {
    margin-top: 50px;
  }
  p {
    font-size: 15px;
  }
}
</style>
