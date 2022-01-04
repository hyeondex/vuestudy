<template>
  <div class="wrap">
    <h2>checkbox</h2>

    <div class="box">
      <check-box-all
        v-model="checkList.allChecked"
        :value="checkList.allChecked"
        :putCheckedList.sync="checkList.itemCheck"
        :checklist="checkList.list"
      >
        <span slot="span"> All</span>
      </check-box-all>
      <br />
      <p class="hlight">
        checkList.itemCheck : {{ checkList.itemCheck }}<br />
        checkList.allChecked :
        {{ checkList.allChecked }}
      </p>
      <br />
      <check-box
        v-model="checkList.itemCheck"
        v-for="(item, index) in checkList.list"
        :key="index"
        :value="item.value"
      >
        <span slot="span">
          {{ item.name }}
        </span>
      </check-box>
    </div>
    <h2>radio</h2>
    <div class="box">
      <radio-btn
        v-model="radioList.radioData"
        v-for="(item, index) in radioList.list"
        :key="index.radioList"
        :val="item.value"
        :name="item.name"
      >
        <span slot="span">
          {{ item.value }}
        </span>
      </radio-btn>
      <br />
      <p class="hlight">
        <span>radioList.radioData: {{ radioList.radioData }}</span>
      </p>
    </div>
    <ul class="list">
      <li>
        피드백
        <ul class="list">
          <li>함수 이름 명확하게</li>
          <li>
            extends<br>
            computed 사용 못하는 케이스 ::<br>
            chechbox를 extends해서 checkboxAll component를 만든 경우 기존에 사용한 computed, methode 등 사용된 것들이 덮어씌워짐<br>
            대체해서 checkboxAll에는  watch랑 methode로 처리했음. 문제는 methode의 내용도 두번 들어가야 하기 때문에 checkChange를 그대로 불러와서 사용하는 방법이 있다.<br>
            (더 깔끔하게 하려면 checkChange내부에 중복되는 함수를 또 걸어주면 된다....)
          </li>
          <li>
            checkboxAll :: 전체 체크<br>
<pre class="code">
watch:{
      putCheckedList(value){
          this.$emit('change', value.length === this.checklist.length);<br><span class="green">//value는 this.checklist</span>  }
}</pre>
            이 부분은 all을 눌렀을 때 실행되는 watch
          </li>
          <li> checkChange::각각의 체크박스를 눌렀을 때 실행됨
            <pre class="code">
else {
        console.log('실행')
        const val = event.target.checked ? this.checklist.map((el)=>{return el.value}):[]<br><span class="green">// 변수하나에 checkeboxAll의 boolean 값으로 체크리스트에 있는 value 값을 모아 다시 배열로 만들어 return  </span>
        this.$emit("change", event.target.checked);<span class="green">// checkboxAll의 boolean</span>
        this.$emit('update:putCheckedList' , val)
}</pre>
          </li>
        </ul>
      </li>


    </ul>
  </div>
</template>

<script>
import CheckBox from "../components/checkbox/checkBox";
import CheckBoxAll from "../components/checkbox/checkBoxAll";
import RadioBtn from "../components/checkbox/radioBtn";
import "../css/app.css";

export default {
  name: "app",
  components: { RadioBtn, CheckBoxAll, CheckBox },
  data() {
    return {
      picked: "",
      test: false,
      checkList: {
        allChecked: false,
        itemCheck: [], // 체크한 값
        list: [
          // 데이터
          {
            id: "ch1",
            value: "ch1",
            name: "ch1",
          },
          {
            id: "ch2",
            value: "ch2",
            name: "ch2",
          },
          {
            id: "ch3",
            value: "ch3",
            name: "ch3",
          },
          {
            id: "ch4",
            value: "ch4",
            name: "ch4",
          },
        ],
      },
      radioList: {
        radioData: "",
        list: [
          {
            id: "radio1",
            value: "radio1",
            name: "radio",
          },
          {
            id: "radio2",
            value: "radio2",
            name: "radio",
          },
          {
            id: "radio3",
            value: "radio3",
            name: "radio",
          },
        ],
      },
    };
  },
  computed: {},
};
</script>

<style>
#app {
}
</style>
