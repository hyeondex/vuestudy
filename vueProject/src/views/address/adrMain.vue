<template>
  <div class="wrap">
    <input type="text" readonly v-model="inputData" />
    <input type="text" readonly v-model="inputData" />
    <input type="text" v-model="inputData" />
    <button @click="modalOpen">test</button>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Address</h3>
      <div slot="body">
        <adr-list></adr-list>
      </div>
      <!--      <button slot="footer" @click="showModal = false">XXX</button>-->
    </Modal>
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
  },
};
</script>

<style scoped></style>
