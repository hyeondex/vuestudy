<template>
  <div>
    <select :value="value" @change="selected">
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
  name: "formSelect",
  props: {
    //바닥페이지의 v-모델
    placeholder: String, // 옵션이름
    value: String, // option list
    disabled: Boolean, // option 선택 안되는 경우
    list: Array, //option으로 뿌리는 배열을 props로 전달 받음 부모의 timeList
  },

  model: {
    event: "selected",
    prop: "value",
  },
  methods: {
    selected(e) {
      this.$emit("selected", e.target.value); // 이벤트명 랑 그 이벤트의 변경되는 값
      this.$emit("change", this.value); // 해당 이벤트를 실은 이벤트..? 랑 그 이벤트의 값
    },
  },
};
</script>

<style scoped></style>
