<template>
  <div>
    {{ checkedList }}
    <input v-model="checking" type="text" />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      checkedList: "",
    };
  },
  computed: {
   /* checking() {
      return this.checkedList;
    },*/
    //props에서 가지고 온 값은 수정할 때 setter가 필요함 !
    checking: {
      get() {
        return this.checkedList;
      },
      set(newValue) {
        this.checkedList = newValue;
      },
    },
  },
};
</script>

<style scoped></style>
