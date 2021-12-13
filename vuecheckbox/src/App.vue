<template>
  <div id="app">
    <check-box>
      <input type="checkbox" id="all" value="all" v-model="allChecked" />
    </check-box>
    <ul>
      <li v-for="(item, index) in checkList.list" :key="index">
        <check-box
          v-model="checkList.itemCheck"
          :id="item.id"
          :name="item.name"
          :val="item.value"
        >
        </check-box
        >{{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import checkBox from "./components/checkBox.vue";

export default {
  name: "App",
  components: {
    checkBox,
  },
  props: {},
  data() {
    return {
      allChecked: false, // 전체 체크 falseecked 된 input 담김
      checkList: {
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
  computed: {},
  methods: {
    testEvent() {},
    allCheckedBtn() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
