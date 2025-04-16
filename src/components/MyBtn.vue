<template>
  <div class="fixed-button">
    <!-- Botón con imagen fijo en el lado izquierdo -->
    <img class="btn" src="/icons/contactanos.png" />
    <!-- Menú con solo WhatsApp -->
    <q-menu anchor="top middle" self="bottom middle">
      <q-list style="min-width: 150px">
        <q-item clickable v-ripple @click="openWhatsApp">
          <q-item-section avatar>
            <q-icon name="img:/icons/whatsapp.png" />
          </q-item-section>
          <q-item-section>WhatsApp</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<style scoped>
.btn {
  height: 150px;
  position: fixed;
  bottom: 140px;
  right: 20px;
  z-index: 1;
}
@media (max-width: 600px) {
  .btn {
    height: 140px;
  }
}
@media (max-width: 400px) {
  .btn{
    right: 20px;
  }
}
</style>


<script setup>
const openWhatsApp = () => {
  window.open("https://wa.me/573027903706", "_blank");
};
</script>
