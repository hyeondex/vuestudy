<template>
  <!-- todo: 전체 체크 올리기 -->
  <label :class="{ checked: checking, borderCheck: false, disabled: disabled }">
    <input
      type="checkbox"
      :value="value"
      :checked.sync="checking"
      @change="checkboxEvent"
      :disabled="disabled"
    />
    <slot name="span" />

    <!-- component나 template에서만 사용 할 떄 상위 컴포넌트에 #이름 형식으로 쓸 수 있음  -->
  </label>
</template>

<script>
export default {
  name: "checkBox",
  model: {
    event: "change",
    prop: "checked",
  },
  props: {
    //부모한테 받은 data
    checked: {
      // 담기는 배열
      type: [Array, Boolean],
      //required: true,
      // TODO: required 이거 왜 내려오는거에요?
    },
    disabled: { type: Boolean },
    value: {
      // checkbox에 담기는 배열
      type: [Boolean, String],
    },
    disabledList: {
      type: Array,
    },
  },
  inheritAttrs: false, // disabled가 label에 안 붙게 막는거 입니다.
  mounted() {
    //todo : 여기서 disabledCheck 미리 실행
  },
  computed: {
    checkType() {
      return typeof this.checked === "boolean";
    },
    checking() {
      if (this.checkType) {
        return this.value;
      } else {
        //disabledList는 부모페이지에서 올라오니까 여기서는 checked 배열에 담기는 this.value 포커싱
        return this.checked.some((el) => el === this.value);
      }
    },
  },
  methods: {
    checkboxEvent() {
      if (this.checkType) {
        this.$emit("change", event.target.checked);
      } else {
        const idx = this.checked.indexOf(this.value);
        if (idx === -1) {
          this.checked.push(this.value);
        } else {
          console.log("담기냐?");
          this.checked.splice(idx, 1);
          if (this.disabled) {
            this.checked.splice(idx, 1);
          }
        }
        this.$emit("change", this.checked);
      }
    },
  },
};
</script>

<style scoped>
label {
  position: relative;
  display: block;
}
label span {
  letter-spacing: -0.05em;
}
input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  margin: 0;
}
.agree-check-wrap label {
  /*//icon + txt type*/
  padding-left: 34px;
  line-height: 20px;
}
.agree-check-wrap label.checked:before {
  background: url(../../assets/images/ic-check-on-24.svg) no-repeat 0 0/100%;
}
.agree-check-wrap label:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background: url(../../assets/images/ic-check-off-24.svg) no-repeat 0 0/100%;
}
.agree-check-wrap label.all {
  padding-bottom: 20px;
}
.agree-check-wrap label.all:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 20px 0 0 -34px;
}
.agree-check-wrap label.all span {
  font-weight: 700;
}
.agree-check-wrap label.all.checked:before {
  background: url(../../assets/images/ic-checkbox-on-24.svg) no-repeat 0 0/100%;
}
.agree-check-wrap label.all:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background: url(../../assets/images/ic-checkbox-off-24.svg) no-repeat 0 0/100%;
}
</style>
