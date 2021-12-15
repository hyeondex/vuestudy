<template>
  <label :class="{ checked: clickCheck }">
    <!--    왜 여기에 val을 붙여야만 나오지..?  -->
    <input
      type="checkbox"
      :value="value"
      @change="onChange(value)"
      :checked="checking.some((el) => el === value)"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: ["value", "checking", "val"],
  model: {
    prop: "checking",
    event: "change",
  },
  computed: {
    clickCheck() {
      // 데이터로 true, false > return  해줘야함
      // 여기서 this.checking은 위에서 checkItem으로 push된 배열이고 그 배열에서 some 을 활용해서 사용
      // some()함수는 배열에서 값을 찾는 조건을 callback 함수로 전달함
      // 여기서는 checking의 el 값은 el === val 값이랑 동일 한 경우 true 이고 class 삽입 checked 삽입
      return this.checking.some((el) => el === this.value);
    },
  },
  methods: {
    onChange(val) {
      const idx = this.checking.indexOf(val);
      if (idx === -1) {
        this.checking.push(val);
      } else {
        this.checking.splice(idx, 1);
      }
      this.$emit("change", this.checking);
    },
  },
};
</script>

<style scoped>
label.checked {
  background: red;
}
</style>
