<template>
  <div class="input-box">
    <input
      :class="{ inputText: true, disabled: disabled }"
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
.input-box {
  flex: 1 1;
}
.inputText {
  width: 100%;
  padding: 11px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #bbb;
  background: #fff;
  line-height: 20px;
  font-size: 14px;
}
.inputText::placeholder {
  color: #bbb;
}
.inputText.disabled {
  color: #bbb;
  background: #f7f7f7;
}
</style>
