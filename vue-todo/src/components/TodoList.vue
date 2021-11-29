<template>
<section>
  <transition-group name="list" tag="ul">
    <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
      <font-awesome-icon class="checkbtn" icon="check" aria-hidden="true"></font-awesome-icon>
      {{ todoItem }}
      <button type="button" class="removeBtn" @click="removeTodo(todoItem , index)">
        <font-awesome-icon icon="trash" aria-hidden="true"></font-awesome-icon>
      </button>
    </li>
  </transition-group>
</section>
</template>

<script>
export default {
  name: "TodoList",
  props: ["propsdata"],
  methods:{
    removeTodo(todoItem,index){
      this.$emit("removeTodo", todoItem,index);
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type:none;
  padding-left:0;
  margin-top:0;
  text-align: left;
}
li{
  display: flex;
  min-height:50px;
  height:50px;
  line-height:50px;
  border:1px solid red;
  border-radius: 5px;
  background:#fff;
  color:olive;
  font-size: 1em;
  vertical-align: middle;
  align-items:center;
  justify-content: center;
}
.checkbtn{
  color:olive;
  margin-right: 5px;
}
.removeBtn{
  margin-left: auto;
  color: olive;
}
.list-enter-active,
.list-leave-active{
  transition: all 1s;
}
.list-enter,
.list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>