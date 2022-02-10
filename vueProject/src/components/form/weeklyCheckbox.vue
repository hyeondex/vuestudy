<template>
  <div>
    <check-box
      :class="{ borderCheck: true }"
      v-for="(item, idx) in weeklyList"
      :key="idx"
      :value="item.value"
      :checked="checked"
    >
      <span slot="span">
        {{ item.name }}
      </span>
    </check-box>
  </div>
</template>
<script>
import checkBox from "./checkBox.vue";

export default {
  name: "weeklyCheckbox",
  components: { checkBox },
  extends: checkBox,
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
    },
    weeklyList: {
      // 기존배멸
      type: Array,
    },
    disabled: {
      type: Boolean,
    },
    disabledList: {
      type: Array,
    },
    checked: { type: Array },
  },
  mounted() {
    //console.log(1231231321);
  },
  computed: {
    //전체 체크 배열 - disabled 되는 배열
    detectionChecked() {
      // disabled 감지하는 영역
      //const test = [...new Set([...this.disabledList, this.checkedList])]; //합집합
      /*  const test = this.checkList.filter((el) =>
        this.disabledList.includes(el.value)
      );*/ // 합집합
      return this.checkList.filter(
        (el) => !this.disabledList.includes(el.value)
      );
    },
  },
  watch: {
    checked(value) {
      // 각각 하나씩 눌렀을 watch
      console.log("실행");
      this.$emit("change", value);
      this.$emit("change", value.length === this.detectionChecked.length);
      //checked 된 배열 === disalbled 제외한 배열 length 체크
    },
  },
  //TODO ALLCHECKED ALLDISABLED 수정
  methods: {
    /* checkboxEvent(event) {
      if (this.checkType) {
        //요일 전체 체크 박스를 눌렀을 때 실행 되는
        //const t = this.checkList.filter((el) => !el.disabled); // 기존 diasbled
        const updateAllCheck = event.target.checked
          ? this.detectionChecked.map((el) => {
              return el.value;
            })
          : [];
        ``;
        //prop으로 넘길 수 있는거 data도 되고, event도 되는데 ~ 여기서 넘길거 event랑 update되는 체크드되는 배열
        this.$emit("change", this.value); // 체인지 이벤트에서는 true false되는 allchecked boolean 내용
        this.$emit("update:checkedArray", updateAllCheck); //배열이 업데이트가 되면 넘어가야될 true false :: allcheck를 시킬수 있는 if문
      } else {
        const idx = this.checked.indexOf(this.value);
        if (idx === -1) {
          this.checked.push(this.value);
        } else {
          this.checked.splice(idx, 1);
        }
        this.$emit("change", this.checked);
      }
    },*/
  },
};
</script>

<style scoped>
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

.weeklyCheckboxWrap li:first-child:not(.all) {
  background: Red;
  border-radius: 10px 0 0 10px;
}
.weeklyCheckboxWrap li:first-child label.borderCheck.checked:after {
  border-radius: 10px 0 0 10px;
  background: Red;
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
