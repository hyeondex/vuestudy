<template>
  <div>
    <input
      :class="{ inputText: true }"
      :type="type ? type : 'text'"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
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
    disabled: {
      type: Boolean,
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
.inputText {
  font-size: inherit;
  width: 708px;
  padding: 11px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #bbb;
  background: #fff;
}
.inputText::placeholder {
  color: #bbb;
}
.inputText:disabled {
  background: red;
}
</style>
