<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row">
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
      <div class="col-4">
        <q-img src="fondo.png"></q-img>
      </div>
    </div>
    <div class="q-col-gutter-md row">
      <p>Sección Videos</p>
      <div class="col-4">
        <q-video src="video.mp4"></q-video>
      </div>
      <div class="col-4">
        <video src="video.mp4"></video>
      </div>
    </div>

  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.col-4,
.video {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  /* Ajusta el tamaño de la imagen */
  transition: transform 0.3s ease-in-out;
}

.col-4:hover,
.video:hover {
  transform: scale(1.1);
}
video {
  width: 70%;
  height: auto;
  max-width: 700px; /* Ajusta el tamaño máximo del video */
}

.full-width {
  width: 100%;
}

</style>