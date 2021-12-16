<template>
  <div class="clearAllContainer" @click="clearTodo">
    <button class="clearAllBtn">🤷‍♂️ clear all 🤷‍♂️</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearTodo() {
      this.$emit("removeAll");
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  margin: 0 auto;
}

.clearAllBtn {
  margin: 20px auto 0;
  color: white;
  display: block;
}
</style>
