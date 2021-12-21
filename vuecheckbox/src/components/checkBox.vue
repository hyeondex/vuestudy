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
    //itemCheck: Array,
    //allChecked: Boolean,
    value: {
      String,
      Boolean,
    },
  }, //내가 부모한테 받은거
  prop: {
    event: "checked",
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
    checkedType() {
      return typeof this.checked === "boolean";
    },
    /* checked: {
      get() {
        return this.checkedType;
      },
      set() {
        if (this.checkedType) {
          return this.checked;
        }
        return this.checking.some((el) => el === this.value);
      },
    },*/
  },
  methods: {
    checkChange(e) {
      if (this.checkedType) {
        this.$emit("change", e.target.checked);
      } else {
        const idx = this.checked.indexOf(this.value);
        console.log(idx);
        let checking = [...this.checked];
        if (idx !== -1) {
          checking.splice(idx, 1);
          console.log(checking.splice(idx, 1));
        } else {
          checking.push(this.value);
        }
        this.$emit("change", checking);
      }
    },
  },
};
</script>

<style scoped></style>
