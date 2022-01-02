<template>
  <div id="app">
    <h1>checkbox</h1>

    <check-box-all
      v-model="checkList.allChecked"
      :noneCheckList="checkList.itemCheck"
      :checklist="checkList.list"
    >
      all
    </check-box-all>
    <br />
    {{ checkList.itemCheck }}
    {{ test }}
    {{ checkList.allChecked }}
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

    <br /><br />

    <check-box v-model="test">
      <span slot="span"> 123 </span>
    </check-box>
  </div>
</template>

<script>
import CheckBox from "@/components/checkBox";
import CheckBoxAll from "@/components/checkBoxAll";
export default {
  name: "app",
  components: { CheckBoxAll, CheckBox },
  data() {
    return {
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
    };
  },
  computed: {
  },
};
</script>

<style>
#app {
}
</style>
