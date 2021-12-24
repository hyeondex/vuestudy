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
    },  // 부모한테서 받은 V-MODEL
    itemCheck: Array,
    value: {
      Boolean,
      Array,
    },
  }, //내가 부모한테 받은거
  model: {
    event: "change",
    prop: "checking", // 부모한테서 받은 V-MODEL  },
  data() {
    return {};
  },
  computed: {
    // data관련
    // cache(잠시저장)을 하는 기능있음 로컬 장소에 파일을 미리 받아 두는 역할
    // get(){} 값을 가져오는거
    // set(){} 그 값으로 설정하는거
    checked: {
      get() {
        console.log("DO");
        if (typeof this.value === "boolean") {
          return this.value;
        }
        return this.value;
        //value에 들어가는 값 1.체크 하나일때 boolean 2.checked 배열
      },
      set(val) {
        console.log(val);

        // 전체 체크
        /**/
      },
    },
  },
  methods: {
    checkChange() {},
    /*checkChange(e) {
      this.$emit("change", e.target.checked);
      if (e.target.checked) {
        //console.log(e.target.checked);
        this.checking = [];
        this.checking.forEach((e) => {
          this.checking.push(e.value);
          //forEach로 value 값 담아주기
        });
      }
      this.$emit("change", this.checking);
      /!* if (e.target.checked) {


      } else {
        console.log(this.checking);
        const idx = this.checking.indexOf(this.value);

        if (idx !== -1) {
          this.checking.splice(idx, 1);
        } /!*else {
          this.checking.push(this.value);
        }*!/
        this.$emit("change", this.checking);
      }*!/
    },*/
    /*checkChange() {
      this.$emit("checkChange", this.value);
    },*/
  },
};
</script>

<style scoped></style>
