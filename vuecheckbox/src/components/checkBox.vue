<template>
  <label :class="{ checked: clickCheck(val) }">
    <input
      type="checkbox"
      ref="checkbox"
      :val="val"
      :checked="checked"
      @change="checkItem(val)"
    />
    <!--@click="clickCheck"  -->
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: ["checked", "checking", "val"],
  data() {
    return {
      checkBoolean: false, // label에 들어가는 class 제어 하려고 넣은 데이터
    };
  },
  methods: {
    // val = checkList.value
    checkItem(val) {
      const idx = this.checking.indexOf(val);
      // ids는 this.checking 배열에 val을 찾음
      if (idx === -1) {
        //아무것도 없을 때나 찾는 요소가 없을 때
        this.checking.push(val);
        //checking에 val을 넣기
        //console.log(val);
      } else {
        this.checking.splice(idx, 1);
        // checked 해제 > idx에서 1개 지우기
      }
    },
    //클릭 말고 다른 방법으로도 해보기
    clickCheck(val) {
      // 데이터로 true, false > return  해줘야함
      // 여기서 this.checking은 위에서 checkItem으로 push된 배열이고 그 배열에서 some 을 활용해서 사용
      // some()함수는 배열에서 값을 찾는 조건을 callback 함수로 전달함
      // 여기서는 checking의 el 값은 el === val 값이랑 동일 한 경우 true 이고 class 삽입 checked 삽입
      return this.checking.some((el) => el === val);
    },
    //click methode로 만드는 방법
    /*clickCheck() {
      console.log(this.checkBoolean); //초기
      this.checkBoolean = !this.checkBoolean;
      // false = !false(true)
      console.log(this.checkBoolean); // 눌렸을 때 값

    },*/
  },

  model: {
    prop: "checking",
    event: "change",
  },
};
</script>

<style scoped>
input {
}
</style>
