<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar class="toolbar">
          <div class="logo">
            <router-link to="/">
              <img src="/src/assets/logo.png" to="/" style="height: 70px;" width="auto;" />
            </router-link>
          </div>

          <!-- Contenedor de rutas centrado con flexbox -->
          <div class="rutas">
            <q-tabs align="center" class="tabs-container">
              <q-route-tab to="/" label="INICIO" />
              <q-route-tab to="/Nosotros" label="NOSOTROS" />
              <q-route-tab to="/Servicios" label="SERVICIOS" />
              <q-route-tab to="/Sectores" label="SECTORES" />
            </q-tabs>
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

.rutas {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35%;
}
</style>
