<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <!-- Encabezado -->
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar class="toolbar">
          <div class="logo">
            <router-link to="/">
              <img src="/logo.png" />
            </router-link>
          </div>

          <div class="rutas">
            <nav>
              <router-link to="/">Inicio</router-link>
              <router-link to="/NuestraEmpresa">Nuestra Empresa</router-link>
              <router-link to="/Servicios">Servicios</router-link>
              <router-link to="/Sectores">Sectores</router-link>
              <router-link to="/Conocenos">Conócenos</router-link>
              <router-link to="/Eventos">Eventos</router-link>
            </nav>
          </div>
        </q-toolbar>
      </q-header>

      <!-- Contenedor de páginas -->
      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- Botón MyBtn con posición dinámica -->
      <MyBtn :class="btnClass" />
    </q-layout>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import MyBtn from "@/components/MyBtn.vue";

const route = useRoute();
const btnClass = ref("btn-Eventos");

// Detectar la página actual y cambiar la posición del botón
watch(route, () => {
  btnClass.value = route.path === "/Eventos" ? "btn-Eventos" : "btn-Pagina";
});
</script>

<style scoped>
/* Estilos globales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
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

nav {
  display: flex;
  gap: 40px;
  font-size: 20px;
  font-weight: bold;
}

nav a {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

nav a.router-link-exact-active {
  color: #737375;
  border-bottom: 2px solid #325b9c;
  padding-bottom: 5px;
}

/* Posición del botón en la vista Eventos*/
.btn-Eventos {
  position: fixed;
  bottom: 150px;
  left: 20px;
  z-index: 100;
  width: 20px;
}

/* Posición del botón en otras paginas */
.btn-Pagina {
  position: fixed;
  bottom: 140px;
  right: 20px;
  z-index: 1;
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
@media (max-width: 600px) {
  .logo {
    margin-left: 10px;
  }
  img {
    width: 45px;
    height: auto;
  }
  nav {
    font-size: 15px;
    gap: 23px;
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
@media (max-width: 500px){
  .logo {
    margin-left: 5px;
  }
  nav {
    font-size: 13px;
    gap: 12px;
  }
}
</style>
