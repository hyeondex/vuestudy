<template>
  <div>
    <input type="text" v-model="keywordAdr" />
    <button type="button" @click="postAdrEvent">response</button>
    <ul class="container">
      <!--      <li v-for="adrList in adrList" v-slot:>
        <button type="button">
          <span></span>
        </button>
      </li>-->
    </ul>
    {{ this.adrList }}
  </div>
</template>

<script>
import { getData } from "../../api";

export default {
  name: "adrList",
  data() {
    return {
      keywordAdr: "",
      adrList: [],
    };
  },
  methods: {
    postAdrEvent() {
      console.log("test");
      getData({
        currentPage: "",
        countPerPage: "",
        keyword: this.keywordAdr,
      }).then((response) => {
        /*  response.data.result.juso.forEach((item, idx) => {
          this.adrList.push(parseInt(item, idx));
        });*/
        console.log(this.adrList);
        console.log(response.data);
        /*this.adrList = response.map((el) =)*/
      });
    },
    //let vm = this;
  },
};
</script>

<style scoped></style>
