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
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

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
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active{
  font-weight: bold;
  color: #325b9c;
}
</style>
