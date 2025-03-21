<template>
  <div class="fixed-button"  >
    <!-- Botón con imagen fijo en el lado izquierdo -->

      <img 
        src="/icons/contactanos.png" 
        width="200"
        height="180"
      />
      <!-- Menú con solo WhatsApp -->
      <q-menu anchor="top middle" self="bottom middle">
        <q-list style="min-width: 150px">
          <q-item clickable v-ripple @click="openWhatsApp">
            <q-item-section avatar>
              <q-icon name="img:/icons/whatsapp.png" />
            </q-item-section>
            <q-item-section>
              WhatsApp
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>

  </div>
</template>

<style scoped>
.fixed-button {
  position: fixed;
  right: 20px;  /* Ajusta la distancia desde el borde izquierdo */
  bottom: 20px; /* Ajusta la distancia desde la parte inferior */
  z-index: 100; /* Asegura que esté encima de otros elementos */
}
</style>


<script setup>
const openWhatsApp = () => {
  window.open("https://wa.me/573027903706", "_blank");
};
</script>

  <!-- <div class="q-px-sm q-py-lg">
    <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
      <q-fab  direction="up" icon="img:icons/contactanos.png">
      <q-fab-action color="green" @click="openWhatsApp">
        <q-icon name="img:https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"></q-icon>
      </q-fab-action>
      </q-fab>
    </div>
  </div> -->



// const openWhatsApp = () => {
//   window.open("https://wa.me/573101234567","_blank");
// }

  <!-- <div>
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
  </div> -->

