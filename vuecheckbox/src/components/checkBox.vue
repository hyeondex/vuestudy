<template>
  <label :class="{ checked: clickCheck }" class="label">
    <input
      type="checkbox"
      :value="value"
      @change="onChange"
      :checked="clickCheck"
    />
    <slot name="span"></slot>
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: ["value", "checking"],
  model: {
    prop: "checking",
    event: "change",
  },
  data() {
    return {};
  },
  computed: {
    clickCheck() {
      return this.checking.some((el) => el === this.value);
    },
  },
  methods: {
    onChange() {
      const idx = this.checking.indexOf(this.value);
      if (idx === -1) {
        this.checking.push(this.value);//배열값 바꾸는건 오류 안남
      } else {
        this.checking.splice(idx, 1);
      }
      this.$emit("change", this.checking); // 참조만해야됨...
      //변수 선언해서 넘기기...
    },
  },
};
</script>

<style scoped></style>
