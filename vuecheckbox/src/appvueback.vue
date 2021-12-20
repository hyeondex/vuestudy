<template>
  <div id="app">
    <h1>checkbox</h1>
    <ul class="exem">
      <li>
        체크박스 전체선택
        <label :class="{ label: true, checked: this.checkList.allChecked }">
          <!-- 무조건 true 인 경우에는 보이니까 따로 적지말고 안에 묶어서 적기 -->
          <input
            type="checkbox"
            v-model="allChecked"
            @click="checkAll"
          />전체동의 {{ allChecked }}
        </label>
        <ul>
          <li v-for="(item, index) in checkList.list" :key="index">
            <check-box
              v-model="checkList.itemCheck"
              :value="item.value"
              @change="updateChecked"
            >
              <span slot="span">
                {{ item.value }}
              </span>
            </check-box>
          </li>
        </ul>
        <p>itemCheck(checked됨) : {{ checkList.itemCheck }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import checkBox from "./components/checkBox.vue";
import "./css/app.css";

export default {
  name: "App",
  components: {
    checkBox,
  },
  data() {
    return {
      checkList: {
        //allList: [],
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
    };
  },
  computed: {
    allChecked: {},
  },
  methods: {
    checkAll() {
      // console.log(this.allChecked);
      this.checkList.itemCheck = [];
      if (!this.checkList.allChecked) {
        this.checkList.list.forEach((e) => {
          this.checkList.itemCheck.push(e.value); //forEach로 value 값 담아주기
        });
      }
    },
    updateChecked() {
      console.log("자식에게 받은 이벤트 및 데이터", this.checking);
      /*
      console.log(this.checked);
      this.checkList.allChecked =
        this.checkList.itemCheck.length === this.checkList.list.length;*/
      //allChecked = this.checkList.itemCheck.length === this.checkList.list.length > true
    },
  },
};
</script>

<style>
#app {
}
</style>

<template>
  <li>
    code를 보기전에,,,, 제가 생각한 로직은...
    <ol>
      <li>
        자식 checkBox, checkBoxAll component
        <ol>
          <li>checkBox에는 input 관련한 컴포넌트,</li>
          <li>
            checkBoxAll에는 checkBox 컴포넌트를 사용해서 모두 checked 됐을 때
            사용할 input 관련 컴포넌트 <br />
            (제가 구현하다가 자꾸 오류나서 이 부분은 여기에 없습니닷..😭)
          </li>
        </ol>
      </li>
      <li>
        부모 components 받아와서 붙이기
        <ol>
          <li>
            data(input에 담는 배열 등등,,), props data, check 관련 method
            있습니다.
          </li>
        </ol>
      </li>
    </ol>
    <p class="blight">
      input type="check"에는
      <span class="hlight">value 속성</span>과
      <span class="hlight">input 이벤트</span>를 사용합니다
    </p>
  </li>
  <li>
    code : checkBox components
    <div class="code">
      <pre>
&lt;label <strong class="hlight"> :class="{ checked: clickCheck }"</strong> class="label"&gt;
    &lt;input
      type="checkbox"
      :value="value"<div class="hlight">      @change="onChange"</div>      :checked="clickCheck"
    /&gt;
    &lt;slot name="span"&gt;&lt;/slot&gt;
  &lt;/label&gt;</pre>
    </div>
    <p class="exp">
      lebel은 input이 체크될 때마다 checked를 붙입니다.<br />
      :class="checked"는 clickCheck의 true false로 나타납니다.
    </p>
    <div class="code">
      <pre>
<strong class="hlight">computed</strong>: {
    clickCheck() {
        return this.checking.some(
            (el) = &gt; el === this.value
            (el) = &gt; el === this.value
            );
    },
},</pre>
    </div>
    <p class="exp">
      clickCheck(){} <br />
      clickCheck를 this.checking은 위에서 checkItem으로 push된 배열로 some()로
      el === this.value 일 때 true, 아니면 false 입니다.
      <br />( computed는 data이기때문에 return 필수!입니다.)
    </p>
    <p class="blight">
      some()함수는 배열에서 값을 찾는 조건을 callback 함수로 전달합니다.
    </p>
    <p class="exp"></p>
    <div class="code">
      <pre>
<strong class="hlight">onChange()</strong>{
      const idx = this.checking.indexOf(this.value);
      if (idx === -1) {
        this.checking.push(this.value);
      } else {
        this.checking.splice(idx, 1);
      }
      this.$emit("change", this.checking);
    },</pre>
    </div>
    <p class="blight">input="check"는 @change를 사용합니다 !</p>
    <p class="exp">
      @change="checkItem(value)"에서 this.checking 배열에서 value를 찾습니다.
      아무것도 없거나, 찾는 요소가 없을 때 (눌린후 다음에) checking 배열에
      value를 push합니다.(checked) <br />다시 누른 경우 splice함수를 사용해서
      idx에서 1개씩 지웁니다. ( checked 해제 )
    </p>
    <div class="code">
      <pre>
props: ["value", "checking"],
<strong class="hlight">model</strong>: {
    <strong class="hlight">prop</strong>: "checking",
    <strong class="hlight">evnet</strong>: "change",
  },</pre>
    </div>
    <p class="exp">
      props는 부모에게 받은 값, model은 'checking'의 값을 변경하는 이벤트와
      'checking'의 값으로 다시 부모로 보내야 하는 경우 위 코드 형식으로 보냅니닷
      !
    </p>
  </li>
  <li>
    code : 부모 페이지 ( allchecked )
    <div class="code">
      <pre>
  &lt;label
    for="all"
    class="label"
    :class="{ checked: this.checkList.allChecked }"
  &gt;
    &lt;input
      id="all"
      value="all"
      type="checkbox"
      v-model="checkList.allChecked"
      <strong class="hlight">@click="checkAll"</strong>
    /&gt;전체동의 {{ checkList.itemCheck }}
  &lt;/label&gt;</pre>
    </div>
    <p class="exp">
      lebel에는 class="checked"를 allchecked: Boolean 의 값에 따라 적용 할 수
      있도록 했습니다. checkList에서 선택된 값을 담는 배열을 v-model로
      설정했습니다. checked된 데이터가 담기는 배열의 length와 기본 checkbox에
      뿌려지는 배열의 length를 비교해 allChecked의 boolean에 맞춰서 동작합니다.
    </p>
    <div class="code">
      <pre>
checkAll() {
  this.checkList.itemCheck = [];
  if (!this.checkList.allChecked) {
    this.checkList.list.forEach((e) => {
      this.checkList.itemCheck.push(e.value);<span class="green">//forEach로 value 값 담아주기</span>
    });
  }
},</pre>
    </div>
    <p class="exp">상단 @click 이벤트 <br /></p>
    <div class="code">
      <pre>
            &lt;ul&gt;
          &lt;li v-for="(item, index) in checkList.list" :key="index"&gt;
            &lt;check-box
              v-model="checkList.itemCheck"
              :value="item.value"
              <strong class="hlight">@change="updateChecked(checkList)" </strong>
            &gt;
              &lt;span slot="span"&gt;
              item.value <span class="green">//{{}}</span>
              &lt;/span&gt;
            &lt;/check-box&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
          </pre>
    </div>
    <p class="exp">
      v-for를 사용해 data에 들어간 checkbox list 뿌립니다.<br />
    </p>
    <div class="code">
      <pre>
            updateChecked(list) {
      if (list.itemCheck.length === list.list.length) {
        list.allChecked = true;
      } else {
        list.allChecked = false;
      }
    }</pre
      >
    </div>
    <p class="exp">
      위에 있는 @change="updateChecked(checkList)" 입니다.<br />
      받아오는 list는 checklist입니다! checked된 배열인 itemCheck.length와 data
      list 내에 있는 배열의 length의 개수가 동일 한 경우 전체 체크됩니다.
    </p>
  </li>
</template>

<script>
export default {
  name: "appvueback",
};
</script>

<style scoped></style>
