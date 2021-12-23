<template>
  <!--  <하위컴포넌트 :[하위컴포넌트에서 정의한 props 속성 이름 ] = "상위컴포넌트에서
  전달할 data 속성 key 값"/>-->
  <label :class="{ checked: checkcheck }">
    <input
      type="checkbox"
      :value="value"
      :checked="checkcheck"
      @change="checkChange"
    />
    <slot name="span" />
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    allChecked: Boolean,
    itemCheck: Array,
    value: {
      String,
      Boolean,
    },
  }, //내가 부모한테 받은거
  prop: {
    event: "change",
    prop: "checking",
  },
  data() {
    return {};
  },
  computed: {
    // data관련
    // cache(잠시저장)을 하는 기능있음 로컬 장소에 파일을 미리 받아 두는 역할
    // get(){} 값을 가져오는거
    // set(){} 그 값으로 설정하는거
    checkcheck: {
      get() {
        console.log(this.value);
        return this.value;
      },
      set(newVal) {
        if (!newVal) {
          console.log(newVal);
        } else {
          console.log(newVal);
          return this.value.push(...this.checking);
          //
        }
      },
    },
  },
  methods: {
    /*checkChange(e) {
      if (this.checkedType) {
        this.$emit("change", e.target.checkcheck);
        console.log(e.target.checkcheck);
      } else {
        const idx = this.checkcheck.indexOf(this.value);
        console.log(idx);
        let checking = [...this.checkcheck];
        if (idx !== -1) {
          checking.splice(idx, 1);
          console.log(checking.splice(idx, 1));
        } else {
          checking.push(this.value);
        }
        this.$emit("change", checking);
      }
    },*/
    checkChange() {
      this.$emit("checkChange", this.value);
    },
  },
};
</script>

<style scoped></style>
