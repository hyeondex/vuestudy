<template>
  <div class="weeklyCheckboxWrap">
    <all-check-box :checkList="list" :checkedArray="allcheckedList">
      <!--     todo : allCheckbox은 여기에 들어가도 된다... 하나만 붙이면 되니까..? !!!!!!!!!!!!!!!! -->
    </all-check-box>
    <all-check-box> </all-check-box>
    <check-box
      :class="{ borderCheck: true }"
      v-for="(item, idx) in list"
      :key="idx"
      :disabledList="disabledList"
      :checked="checked"
      :value="item.value"
      @change="changetest(val)"
    >
      <!--      todo: disabledList , checkedList, -->
      <span slot="span">
        {{ item.name }}
      </span>
    </check-box>
    <check-box :class="{ lineCheckbox: true }" v-model="allDisabled">
      {{ text }}
    </check-box>
    <form-select
      v-model="selected"
      :list="selectTime.timeStart"
      :title="selectTime.title1"
      :disabled="allDisabled"
    ></form-select>
    <span>~</span>
    <form-select></form-select>
  </div>
</template>

<script>
import checkBox from "./checkBox.vue";
import formSelect from "./formSelect";
import allCheckBox from "./allCheckbox";

export default {
  name: "weeklyCheckbox",
  components: { allCheckBox, formSelect, checkBox },
  extends: checkBox,
  inheritAttrs: false,
  data() {
    return {
      list: [
        { name: "월", value: "mon", disabled: false },
        { name: "화", value: "tue", disabled: true },
        { name: "수", value: "wed", disabled: false },
        { name: "목", value: "thu", disabled: false },
        { name: "금", value: "Fri", disabled: false },
        { name: "토", value: "sat", disabled: false },
        { name: "일", value: "sun", disabled: false },
      ],
      selectTime: {
        value: "", // select는 배열 X string
        selectItem: false,
        title1: "상담 시작 시간",
        title2: "상담 종료 시간",
        timeStart: [
          { value: "0", name: "09:00" },
          { value: "1", name: "10:00" },
          { value: "2", name: "11:00" },
          { value: "3", name: "12:00" },
          { value: "4", name: "13:00" },
          { value: "5", name: "14:00" },
          { value: "6", name: "15:00" },
          { value: "7", name: "16:00" },
          { value: "8", name: "17:00" },
          { value: "9", name: "18:00" },
          { value: "10", name: "19:00" },
          { value: "11", name: "20:00" },
          { value: "12", name: "21:00" },
          { value: "13", name: "22:00" },
          { value: "14", name: "23:00" },
          { value: "15", name: "24:00" },
        ],
        timeEnd: [
          { value: "0", name: "09:00", disabled: true },
          { value: "1", name: "10:00" },
          { value: "2", name: "11:00" },
          { value: "3", name: "12:00" },
          { value: "4", name: "13:00" },
          { value: "5", name: "14:00" },
          { value: "6", name: "15:00" },
          { value: "7", name: "16:00" },
          { value: "8", name: "17:00" },
          { value: "9", name: "18:00" },
          { value: "10", name: "19:00" },
          { value: "11", name: "20:00" },
          { value: "12", name: "21:00" },
          { value: "13", name: "22:00" },
          { value: "14", name: "23:00" },
          { value: "15", name: "24:00" },
        ],
      },
    };
  },
  props: {
    checked: {
      type: Array,
    },
    allchecked: {
      type: Boolean,
    },
    allDisabled: {
      type: Boolean,
    },
    disabledList: {
      type: Array,
    },
    selected: {
      type: Array,
    },
    text: {
      type: String,
    },
  },
  mounted() {
    console.log(this.disabledList); // mounted로 disabledList 갖고옴
    // todo: disabledcheck 바닥에서 해야하는지 자식에서 해야하는지 확인하기
  },
  computed: {
    //어떤 이벤트를 걸어줘야 겠죠?
    allcheckedList() {
      console.log(this.value);
      return this.checked.some((el) => el === this.value);
    },
  },
  methods: {
    /*changetest(){
      return this.allCheckbox.list.value && this.disabledList ? this.checked.splice(this.value)
    }
*/ allCheckEvent() {
      console.log(456456456);
    },
    changetest(val) {
      val = this.disabledList;
      this.checked.value === val ? this.checked.splice(this.value) : false;
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
