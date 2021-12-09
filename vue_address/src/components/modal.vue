<template name="modal">
  <div class="modal-mask">
    <div class="modal-wrap">
      <slot name="header" />
      <div class="body">
        <slot name="body" />
        <input
          type="text"
          placeholder="주소를 입력해보세요 "
          id="searchTxt"
          v-model="searchTxt"
        />
        <button type="button" @click="testText(searchTxt)">검색어 넣어</button>

        <ul>
          <li
            v-for="(item, index) in clickItemList"
            :key="index"
            @click="$emit('addJusolist(item)')"
          >
            {{ item.roadAddrPart1 }}
          </li>
        </ul>

        <button class="close" @click="$emit('closeModal')">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "../api";

export default {
  name: "modal",
  data() {
    return {
      searchTxt: "",
      clickItemList: [],
    };
  },
  methods: {
    testText() {
      getData({
        keyword: this.searchTxt,
      }).then((response) => {
        // console.log(response);

        this.clickItemList = response.data.results.juso;
        console.log(response.data.results.juso);
      });
    },
    addJusolist() {},
  },
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

.body {
  position: relative;
  width: 300px;
  padding: 20px;
  margin: 0px auto;
  background: #fff;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
    inset -2px -2px #808080, inset 2px 2px #dfdfdf;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  background: #c0c0c0;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
    inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  border: 1px solid #0a0a0a;
  /*transition: all 0.3s ease;*/
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
