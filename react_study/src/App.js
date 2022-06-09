//import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  //대 문 자 로 기수해야함
  return (
    <header>
      <h1>
        <a href="#none">{props.title}</a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const array = []; // 담아줄 배열 만들기
  for (let i = 0; i < props.list.length; i++) {
    //console.log(i, props.list.id);
    let li = props.list[i];
    array.push(
      <li key={li.id}>
        <a href={"/read/" + li.id}>{li.title}</a>
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

function Article(props) {
  return (
    <article>
      {props.article}
      <p>{props.body}</p>
    </article>
  );
}
function App() {
  const list = [
    { id: 1, title: "one", body: "header" },
    { id: 2, title: "two", body: "nav" },
    { id: 3, title: "three", body: "body" },
  ];
  return (
    <div className="App">
      <Header title="title 변경해볼게"></Header>
      <Nav list={list}></Nav>
      {/*{} ""로 감싸서 보내면 문자열로 보내지고 {}로 넣어주면 데이터 바인딩*/}
      <Article article="article이 되볼게" body="body도 생겨볼게"></Article>
      <Article article="dhdP m되볼게" body="body도 생겨볼게"></Article>
    </div>
  );
}

export default App;
