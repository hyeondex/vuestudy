<template>
  <div class="wrap">
    <input type="text" readonly v-model="inputData" />
    <input type="text" readonly v-model="inputData" />
    <input type="text" v-model="inputData" />
    <button @click="modalOpen">test</button>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">list 제목</h3>
      <ul slot="body">
        <li @click="test">list</li>
        <li @click="test">list</li>
        <li @click="test">list</li>
        <li @click="test">list</li>
      </ul>
      <button slot="footer" @click="showModal = false">XXX</button></Modal
    >

    <adr-list></adr-list>
  </div>
</template>
<script>
import Modal from "../../components/common/Modal";
import AdrList from "../../components/adr/adrList";
export default {
  name: "adrMain",
  components: { AdrList, Modal },
  data() {
    return {
      inputData: "",
      showModal: false,
    };
  },
  methods: {
    modalOpen() {
      this.showModal = true;
      console.log("모달 오픈");
    },
    test() {},
  },
};
</script>

<style scoped></style>
