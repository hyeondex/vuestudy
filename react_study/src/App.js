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
          href={"/READ/" + li.id}
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
//create
function Create(props) {
  // 대문자
  return (
    <Article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // reload event 멈춤
          //하단 이벤트 확인해보면 (onCreate={(title, body) => {}})이 실행될 때 title, body를 넘겨줘야하는데 이때 onSubmit()이 실행되면서 넘겨줘야함
          const title = event.target.title.value; // event.target :  이벤트가 발생하는 타겟/ 여기서는 submit 버튼을 눌렀을 때 이벤트가 발생하는 타겟은 (event.target === form) , form의 title(태그)을 가져오려면 event.target.title / 그 타이틀의 value는 event.target.title.value
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        {/*onSubmit은 하단 input type="submit" 을 눌렀을 떄 실행되는 이벤트 => 페이지 reload*/}
        <div>
          <input type="text" name="title" placeholder="title" />
        </div>

        <div>
          <textarea name="body" placeholder="body"></textarea>
        </div>
        <div>
          <input type="submit" value="create Button" />
        </div>
      </form>
    </Article>
  ); // 내가 담을 태그
}
// app
function App() {
  const [list, setList] = useState([
    { id: 1, title: "one", body: "첫번째 메뉴를 누르면 나오면 페이지" },
    { id: 2, title: "two", body: "두번째 메뉴를 누르면 나오는 페이지" },
    { id: 3, title: "three", body: "세번째 메뉴를 누르면 나오는 페이지" },
  ]);
  /*const _mode = useState("welcome");
  const mode = _mode[0];
  const setMode = _mode[1];*/
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextID] = useState("4"); // 지금 list에 있는 id의 마지막 값은 3 > 다음 값으로 사용될 값은 4
  let content = null;

  if (mode === "welcome") {
    content = (
      <Article article="Welcome" body="header 누르면 나오는 페이지야"></Article>
    );
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < list.length; i++) {
      //console.log(list[i].id, id);
      if (list[i].id === id) {
        title = list[i].title;
        body = list[i].body;
      }
    }
    content = <Article article={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    // 위에서 사용 하는 mode에서 안걸리니까
    content = (
      <Create
        onCreate={(title, body) => {
          // nav에 새롭게 추가 되어야 되는것
          const newList = { id: nextId, title: title, body: body }; // 새롭게 추가될 리스트 만들기
          // 근데 우리는 key 값을 id로 사용하니까 새롭게 키를 다룰 뭔가를 만들어야함 상단 nav에서 쓰는 onChangeMode의 값을 변경해주려면 id 값이 필요함 이때 우리가 설정한 nextId의 값을 넣어줌
          const newListAdd = [...list]; //내가사용해야되는 데이터가 object, array인 경우 기존 데이터를 수정 하지 않고, 복사한 데이터를 사용함
          newListAdd.push(newList); // 복사한 리스트에 새로운 배열 리스트를 push()
          setList(newListAdd); // 새로운 데이터가 추가 되었을 때 useState로 재 실행 시켜야 하기 때문에, setList에 복사한 배열(새로운 데이터까지 들어간) 넣어줌
          /*  1. 들어온 데이터가 새로운 데이터인지 기존 데이터와 확인해봄 2. 새로운 데이터 일시  재 실행됨 */
          setId(nextId);
          setNextID(nextId);
        }}
      ></Create>
    );
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
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      {/*{} ""로 감싸서 보내면 문자열로 보내지고 {}로 넣어주면 데이터 바인딩*/}
      {/*<Article article="article이 되볼게" body="body도 생겨볼게"></Article>*/}
      {content}
      <Create>
        <a
          href="/create"
          onClick={(event) => {
            event.preventDefault(); // onclick의 기본 동작 제어
            setMode("CREATE");
          }}
        >
          create
        </a>
      </Create>
    </div>
  );
}

export default App;
