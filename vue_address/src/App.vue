<template>
  <div id="app">
    <input type="text" v-model="inputText" readonly />
    <input type="text" v-model="inputText1" readonly />
    <input type="text" v-model="inputText2" />
    <button type="button" @click="testText">클릭</button>

    <button type="button" @click="modalOpen">클릭</button>
    <!--    <modal v-if="modal" @closeModal=""></modal>-->
    <modal></modal>
  </div>
</template>

<script>
import { getData } from "./api";
import Modal from "./components/modal";

export default {
  name: "App",
  data() {
    return {
      inputText: "",
      inputText1: "",
      inputText2: "",
      modal: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    aa(a) {
      console.log(a);
    },
    // 값을 가지고 옴 > 그 값을 뿌릴 메소드 제작 > 메소드를 실행시킬 이벤트 > 그 이벤트를 html 영역에 붙이기
    testText() {
      getData({
        currentPage: "",
        countPerPage: "",
        keyword: this.inputText,
      }).then((response) => {
        console.log(response);
      });
    },
    modalOpen() {
      this.modal = true;
      console.log("modal open");
    },
    closeModal() {
      this.modal = false;
      console.log("close");
    },
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
