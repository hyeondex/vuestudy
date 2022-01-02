<template>
  <!--  <하위컴포넌트 :[하위컴포넌트에서 정의한 props 속성 이름 ] = "상위컴포넌트에서
  전달할 data 속성 key 값"/>-->
  <label :class="{ checked: checking }">
    <input
      type="checkbox"
      :value="value"
      :checked="checking"
      @change="checkChange"
    />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    //부모한테 받은 data
    checked: {
      // 부모한테서 받은 V-MODEL
      type: [Boolean, Array], // type 적어주기
    },
    value: {
      type: String,
    },
  },
  model: {
    // 부모한테서 받은 V-MODEL
    event: "change",
    prop: "checked", //부모한테 받은 v-model의 이름을 자식 component에서 checked로 바꿈
  },
  computed: {
    checkType() {
      //value에 들어가는 값 1.체크 하나일때 boolean 2.checked 배열
      return typeof this.checked === "boolean";
    },
    checking() {
      if (this.checkType) {
        console.log("전체선택" ,this.value);
        return this.value;
      } else {
        return this.checked.some((el) => el === this.value);
      }
    },
  },
  methods: {
    checkChange(event) {
      if (!this.checkType) {
        const idx = this.checked.indexOf(this.value);
        if (idx === -1) {
          this.checked.push(this.value);
          console.log("push");
        } else {
          this.checked.splice(idx, 1);
          console.log("splice ");
        }
        this.$emit("change", this.checked); // checked 된 배열
      } else {
        console.log(event.target.checked); // checkboxAll의 boolean
        this.$emit("change", event.target.checked);
      }
    },
  },
};
</script>

<style scoped></style>
