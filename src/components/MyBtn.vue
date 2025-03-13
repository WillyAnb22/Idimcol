<template>
  <div>
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
  </div>
</template>
<script setup>
import { ref } from 'vue'

const fabLeft = ref(true)
const fabCenter = ref(true)
const fabRight = ref(true);

const onClick = () => {
  console.log('Clicked on a fab action')
}
</script>

<style scoped>
</style>