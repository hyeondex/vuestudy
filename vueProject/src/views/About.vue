<template>
  <div class="about">
    inputtest
    <input-test v-model="inputText" label="Email : " type="email" />
    {{ inputText }}
  </div>
</template>

<script>
import inputTest from "../components/inputTest.vue";
export default {
  name: "About",
  components: {
    inputTest,
  },
  data() {
    return {
      inputText: "",
    };
  },
};
</script>

<style scoped></style>
