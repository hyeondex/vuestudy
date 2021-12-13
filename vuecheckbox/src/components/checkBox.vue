<template>
  <!--  -->
  <div id="div">
    <input type="checkbox" id="all" value="all" v-model="allChecked" @click="allCheckedList"/>
    {{allChecked}}
<!--    -->
    <label for="all">all</label>
    <div id="list" v-for="item in checkList" :key="item.id" >
      <label :for="item.id" @click="checkedItem"
        ><input
          type="checkbox"
          :id="item.id"
          :value="item.value"
          v-model="item.checked"
        />{{ item.name }}
      </label>

      <p>checked: {{ item.checked }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkBox",
  //prop:['checked', 'item'],
  data() {
    return {
      allChecked: false,
      checkList: [
        {
          id: "ch1",
          value: "ch1",
          name:'ch1',
          checked: false,
        },
        {
          id: "ch2",
          value: "ch2",
          name:'ch2',
          checked: false,
        },
        {
          id: "ch3",
          value: "ch3",
          name:'ch3',
          checked: false,
        },
        {
          id: "ch4",
          value: "ch4",
          name:'ch4',
          checked: false,
        },
      ],
    };
  },
  methods: {
    checkedItem(){
      this.checkList.checked = true;
      console.log(this.checkList)
    },
    allCheckedList() {

    },
  },
};
</script>

<style scoped>
label{
  outline: 1px solid #000;
}
input{
  background:Red;
}


</style>
