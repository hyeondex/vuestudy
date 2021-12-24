<template>
  <!--  <하위컴포넌트 :[하위컴포넌트에서 정의한 props 속성 이름 ] = "상위컴포넌트에서
  전달할 data 속성 key 값"/>-->
  <label :class="{ checked: checked }">
    <input
      type="checkbox"
      :value="value"
      :checked="checked"
      @change="checkChange"
    />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    checking: {
      Boolean,
      Array,
    }, // 부모한테서 받은 V-MODEL
    itemCheck: Array,
    value: {
      Boolean,
      Array,
    },
  }, //내가 부모한테 받은거
  model: {
    event: "change",
    prop: "checking", // 부모한테서 받은 V-MODEL
  },
  data() {
    return {};
  },
  computed: {
    checkType() {
      return typeof this.value === "boolean";
    },
    checked() {
      if (this.checkType) {
        console.log("전체선택");
        return this.value;
      } else{
        return this.checking.some((el) => el === this.value);
      }
      /*else {
        console.log(this.checked);
        const list = this.checking.some((el) => el === this.value);
        /!*const idx = list.indexof(this.value);*!/
        console.log(list);
        /!* if (idx === -1) {
          this.checking.push(this.value);
        }*!/
        return list;
      }*/
      return this.value;
    },
  },
  methods: {
    checkChange() {
      if(){

      }
    },
  },
};
</script>

<style scoped></style>
