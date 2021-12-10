<template>
  <!--  -->
  <div id="div">
    <input type="checkbox" id="all" value="all" v-model="checkListAll" />
    <label for="all">all</label>
    <div id="list" v-for="check in checkList" :key="check.id">
      <label :for="checkList.id"
        ><input
          type="checkbox"
          :id="checkList.id"
          :value="checkList.value"
          v-model="check.checked"
        />{{ checkList.value }}
      </label>

      <p>checked: {{ checkList.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkBox",
  data() {
    return {
      checkListAll: "",
      checkList: [
        {
          id: "ch1",
          value: "ch1",
          checked: false,
        },
        {
          id: "ch2",
          value: "ch2",
          checked: false,
        },
        {
          id: "ch3",
          value: "ch3",
          checked: false,
        },
        {
          id: "ch4",
          value: "ch4",
          checked: false,
        },
      ],
    };
  },
  methods: {
    checkListAllList() {},
  },
};
</script>

<style scoped></style>
