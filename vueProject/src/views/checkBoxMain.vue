<template>
  <div class="wrap">
    <h2>checkbox</h2>

    <div class="box">
      <check-box-all
        v-model="checkList.allChecked"
        :value="checkList.allChecked"
        :noneCheckList="checkList.itemCheck"
        :checklist="checkList.list"
      >
        <span slot="span"> All</span>
      </check-box-all>
      <br />
      <p class="hlight">
        checkList.itemCheck : {{ checkList.itemCheck }}<br />
        checkList.allChecked :
        {{ checkList.allChecked }}
      </p>
      <br />
      <check-box
        v-model="checkList.itemCheck"
        v-for="(item, index) in checkList.list"
        :key="index"
        :value="item.value"
      >
        <span slot="span">
          {{ item.name }}
        </span>
      </check-box>
    </div>

    <h2>radio(번외)</h2>
    <div class="box">
      <radio-btn
        v-model="radioList.radioData"
        v-for="(item, index) in radioList.list"
        :key="index.radioList"
        :val="item.value"
        :name="item.name"
      >
        <span slot="span">
          {{ item.value }}
        </span>
      </radio-btn>
      <br />
      <p class="hlight">
        <span>radiolist.radioData: {{ radioList.radioData }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckBox from "../components/checkbox/checkBox";
import CheckBoxAll from "../components/checkbox/checkBoxAll";
import RadioBtn from "../components/checkbox/radioBtn";
import "../css/app.css";

export default {
  name: "app",
  components: { RadioBtn, CheckBoxAll, CheckBox },
  data() {
    return {
      picked: "",
      test: false,
      checkList: {
        allChecked: false,
        itemCheck: [], // 체크한 값
        list: [
          // 데이터
          {
            id: "ch1",
            value: "ch1",
            name: "ch1",
          },
          {
            id: "ch2",
            value: "ch2",
            name: "ch2",
          },
          {
            id: "ch3",
            value: "ch3",
            name: "ch3",
          },
          {
            id: "ch4",
            value: "ch4",
            name: "ch4",
          },
        ],
      },
      radioList: {
        radioData: "",
        list: [
          {
            id: "ch1",
            value: "ch1",
            name: "radio",
          },
          {
            id: "ch2",
            value: "ch2",
            name: "radio",
          },
          {
            id: "ch3",
            value: "ch3",
            name: "radio",
          },
        ],
      },
    };
  },
  computed: {},
};
</script>

<style>
#app {
}
</style>
