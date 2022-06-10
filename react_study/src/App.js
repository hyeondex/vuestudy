//import logo from "./logo.svg";
import "./App.css";

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
            props.onChangeMode(e.target.id);
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
    { id: 1, title: "one", body: "header" },
    { id: 2, title: "two", body: "nav" },
    { id: 3, title: "three", body: "body" },
  ];
  return (
    <div className="App">
      <Header
        title="title 변경해볼게"
        onChangeMode={() => {
          alert("Header 입니다.");
        }}
      ></Header>
      <Nav
        list={list}
        onChangeMode={(id) => {
          alert(id + "입니다");
        }}
      ></Nav>
      {/*{} ""로 감싸서 보내면 문자열로 보내지고 {}로 넣어주면 데이터 바인딩*/}
      <Article article="article이 되볼게" body="body도 생겨볼게"></Article>
      <Article article="dhdP m되볼게" body="body도 생겨볼게"></Article>
    </div>
  );
}

export default App;
