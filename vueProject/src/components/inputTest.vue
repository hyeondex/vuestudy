<template>
  <div>
    <label> {{ label }}</label>
    <input type="text" :value="modelValue" @input="inputEvent" />
  </div>
</template>

<script>
export default {
  name: "inputTest",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: null,
    },
  },
  methods: {
    inputEvent(e) {
      console.log(e.target.value);
      this.$emit("input", e.target.value);
      //emit으로 보내는 event는 이벤트 이름을 보내야함 method이름 말고
    },
  },
};
</script>

<style scoped></style>
