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
              <router-link to="/Nosotros">Nuestra Empresa</router-link>
              <router-link to="/Servicios">Servicios</router-link>
              <router-link to="/Sectores">Sectores</router-link>
            </nav>
          </div> 
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view></router-view>
        <!-- <MyBtn></MyBtn> -->
      <div class="footer">
      <div class="izquierda">
        Información de Contacto
        <br />Cra 13# 23-33 Girardot, Colombia
        <br />+57 302 7903706
        <br />gerencia@idimcol.com.co
        <hr style="margin-top: 10px;" />
        <p style="margin-top: 5px;">© 2025 IDIMCOL S.A.S. Todos los derechos reservados.</p>
      </div>
      <div class="redes-sociales">
        <a href="https://www.facebook.com/share/14ucNZh2Zi/" target="_blank" class="social-link">
          <div class="red-social">
            <img src="/facebook.png" />
            <span>idimcolSAS Colombia</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/idimcol7?igsh=MWt6OWZmZTh2Mm56Yw=="
          target="_blank"
          class="social-link"
        >
          <div class="red-social">
            <img src="/instagram.png" />
            <span>idimcol7</span>
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@idimcol?_t=ZS-8uIpWWEOBPj&_r=1"
          target="_blank"
          class="social-link"
        >
          <div class="red-social">
            <img src="/tik-tok.png" />
            <span>idimcol</span>
          </div>
        </a>
      </div>
    </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import MyBtn from '@/components/MyBtn.vue';

const router = useRouter();

onMounted(() => {
  router.afterEach(() => {
    window.scrollTo(0, 0);
  });
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

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
.footer {
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
.red-social,
img {
  height: 25px;
}
.social-link {
  text-decoration: none;
  font-size: 18px;
}
@media (max-width: 1035px){
  .footer {
    padding: 20px;
  }
  .izquierda {
    padding-left: 40px;
    font-size: 11.5px;
  }
  .redes-sociales {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .red-social {
    gap: 10px;
  }
  .red-social, img {
    height: 20px;
  }
  .social-link {
    font-size: 15px;
  }
}
@media (max-width: 850px){
  .redes-sociales {
    gap: 10px;
  }
.red-social {
    gap: 10px;
  }
.red-social, img {
    height: 20px;
  }
.social-link {
    font-size: 13px;
  }
}
@media (max-width: 600px){
  .logo{
    margin-left: 20px;
  }
  .izquierda {
    padding-left: 30px;
    font-size: 10px;
  }
  .redes-sociales {
    display: flex;
    flex-direction: column;
  }
  .red-social {
    gap: 8px;
  }
  .red-social, img {
    height: 30px;
  }
  span{
    display: none; /* Se oculta en pantallas menores a 600px */
  }
}
</style>
