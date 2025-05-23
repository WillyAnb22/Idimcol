<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <!-- Encabezado -->
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar class="toolbar">
          <div class="logo">
            <router-link to="/">
              <img src="/logos/logoBlanco.png" />
            </router-link>
          </div>

          <!-- Rutas visibles solo en pantallas grandes -->
          <div class="rutas q-hidden-xs" style="color: white;">
            <nav>
              <router-link to="/">Inicio</router-link>
              <router-link to="/NuestraEmpresa">Nuestra Empresa</router-link>
              <router-link to="/Servicios">Servicios</router-link>
              <router-link to="/Sectores">Sectores</router-link>
              <router-link to="/Conocenos">Conócenos</router-link>
              <router-link to="/Bienestar">Bienestar</router-link>
              <router-link to="/PQRS">PQR</router-link>
            </nav>
          </div>

          <!-- Botón de menú visible solo en pantallas pequeñas -->
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="menu-btn" />
        </q-toolbar>
      </q-header>

      <!-- Menu lateral con navegación -->
      <q-drawer v-model="rightDrawerOpen" side="right" bordered>
        <q-list>
          <q-item clickable v-ripple to="/" @click="rightDrawerOpen = false" class="menu-lateral">
            <q-item-section>Inicio</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/NuestraEmpresa"
            @click="rightDrawerOpen = false"
            class="menu-lateral"
          >
            <q-item-section>Nuestra Empresa</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/Servicios"
            @click="rightDrawerOpen = false"
            class="menu-lateral"
          >
            <q-item-section>Servicios</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/Sectores"
            @click="rightDrawerOpen = false"
            class="menu-lateral"
          >
            <q-item-section>Sectores</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/Conocenos"
            @click="rightDrawerOpen = false"
            class="menu-lateral"
          >
            <q-item-section>Conócenos</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/Bienestar"
            @click="rightDrawerOpen = false"
            class="menu-lateral"
          >
            <q-item-section>Bienestar</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/PQRS"
            @click="rightDrawerOpen = false"
            class="menu-lateral"
            >
            <q-item-section>PQR</q-item-section>
          </q-item>
          <div class="logoNegro-container">
            <img class="logoNegro" src="/logos/logoNegro.png" />
          </div>
        </q-list>
      </q-drawer>

      <!-- Contenedor de páginas -->
      <q-page-container>
        <router-view />
      </q-page-container>

      <!--Botón Contactanos-->
      <MyBtn />
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import MyBtn from "@/components/MyBtn.vue";

const route = useRoute();

const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<style scoped>
/* Estilos globales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 70px;
  height: auto;
}
/* Estilo del logo */
.logo {
  margin-left: 50px;
  margin-top: 10px;
}

/* Estilo de navegación */
.rutas {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Menu lateral*/
.menu-btn {
  margin-left: auto;
  display: none;
}
.menu-lateral {
  color: #02386b;
  font-size: 18px;
  font-weight: bold;
}
.menu-lateral:hover {
  background-color: #868686;
  color: #ffffff;
}
.logoNegro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.logoNegro {
  width: 100%;
}
nav {
  display: flex;
  gap: 40px;
  font-size: 20px;
  font-weight: bold;
}

nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

nav a.router-link-exact-active {
  color: #737375;
  border-bottom: 2px solid #325b9c;
  padding-bottom: 5px;
}

/* Estilo del footer */
.footer {
  margin-top: 40px;
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

.red-social img {
  height: 25px;
}

.social-link {
  text-decoration: none;
  font-size: 18px;
}

/* Responsivo */
@media (max-width: 1035px) {
  .btn-Eventos {
    position: fixed;
    bottom: 115px;
    left: 20px;
    z-index: 100;
  }
  .footer {
    padding: 20px;
  }
  .izquierda {
    padding-left: 40px;
    font-size: 11.5px;
  }
  .social-link {
    font-size: 15px;
  }
}
@media (max-width: 900px){
  nav{
    font-size: 19px;
    gap: 20px;
  }
}
@media (max-width: 800px) {
  .logo {
    margin-left: 20px;
  }
  img {
    width: 50px;
    height: auto;
  }
  nav {
    font-size: 18px;
  }
  .social-link {
    font-size: 13px;
  }
}
@media (max-width: 700px){
  nav{
    font-size: 16px;
      gap: 20px;
  }
}
@media (max-width: 610px) {
  .logo {
    margin-left: 10px;
  }
  img {
    width: 45px;
    height: auto;
  }
  nav {
    font-size: 14px;
    gap: 12px;
  }
  .btn-Pagina {
    position: fixed;
    bottom: 140px;
  }
  .izquierda {
    padding-left: 30px;
    font-size: 10px;
  }
  .red-social img {
    height: 30px;
  }
  span {
    display: none; /* Oculto en pantallas pequeñas */
  }
}
@media (max-width: 550px) {
  nav {
    gap: 12px;
  }
}
@media (max-width: 500px) {
  .logo {
    margin-left: 5px;
  }
  nav {
    font-size: 13px;
    gap: 12px;
  }
}
@media (max-width:470px){
  nav{
    font-size: 10px;
  }
}
@media (max-width: 400px) {
  .rutas {
    display: none;
  }
  .menu-btn {
    display: block;
  }
}
</style>
