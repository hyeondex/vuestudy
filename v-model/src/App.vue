<template>
  <div id="app">
    <div class="wrap">
      <h1>V-model</h1>
      <ul>
        <li>
          내부적으로는 서로 다른 속성을 사용하고, 서로 다른 요소를 받아 사용자
          이벤트에 의해 실행되는 vue 메서드를 전송합니다 !
        </li>
        <li>
          단방향 바인딩 > 양방향 바인딩이 가능합니다 <br />
          양방향 바인딩 :: 데이터가 있는 값이 뷰에 나타나고 뷰에서 값이 변경되면
          데이터의 값도 바뀌는 것
        </li>
        <li>
          사용법<br />
          v-bind랑 v-on 기능을 조합해서 사용한다! <br />
          v-bind : vue 인스턴스의 데이터 속성을 해당 html 요소에 연결할 때
          사용합니다<br />
          v-on : 해당 html 요소의 이벤트를 뷰 인스턴스의 로직과 연결할 때
          합니다.
        </li>
        <li>
          사용자의 입력을 받는 UI 요소들에 v-model을 사용하면 입력값이 vue
          데이터 속성으로 연결됩니다.
          <p class="blight">
            input text, textarea 에서는
            <span class="hlight">value 속성</span>과
            <span class="hlight">input 이벤트</span>를 사용합니다
          </p>
          <div class="ex">
            ex) input checkbox ::
            <input
              :value="inputText"
              @input="updateInput"
              placeholder="아무거나넣어보기"
            />
            {{ inputText }}
          </div>
          <div class="code">
            <pre>
&lt;input v-bind:value="inputText" v-on:input="updateInput" /&gt;</pre
            >
          </div>
        </li>
        <li>
          input check-box / radio<br />
          <p class="blight">
            <span class="hlight">checked</span> 속성과
            <span class="hlight">change</span> 이벤트를 사용합니다.
          </p>

          <p class="blight ty2">
            기본 input 속성 중에 기본으로 사용 할 수 있는
            <span class="hlight">checked, value, selected</span> 속성을
            무시합니다!
          </p>
          <div class="ex">
            <label for="sh">
              <input
                type="checkbox"
                checked
                id="sh"
                value="클릭된 나"
                v-model="checkList"
              />이수햔
            </label>
            <label for="de">
              <input
                type="checkbox"
                id="de"
                value="도은"
                v-model="checkList"
              />김도니
            </label>
            <label for="sy">
              <input
                type="checkbox"
                id="sy"
                value="소연"
                v-model="checkList"
              />소여니
            </label>
            <br />
            ex) input checked :: {{ checkList }}
          </div>
          <div class="code">
            <pre>
&lt;label for="sh"&gt;
  &lt;input type="checkbox" id="sh" value="클릭된 나" checked <strong class="hlight">v-model="checkList"</strong>/&gt;이수햔
&lt;/label&gt;
&lt;label for="de"&gt;
  &lt;input type="checkbox" id="de" value="도은"  <strong class="hlight">v-model="checkList"</strong>/&gt;김도니
&lt;/label&gt;
&lt;label for="sy"&gt;
 &lt;input type="checkbox" id="sy" value="소연"  <strong class="hlight">v-model="checkList"</strong> /&gt;소여니
&lt;/label&gt; </pre>
          </div>

          <div class="ex">
            <label for="sh1">
              <input
                type="radio"
                id="sh1"
                value="클릭된 나"
                v-model="radioList"
              />이수햔
            </label>
            <label for="de1">
              <input
                type="radio"
                id="de1"
                value="도은"
                v-model="radioList"
              />김도니
            </label>
            <label for="sy1">
              <input
                type="radio"
                id="sy1"
                value="소연"
                v-model="radioList"
              />소여니
            </label>
            <br />
            ex) input radio :: {{ radioList }}
          </div>
          <div class="code">
            <pre>
&lt;label for="sh1"&gt;
  &lt;input type="radio" id="sh1" value="클릭된 나" <strong class="hlight">v-model="radioList"</strong>/&gt;이수햔
&lt;/label&gt;
&lt;label for="de1"&gt;
  &lt;input type="radio" id="de1" value="도은"  <strong class="hlight">v-model="radioList"</strong>/&gt;김도니
&lt;/label&gt;
&lt;label for="sy1"&gt;
 &lt;input type="checkbox" id="sy1" value="소연"  <strong class="hlight">v-model="radioList"</strong> /&gt;소여니
&lt;/label&gt; </pre>
          </div>
        </li>
        <li>
          select <br />
          <p class="blight">
            select에서는
            <span class="hlight">value 속성</span>과
            <span class="hlight">change 이벤트</span>를 사용합니다
          </p>
          <div class="ex">
            <select v-model="selected">
              <option disabled value="">
                벨 런 스 게 임 ? 돈을 받는다면 ?
              </option>
              <option>10원 동전으로 500만원 받기(입금 금지)</option>
              <option>지폐로 50만원 받기</option>
              <option>안고르기 없음 !</option>
            </select>
            <p>내가 고른거 ~ : {{ selected }}</p>
          </div>
          <div class="code">
            <pre>&lt;select <span class="hlight">v-model="selected"</span>&gt;
  &lt;option disabled value=""&gt;
    벨 런 스 게 임 ? 돈을 받는다면 ?
  &lt;/option&gt;
  &lt;option&gt;10원 동전으로 500만원 받기(입금 금지)&lt;/option&gt;
  &lt;option&gt;지폐로 50만원 받기&lt;/option&gt;
  &lt;option&gt;안고르기 없음 !&lt;/option&gt;
&lt;/select&gt;
&lt;p&gt;내가 고른거 ~ : {{ selected }}&lt;/p&gt;</pre>
          </div>
        </li>
        <li>
          Todolist
          <div class="todo-wrap">
            <todo-header></todo-header>
            <todo-input @addTodo="addTodo"></todo-input>
            <todo-list
              :propsdata="todoItems"
              @removeTodo="removeTodo"
            ></todo-list>
            <todo-footer @:removeAll="clearAll"></todo-footer>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./css/app.css";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default {
  name: "App",
  components: { TodoFooter, TodoHeader, TodoList, TodoInput },
  data() {
    return {
      inputText: "",
      checkList: [],
      radioList: "",
      selected: "",
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
          console.log(localStorage.key(i));
        }
      }
    }
  },

  methods: {
    updateInput: function (event) {
      var updatedText = event.target.value;
      //console.log(event.target.value)
      this.inputText = updatedText;
    },
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem); //키랑 값
      this.todoItems.push(todoItem);
      console.log(this.todoItems);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      console.log(index);
    },
  },
};
</script>

<style>
.todo-wrap {
  margin: 0 auto;
  padding: 20px;
  background: #000;
  text-align: center;
}
select {
  background: #000;
  font-size: 20px;
  color: #fff;
  border-radius: 5px;
}
</style>
