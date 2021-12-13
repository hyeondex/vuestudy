<template>
  <label>
    <input type="checkbox" ref="checkBox" />
  </label>
  <!--  TODO 질문 list
        $attrs: class ,style를 포함해서 전달되는 모든 속성을 의미함 ( 컴포넌트에 전달된 속성 )
         대체로 부모> 자식으로 보낸다는 글을 봤는데 html로 뿌려지는걸 생각하면 되는지,,,, 두루뭉실한이해,,,,-->
  <!--  :checked="checked.some((el) => el === val)" 체크 된 애들 확인 다시하는거? -->
  <!--  $listeners :컴포넌트에서 사용된 이벤트 리스너를 포함하는 오브젝트/ 부모> 자식 /.n개의 value나 event를 넘기는데 사용합니다
        구성 요소가 내보내는 이벤트를 수신하는 구성 요소가 있으면 채워집니다. (?)-->
</template>

<script>
export default {
  name: "checkBox",
  props: {},
  data() {
    return {};
  },
  computed: {
    /* inputListeners: function () {
      return {
        ...this.$listeners,
        change: (event) => {
          this.$emit("change", event.target.checked);
          console.log(event.target);
        }, //$listeners 모아서 합칠거야? > 근데 왜?
      };
      // `Object.assign` 는 오브젝트를 새로운 오브젝트로 병합합니다.
    },*/
  },
  methods: {},
};
</script>

<style scoped>
label {
  position: relative;
  display: inline-block;
  padding: 5px 0 5px 30px;
  align-items: center;
  cursor: pointer;
}

input {
}
</style>
