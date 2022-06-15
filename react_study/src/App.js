//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Header(props) {
  //대 문 자 로 기수해야함
  return (
    <header>
      <h1>
        <a
          href="#none"
          onClick={(e) => {
            e.preventDefault(); //기존 이벤트를 막음
            // console.log("클릭 이벤트 막음");
            props.onChangeMode(); // props로 function을 불러옴
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
    //html의 유사하게 만든 것으로 props로 받아올 데이터를 위해 event를 preventDefault()함
  );
}

function Article(props) {
  return (
    <article>
      {props.article}
      <p>{props.body}</p>
    </article>
  );
}

function Nav(props) {
  const array = []; // 담아줄 배열 만들기
  for (let i = 0; i < props.list.length; i++) {
    //console.log(i, props.list.id);
    let li = props.list[i];
    array.push(
      <li key={li.id}>
        <a
          id={li.id}
          href={"/read/" + li.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(Number(e.target.id));
          }}
        >
          {li.title}
        </a>
        <p>{li.body}</p>
      </li>
    );
  }

  return (
    <nav>
      <ul>{array}</ul>
    </nav>
  );
}
// app
function App() {
  const list = [
    { id: 1, title: "one", body: "첫번째 메뉴를 누르면 나오면 페이지" },
    { id: 2, title: "two", body: "두번째 메뉴를 누르면 나오는 페이지" },
    { id: 3, title: "three", body: "세번째 메뉴를 누르면 나오는 페이지" },
  ];
  /*const _mode = useState("welcome");
  const mode = _mode[0];
  const setMode = _mode[1];*/
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  let content = null;
  if (mode === "welcome") {
    content = (
      <Article article="Welcome" body="header 누르면 나오는 페이지야"></Article>
    );
  } else if (mode === "read") {
    let title,
      body = null;
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].id, id);
      if (list[i].id === id) {
        title = list[i].title;
        body = list[i].body;
      }
    }
    content = <Article article={title} body={body}></Article>;
  }
  return (
    <div className="App">
      <Header
        title="title 변경해볼게"
        onChangeMode={() => {
          setMode("welcome");
        }}
      ></Header>
      <Nav
        list={list}
        onChangeMode={(id) => {
          setMode("read");
          setId(id);
        }}
      ></Nav>
      {/*{} ""로 감싸서 보내면 문자열로 보내지고 {}로 넣어주면 데이터 바인딩*/}
      {/*<Article article="article이 되볼게" body="body도 생겨볼게"></Article>*/}
      {content}
    </div>
  );
}

export default App;
