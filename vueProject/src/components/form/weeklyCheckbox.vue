<template>
  <div class="weeklyCheckboxWrap">
    <check-box-all v-model="weeklyList.allChecked">
      <!--     todo : checkboxall은 여기에 들어가도 된다... 하나만 붙이면 되니까..? !!!!!!!!!!!!!!!! -->
    </check-box-all>
    <check-box
      :class="{ borderCheck: true }"
      v-for="(item, idx) in weeklyList.list"
      :key="idx"
      :disabled-list="disabledList"
      :checked="weeklyList.checked"
      :value="item.value"
    >
      <!--      todo: disabledList , checkedList, -->
      <span slot="span">
        {{ item.name }}
      </span>
    </check-box>
  </div>
</template>
<script>
import checkBox from "./checkBox.vue";
import CheckBoxAll from "../checkbox/checkBoxAll";

export default {
  name: "weeklyCheckbox",
  components: { CheckBoxAll, checkBox },
  extends: checkBox,
  inheritAttrs: false,
  data() {
    return {
      weeklyList: {
        allChecked: false,
        checked: [],
        list: [
          { name: "월", value: "mon", disabled: false },
          { name: "화", value: "tue", disabled: true },
          { name: "수", value: "wed", disabled: false },
          { name: "목", value: "thu", disabled: false },
          { name: "금", value: "Fri", disabled: false },
          { name: "토", value: "sat", disabled: false },
          { name: "일", value: "sun", disabled: false },
        ],
      },
    };
  },
  props: {
    allDisabled: {
      type: Boolean,
    },
    disabledList: {
      type: Array,
    },
  },
  mounted() {
    console.log(this.disabledList);
    // todo : props로 disabled list 데려 왔는데...
    // todo: disabledcheck 바닥에서 해야하는지 자식에서 해야하는지 확인하기
  },
  updated: {
    checklist(val) {
      this.weeklyList.list.value = val;
      console.log("val : ", val);
      if (this.disabledList.value === val) {
        console.log("val : ", val);
        this.checked.splice(val);
      }
    },
  },
};
</script>

<style scoped>
/*// 네모 체크박스*/
.wee label.borderCheck {
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
