<template name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <button class="close" @click="$emit('closeModal')">&times;</button>
      <div class="body">
        <slot name="body" />
        test
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrap {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 300px;
  margin: 0px auto;

  background: #c0c0c0;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
    inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  border: 1px solid #0a0a0a;

  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  color: #fff;
  padding: 5px;
  background: linear-gradient(90deg, #000080, #1084d0);
  font-size: 15px;
  margin: 0;
}

.modal-body {
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
}

.modal-default-button {
  position: absolute;
  top: -1px;
  right: -1px;
  padding: 4.5px 7.5px;
  background: #dfdfdf;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
    inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  color: #0a0a0a;
  box-sizing: border-box;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
