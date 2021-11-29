<template>
<div class="clearAllContainer" @click="clearTodo">
  <button class="clearAllBtn">
    clear all
  </button>
</div>
</template>

<script>
export default{
  name: "TodoFooter",
  methods:{
    clearTodo(){
      this.$emit("removeAll");
    }
  }
}
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height:50px;
  background:olive;
  border-radius: 5px;
  line-height:50px;
  margin: 0 auto;
  cursor: pointer;
}
.clearAllBtn{
  color:white;
  display: block;
}
</style>