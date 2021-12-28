<template>
  <input v-model="checking" />
</template>

<script>
export default {
  name: "test",
  computed: {
    checking: {
      get() {
        return this.checkedList.length === this.checklist.length;
      },
      set(newValue) {
        this.checkedList = newValue ? this.checklist.map((el) => el.value) : [];
      },
    },
  },
};
</script>

<style scoped></style>
