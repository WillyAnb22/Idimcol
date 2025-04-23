<template>
  <div class="q-px-sm q-py-lg">
    <div class="column items-center" >
      <!-- Botón con imagen -->
      <q-btn flat round dense class="contact-btn">
        <img  class="icon" src="/icons/contactanos.png" alt="Contáctanos" />
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
      </q-btn>
    </div>
  </div>
</template>
<style scoped>
.contact-btn {
  position:fixed;
  right: -200px;
  bottom:150px;
  z-index:100;
}
.icon{
  height: auto;
  width: 30%;
}
@media (max-width: 600px) {
  .icon {
    width: 24%;
  }
}
@media (max-width: 380px) {
  .icon  {
    width: 20%;
  }
}
</style>
<script setup>
const openWhatsApp = () => {
  window.open("https://wa.me/573027903706", "_blank");
};
</script>