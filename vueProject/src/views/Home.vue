<template>
  <div class="home">
    <h1>VueProject</h1>
    <div class="link-box">
      <router-link to="/vModel">Vue</router-link>
      <router-link to="/todoMain">todolist</router-link>
      <router-link to="/checkBoxMain">checkbox</router-link>
      <router-link to="/adrMain">address</router-link>
      <!--      <router-link to="/about"> about </router-link>-->
    </div>
  </div>
</template>

<script>
import "../css/app.css";
export default {
  name: "Home",
};
</script>

<style scoped></style>
