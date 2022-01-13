<template>
  <div>
    <input
      :type="type ? type : 'text'"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('test', $event.target.value)"
    />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "inputText",
  props: {
    type: {
      type: String,
    },
    value: { type: String },
    placeholder: { type: String },
    error: {
      type: String,
    },
  },
  model: {
    prop: "value",
    event: "test",
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style scoped>
input {
  font-size: inherit;
  width: 708px;
  padding: 11px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #bbb;
  background: #fff;
}
input::placeholder {
  color: #bbb;
}
input:disabled {
  background: red;
}
</style>
