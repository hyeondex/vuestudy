<template>
  <label :class="{ checked: clickCheck }" class="label">
    <input
      type="checkbox"
      :value="value"
      @change="onChange"
      :checked="clickCheck"
      @input="checkedList()"
    />
    <slot name="span"></slot>
  </label>
</template>
<!-- props로 내려 받은 값은 자식 컴포넌트에서 변경하면 안됨.
v-model을 사용 할 수 없음
-->

<script>
export default {
  name: "checkBox",
  props: ["value", "checking"],
  model: {
    prop: "checking",
    event: "change",
  },
  data() {
    return {
      arry: [],
    };
  },
  computed: {
    clickCheck() {
      console.log(this.value);
      console.log(this.checking);
      return this.checking.some((el) => el === this.value);
    },
    /*         : {
      get() {
        return this.this.checking.value === true;
      },
      set(value) {},
    }*/
  },

  methods: {
    checkedList() {},
    onChange() {
      console.log("자식이 부모에게 누르면서 보내는 것 데이터로 사용할 배열");
      console.log(this.checking);
      const idx = this.checking.indexOf(this.value);
      if (idx === -1) {
        this.arry.push(this.value); //배열값 바꾸는건 오류 안남
      } else {
        this.arry.splice(idx, 1);
      }
      this.$emit("change", this.checking); // 참조만해야됨...
      //변수 선언해서 넘기기...
    },
  },
};
</script>

<style scoped></style>
