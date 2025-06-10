<template>
  <div class="container">
    <q-btn
      id="contact-btn"
      flat
      unelevated
      padding="none"
      color="transparent"
      no-caps
      class="no-border no-shadow no-hover"
    >
      <img class="icon" src="/icons/contactanos1.png" alt="Contáctanos" />

      <q-menu anchor="top middle" self="bottom middle">
        <q-list style="min-width: 150px">
          <q-item clickable v-ripple @click="openWhatsApp">
            <q-item-section avatar>
              <q-icon name="img:/icons/whatsapp.png" />
            </q-item-section>
            <q-item-section id="texto">
              <b>WhatsApp</b>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="openEmail">
            <q-item-section avatar>
              <q-icon name="img:/icons/correo.png" />
            </q-item-section>
            <q-item-section id="texto">
              <b>PQR</b>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
  <!-- <q-btn-dropdown flet unelevated padding="none" color="transparent" class="no-border no-shadow">
      <template v-slot:label>
        <img class="wha" src="/icons/btn-contactanos.png" alt="Contáctanos" style="height:250px;"/>
      </template>
      <q-list>
        <q-item clickable v-close-popup @click="openWhatsApp">
          <q-item-section>
            <q-icon name="img:/icons/whatsapp.png"/>
          </q-item-section>
          <q-item-section class="texto"><b>WhatsApp</b> </q-item-section>
        </q-item>
      </q-list>
  </q-btn-dropdown>-->
</template>
<style scoped>
#contact-btn {
  position: fixed;
  bottom: 190px;
  right: -180px;
  z-index: 50;
}
.icon {
  width: 25%;
}
@media (max-width: 1090px){
  #contact-btn{
    bottom: 230px;
  
  }
  .icon{
    width: 20%;
  }
}
@media (max-width: 600px) {
  #contact-btn{
    bottom: 180px;
    right: -200px;
  }
  .icon {
    width: 15%;
  }
}
@media (max-width: 380px) {
  #contact-btn {
    bottom: 170px;
    right: -220px;
  }
  .icon {
    width: 12%;
  }
}
</style>
<script setup>
const openWhatsApp = () => {
  window.open("https://wa.me/573027903706", "_blank");//link de wh
};
//correo para pqr
const openEmail = () => {
  window.location.href ="mailto:juridico@idimcol.com.co?subject=PQR%20-%20Idimcol&body=Por%20favor%20describa%20su%20petición,%20queja,%20reclamo%20o%20sugerencia:";
}
</script>