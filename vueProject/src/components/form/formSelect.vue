<template>
  <div class="select-box">
    <select
      :value="value"
      @change="selected"
      :class="{ disabled: disabled, selected: selectItem }"
      :data-title="title"
      :disabled="disabled"
    >
      <option value="">
        {{ title }}
      </option>
      <option
        v-for="(item, inx) in list"
        :key="inx"
        :value="item.value"
        :disabled="disabled"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "formSelect.vue",
  props: {
    //바닥페이지의 v-모델
    selectItem: Boolean, // class true false 값
    title: String, // 옵션이름
    value: String, // option list
    disabled: Boolean, // option 선택 안되는 경우
    list: Array, //option으로 뿌리는 배열을 props로 전달 받음 부모의 timeList
  },

  model: {
    event: "selected",
    prop: "value",
  },
  computed: {},
  methods: {
    selected(e) {
      this.$emit("selected", e.target.value); // 이벤트명 랑 그 이벤트의 변경되는 값
      this.$emit("change", this.value); // 해당 이벤트를 실은 이벤트..? 랑 그 이벤트의 값
    },
  },
};
</script>

<style scoped>
.select-box {
  position: relative;
}

select {
  width: 151px;
  height: 44px;
  padding: 12px 15px;
  border: 1px solid #ddd;
  color: #bbb;
  font-size: 14px;
  line-height: 20px;
  border-radius: 10px;
}
option {
  /*//color: #000;*/
}
select.selected {
  color: #000;
}
select.disabled {
  color: #bbb;
  background: #f7f7f7;
}
</style>
