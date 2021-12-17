<template>
  <!--  <하위컴포넌트 :[하위컴포넌트에서 정의한 props 속성 이름 ] = "상위컴포넌트에서
  전달할 data 속성 key 값"/>-->
  <label>
    <input type="checkbox" @change="ckchange()" :value="value" />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    itemCheck: Array,
    allChecked: Boolean,
  }, //내가 부모한테 받은거
  prop: {
    event: "ckchange",
  },
  data() {
    return {
      checking: [],
  },
  computed: {
    /*  ckchange() {
      if(){

      }
    },*/
  },
  methods: {
    ckchange() {
      var test = typeof this.value;
      console.log(this.value);
      if (typeof test === "boolean") {
        console.log("test");
      } else {
        console.log("배열");
      }
      this.$emit("chckange", this.checking);
    },
  },
};
</script>

<style scoped></style>
