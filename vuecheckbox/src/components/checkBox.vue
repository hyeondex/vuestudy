<template>
  <!--  <하위컴포넌트 :[하위컴포넌트에서 정의한 props 속성 이름 ] = "상위컴포넌트에서
  전달할 data 속성 key 값"/>-->
  <label>
    <input type="checkbox" @change="checkChange" :value="value" />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    //itemCheck: Array,
    //allChecked: Boolean,
    value: {
      String,
      Boolean,
    },
  }, //내가 부모한테 받은거
  prop: {
    event: "ckchange",
    prop: "checking",
  },
  data() {
    return {};
  },
  computed: {
    checkChange() {
      if (typeof this.value === "boolean") {
        return;
      } else {
        return this.checking.some((el) => el === this.value);
      }
    },
  },
  methods: {
    /*checkChange(e) {
      e = event.target.value;
      console.log(e);
      if (typeof this.value === "boolean") {
        this.checking = true;
      } else {
        this.checking.push(e);
        console.log(this.checking);
      }
      console.log(this.checking);
      /!**!/
    },*/
  },
};
</script>

<style scoped></style>
