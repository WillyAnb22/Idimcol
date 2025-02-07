<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div>
        hola
        <div class="btn-group" role="group" arial-label="Basic mixed styles example">
          <button type="button" class="btn btn-danger me-2"><router-link to="/" class="text-white">Login</router-link></button>
          <button type="button" class="btn btn-danger me-2"><router-link to="/hello" class="text-white">Hello</router-link></button>
          <button type="button" class="btn btn-danger me-2"><router-link to="/home" class="text-white">Home</router-link></button>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default{

}
</script>
<style scoped>

</style>