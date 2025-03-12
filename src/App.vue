<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar class="toolbar">
          <div class="logo">
            <router-link to="/">
              <img src="/logo.png" to="/" style="height: 70px;" width="auto;" />
            </router-link>
          </div>

          <!-- Contenedor de rutas centrado con flexbox -->
          <div class="rutas">
            <nav>
              <router-link to="/">Inicio</router-link>
              <router-link to="/Nosotros">Nosotros</router-link>
              <router-link to="/Servicios">Servicios</router-link>
              <router-link to="/Sectores">Sectores</router-link>
            </nav>
          </div> 
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view></router-view>
        <q-fab
        v-model="fabRight"
        vertical-actions-align="right"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action label-position="left" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action label-position="left" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-position="left" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-position="left" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue'

const fabLeft = ref(true)
const fabCenter = ref(true)
const fabRight = ref(true);

const onClick = () => {
  console.log('Clicked on a fab action')
}
const router = useRouter();

onMounted(() => {
  router.afterEach(() => {
    window.scrollTo(0, 0);
  });
});
</script>

<style scoped>
.logo {
  margin-left: 50px;
  margin-top: 10px;
}
.rutas{
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  gap: 40px;
}
nav a {
  font-size:20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out; /* Transición suave */
}
nav a.router-link-exact-active{
  color: #737375;
  border-bottom: 2px solid #325b9c; /* Línea debajo del enlace activo */
  padding-bottom: 5px; /* Espaciado para la línea */
}
@media (max-width: 600px){
  .logo{
    margin-left: 20px;
  }
}
</style>
