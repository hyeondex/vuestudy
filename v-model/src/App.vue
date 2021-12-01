<template>
  <div id="app">
    <div class="wrap">
      <h1>V-model</h1>
      <ul>
        <li>
          단방향 바인딩 > 양방향 바인딩이 가능합니다 <br />
          양방향 바인딩 :: 데이터가 있는 값이 뷰에 나타나고 뷰에서 값이 변경되면
          데이터의 값도 바뀌는 것
        </li>
        <li>
          사용자의 입력을 받는 UI 요소들에 v-model을 사용하면 입력값이 vue
          데이터 속성으로 연결됩니다.
          <div class="ex">
            ex) input checkbox ::
            <input
              v-bind:value="inputText"
              v-on:input="updateInput"
              placeholder="아무거나넣어보기"
            />
          </div>
          <div class="code">
            <pre>
&lt;input v-bind:value="inputText" v-on:input="updateInput" /&gt;</pre
            >
          </div>
        </li>
        <li>
          input check-box / radio btn
          <div class="ex">
            <label for="sh">
              <input
                type="checkbox"
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
  &lt;input type="checkbox" id="sh" value="클릭된 나" <strong class="hlight">v-model="checkList"</strong>/&gt;이수햔
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
          Todolist
          <div class="todo-wrap">
            <todo-header></todo-header>
            <todo-input v-on:addTodo="addTodo"></todo-input>
            <todo-list
              v-bind:propsdata="todoItems"
              @removeTodo="removeTodo"
            ></todo-list>
            <todo-footer v-on:removeAll="clearAll"></todo-footer>
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
      this.inputText = updatedText;
    },
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
      console.log(todoItem);
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
</style>
