<template>
  <div>
    <input type="text" v-model="keywordAdr" />
    <button type="button" @click="postAdrEvent">response</button>
    <ul class="container">
      <li v-for="(item, index) in adrList" :key="index">
        <button type="button" @click="$emit('testEvent', 'adrList')">
          <span slot="span"> {{ item.zipNo }} </span>
          <span slot="span"> {{ item.roadAddr }} </span>
          <!--          <span slot="span"> {{ item.jibunAddr }} </span>-->
        </button>
      </li>
    </ul>

    <!-- todo: 저번에 소연님이 하셨던 나오는 컨텐츠 리스트 개수/ 전채 페이지  :: pageNation 만들어보기 -->
    <button type="button">{{}}</button>
    {{ errorCode }}
  </div>
</template>

<script>
import { getData } from "../../api";

export default {
  name: "adrList",
  data() {
    return {
      keywordAdr: "",
      adrList: "",
      totalCount: "",
      errorCode: "",
      errorMessage: "",
      pageNumber: [], // pagenation 배열
    };
  },
  methods: {
    postAdrEvent() {
      console.log("검색");
      getData({
        currentPage: 1, // 요청 변수 이름
        countPerPage: 5,
        keyword: this.keywordAdr,
      })
        .then((res) => {
          const response = res.data;
          this.adrList = response.results.juso; //가져온 주소 선언
        })
        .catch((error) => {
          console.log(error.data);
          this.errorCode = error;
        });
    },
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
  text-align: left;
}
input {
}
</style>
