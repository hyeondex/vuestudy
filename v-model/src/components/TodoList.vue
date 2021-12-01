<template>
  <section>
    <transition-group name="list" tag="ul" appear>
      <li v-for="(todoItem, index) in propsdata" :key="index">
        {{ todoItem }}
        <button
            type="button"
            class="removeBtn"
            @click="removeTodo(todoItem, index)"
        >
          🏅
        </button>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 380px;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-size: 15px;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  border-radius: 0;
}

.removeBtn {
  margin-left: auto;
  color: olive;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}

.list-enter,
.list-leave-to {
  transition: all 0.5s;
  opacity: 0;
  transform: translateY(5px);
}
</style>
