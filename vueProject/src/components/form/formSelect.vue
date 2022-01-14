<template>
  <div>
    <select :value="value" @change="selected()">
      <option :disabled="disabled" v-if="placeholder"></option>
      <option
        v-for="(item, inx) in list"
        :key="inx"
        :value="item.value"
        :disabled="disabled"
      >
        {{ item.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'formSelect',
  props: {
    placeholder: String, // 옵션이름
    value: {
      type: String,
    }, // option list
    //바닥페이지의 v-모델
    disabled: Boolean, // option 선택 안되는 경우
    list: Array, //option으로 뿌리는 배열을 props로 전달 받음 부모의 timeList
  },
  model: {
    event: 'selected',
    data: 'value',
  },
  methods: {
    selected(e) {
      console.log('실행');
      console.log(e.target.value);
      //this.$emit('change', e.target.value);
    },
  },
};
</script>

<style scoped></style>
