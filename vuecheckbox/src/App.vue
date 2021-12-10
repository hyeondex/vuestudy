<template>
  <div id="app">
    <check-box></check-box>
  </div>
</template>

<script>
import checkBox from "./components/checkBox.vue";

export default {
  name: "App",
  components: {
    checkBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
