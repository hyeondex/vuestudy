<template>
  <!--  <하위컴포넌트 :[하위컴포넌트에서 정의한 props 속성 이름 ] = "상위컴포넌트에서
  전달할 data 속성 key 값"/>-->
  <label>
    <input type="checkbox" @change="ckchange" />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    itemCheck: Array,
  }, //
  prop: [],
  data() {
    return {};
  },
  methods: {
    ckchange() {
      console.log("test");
      this.$emit("ckchange", true);
    },
  },
};
</script>

<style scoped></style>
