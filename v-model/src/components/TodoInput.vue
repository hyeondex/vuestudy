<template>
  <div class="inputbox">
    <input
        type="text"
        v-model="newTodoItem"
        value="newTodoItem"
        @keyup.enter="addTodo"
        placeholder="TODO를 써보든가요"
    />
    <button class="addConatainer" @click="addTodo">✅</button>

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">💨</h3>
      <span slot="body"> 🅴 🅼 🅿 🆃 🆈 </span>
      <button slot="footer" @click="showModal = false">XXX</button>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        //trim :: 사용자 입력 공백 자동 제거
        this.$emit("addTodo", value);
        this.clearInput();
        console.log();
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal: Modal,
  },
};
</script>

<style scoped>
.inputbox {
  margin-top: 20px;
}

input {
  width: 350px;
  padding-left: 15px;
  box-sizing: border-box;
}
</style>
