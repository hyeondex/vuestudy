<template>
  <!-- todo: 전체 체크 올리기 -->
  <label :class="{ checked: checking, borderCheck: false, disabled: disabled }">
    {{ disabled }}
    <input
      type="checkbox"
      :value="value"
      :checked.sync="checking"
      :disabled="disabled"
      @change="checkboxEvent"
    />
    <slot name="span" />
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
        console.log();
        const disabledCheck = this.checked.filter((el) => !el.disabled);
        return disabledCheck.some((el) => el === this.value);
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
          console.log(this.disabled);
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
  /*//icon + txt type*/
  position: relative;
  display: block;
  padding-left: 34px;
  line-height: 20px;
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
label.checked:before {
  background: url(../../assets/images/ic-check-on-24.svg) no-repeat 0 0/100%;
}
label:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background: url(../../assets/images/ic-check-off-24.svg) no-repeat 0 0/100%;
}
label.all {
  padding-bottom: 20px;
}
label.all:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 20px 0 0 -34px;
}
label.all span {
  font-weight: 700;
}
label.all.checked:before {
  background: url(../../assets/images/ic-checkbox-on-24.svg) no-repeat 0 0/100%;
}
label.all:before {
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
  display: inline-flex;
  height: 44px;
  padding: 0 15px;
  line-height: 42px;
  background: #fff;
  border: 1px solid #eee;
  box-sizing: border-box;
  text-align: center;
}
label.borderCheck:disabled {
  background: #000;
}
label.borderCheck:before {
  display: none;
}
label.borderCheck.checked {
  border-color: #00d4ac;
  color: #00d4ac;
}
label.borderCheck:first-child {
  border-radius: 10px 0 0 10px;
}
label.borderCheck:last-child {
  border-radius: 10px 10px 0 0;
}
.checklist {
  margin-top: 20px;
}
.checklist label + label {
  margin-top: 15px;
}
</style>
