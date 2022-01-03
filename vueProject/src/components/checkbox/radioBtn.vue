<template>
  <label :class="{ checked: radioCheck === this.val, label: true }">
    <input
      type="radio"
      :value="val"
      :name="name"
      :radioCheck="radioCheck"
      @change="radioEvent"
    />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "radioBtn",
  props: {
    radioCheck: {
      type: String,
    },
    val: { type: String },
    name: { type: String },
  },
  model: {
    // 부모의 v-model임
    prop: "radioCheck",
    event: "change",
  },
  computed: {},
  methods: {
    radioEvent(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style scoped></style>
