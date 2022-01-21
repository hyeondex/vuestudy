<template>
  <!-- todo: 전체 체크 올리기 -->
  <label :class="{ checked: checking, borderCheck: false, disabled: disabled }">
    <input
      type="checkbox"
      :value="value"
      :checked.sync="checking"
      @change="checkboxEvent"
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
  },
  inheritAttrs: false, // disabled가 label에 안 붙게 막는거 입니다.
  computed: {
    checkType() {
      return typeof this.checked === "boolean";
    },
    checking() {
      if (this.checkType) {
        return this.value;
      } else {
        //return this.disabledListCheck.filter((el) => !el.disabled);
        return this.checked.filter((el) => !el.disabled);
        //return this.value;
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
          this.checked.splice(idx, 1);
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

/*// 네모 체크박스*/
label.borderCheck {
  position: relative;
  display: inline-flex;
  height: 44px;
  padding: 0 15px;
  line-height: 42px;
  background: #fff;
  border: 1px solid #ddd;
  border-right: none;
  box-sizing: border-box;
  text-align: center;
}
label.borderCheck span {
  font-size: 14px;
}
label.borderCheck:before {
  display: none;
}
label.borderCheck.checked {
  /*border-color: #00d4ac;*/
  color: #00d4ac;
}

label.borderCheck:first-child:not(.all) {
  border-radius: 10px 0 0 10px;
}
label.borderCheck.checked:first-child:not(.all):after {
  border-radius: 10px 0 0 10px;
}
label.borderCheck:last-child {
  border-right: 1px solid #ddd;
  border-radius: 0 10px 10px 0;
}
label.borderCheck.checked:last-child:after {
  border-right: 1px solid #00d4ac;
  border-radius: 0 10px 10px 0;
}
label.borderCheck.checked:after {
  z-index: 1;
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border: 1px solid #00d4ac;
  box-sizing: border-box;
}
label.borderCheck.all {
  border-radius: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
}
label.borderCheck.all span {
  display: block;
  font-weight: 400;
}
label.borderCheck.all:after {
  margin: 0 auto;
  border-radius: 10px;
  background: transparent;
}
.checklist {
  margin-top: 20px;
}
.checklist label + label {
  margin-top: 15px;
}
label.disabled {
  border-color: #dddddd;
  background: #f7f7f7;
}
label.disabled span {
  color: #bbb;
}
</style>
