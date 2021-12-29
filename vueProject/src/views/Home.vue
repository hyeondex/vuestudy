<template>
  <div class="home">
    <h1>VueProject</h1>
    <router-link to="/vModel">V-model</router-link>
    <router-link to="/todoMain">todolist</router-link>
    <router-link to="/about"> about </router-link>
  </div>
</template>

<script>
import "../css/app.css";
export default {
  name: "Home",
};
</script>

<style scoped></style>
