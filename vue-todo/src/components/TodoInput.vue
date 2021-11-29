<template>
<div class="inputBox shadow">
  <input
      type="text"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
      placeholder="TODO를 써보든가요"
  >
  <button class="addConatainer" v-on:click="addTodo">
    <font-awesome-icon class="addBtn" icon="plus" ></font-awesome-icon>
  </button>

  <modal
      v-if="showModal"
      @close="showModal=false"
  >
    <h3 slot="header">alert</h3>
    <span slot="body">
<!--      아무것도 안하려고 하네...?-->
    </span>
    <button slot="footer" @click="showModal = false">
      XXX
    </button>
  </modal>

</div>
</template>

<script>
import Modal from "./common/Modal.vue"

export default {
  name: "TodoInput",
  data(){
    return{
      newTodoItem : "",
      showModal : false
    };
  },
  methods: {
    addTodo(){
      if(this.newTodoItem !== ""){
        let value = this.newTodoItem && this.newTodoItem.trim();
        //trim :: 사용자 입력 공백 자동 제거
        this.$emit("addTodo" ,value);
        this.clearInput();
      }else{
        this.showModal = true;
      }
    },
    clearInput(){
      this.newTodoItem = "";
    }
  },
  components :{
    Modal: Modal
  },
}

</script>

<style scoped>

</style>