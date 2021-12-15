<template>
  <div id="app">
    <label for="all">
      <input
        id="all"
        value="all"
        type="checkbox"
        v-model="checkList.allChecked"
        @click="testevent"
      />전체동의 {{ checkList.itemCheck }}
    </label>
    <!--    <check-box-all> </check-box-all>-->

    <ul>
      <li v-for="(item, index) in checkList.list" :key="index">
        <check-box
          v-model="checkList.itemCheck"
          :value="item.value"
          @change="updateChecked(checkList)"
        >
          {{ item.value }}
        </check-box>
      </li>
    </ul>
    <p>itemCheck(checked됨) : {{ checkList.itemCheck }}</p>
  </div>
</template>

<script>
import checkBox from "./components/checkBox.vue";
import "./css/app.css";
export default {
  name: "App",
  components: {
    checkBox,
  },
  /*props: {
    checked: Boolean,
    checking: Array,
    value: String,
  },*/
  data() {
    return {
      checkList: {
        allChecked: false,
        //allList: [],
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
    // 전체 체크가 눌림 > allchecked 가 true > true 일 때 checklist 내에 있는 itemCheck에 모든 배열을 담는다..?
    testevent() {
      this.checkList.itemCheck = [];
      // console.log(el); //내가 만든 전체 배열
      if (!this.checkList.allChecked) {
        this.checkList.list.forEach((e) => {
          this.checkList.itemCheck.push(e.value); //forEach로 value 값 담아주기
        });
      }
    },
    updateChecked(list) {
      /*this.allChecked = !this.allChecked;*/
      console.log(list);
      if (list.itemCheck.length === list.list.length) {
        list.allChecked = true;
      } else {
        list.allChecked = false;
      }
      /*if (this.itemCheck.length === this.checkList.list.length) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }*/
    },
  },
};
</script>

<style>
#app {
}
</style>
