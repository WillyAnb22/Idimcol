<template>
  <div> <!-- Agregamos un div como contenedor raíz -->
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
            <p>Lorem ipsum dolor sit amet...</p>
          </q-tab-panel>

          <q-tab-panel name="2025/03/06">
            <div class="text-h4 q-mb-md">2025/03/06</div>
            <img src="fondo.png" />
            <p>Lorem ipsum dolor sit amet...</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>

    <footer /> <!-- Ahora está dentro del div principal -->
  </div>
</template>

<script setup> 
import { ref } from "vue";
import footer from '@/components/footer.vue';  // Asegúrate de que el path es correcto

const splitterModel = ref(50);
const date = ref("2025/03/01");
const events = ["2025/03/01", "2025/03/05", "2025/03/06"];
</script>

<style scoped>
.q-pa-md {
  color: #325e9b;
}
.text {
  color: black;
}
img {
  width: 100%;
  height: auto;
}
</style>
