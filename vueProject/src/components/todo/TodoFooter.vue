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

<style scoped></style>
