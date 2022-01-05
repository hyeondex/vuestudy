<template>
  <div>
    <button type="button" @click="postAdrEvent">respone</button>
    <input type="text" />
    <ul class="container">
      <!--      <li v-for="adrList in adrList" v-slot:>
        <button type="button">
          <span></span>
        </button>
      </li>-->
    </ul>
  </div>
</template>

<script>
import { getData } from "../../api";
import axios from "axios";

export default {
  name: "adrList",
  data() {
    return {
      adrList: {
        common: [totalCount],
      },
    };
  },
  methods: {
    postAdrEvent() {
      console.log("test");
      let vm = this;
      axios
        .get(getData)
        .then(function (responese) {
          console.log(responese);
          vm.adr = responese.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    //let vm = this;
  },
};
</script>

<style scoped></style>
