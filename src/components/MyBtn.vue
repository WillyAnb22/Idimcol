<template>
  <div class="q-px-sm q-py-lg">
    <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
      <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="primary" @click="onClick" icon="mail" />
        <a href="https://wa.me/573101234567" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="50px">
</a>
        <q-fab-action color="secondary" @click="onClick" icon="alarm" />
      </q-fab>
    </div>
  </div>
</template>
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

// <script setup>
// import { ref } from 'vue'

// const fabLeft = ref(true)
// const fabCenter = ref(true)
// const fabRight = ref(true);

// const onClick = () => {
//   console.log('Clicked on a fab action')
// }
// </script>
