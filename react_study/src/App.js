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
      <p> title : {props.title}</p>
      <p> body : {props.body}</p>
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
        {/*<p>{li.body}</p>*/}
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
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  ); // 내가 담을 태그
}
//update
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.title);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}
//update

// app
function App() {
  /*const _mode = useState("welcome");
  const mode = _mode[0];
  const setMode = _mode[1];*/
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4); // 지금 list에 있는 id의 마지막 값은 3 > 다음 값으로 사용될 값은 4
  const [list, setList] = useState([
    { id: 1, title: "one", body: "첫번째 메뉴를 누르면 나오면 페이지" },
    { id: 2, title: "two", body: "두번째 메뉴를 누르면 나오는 페이지" },
    { id: 3, title: "three", body: "세번째 메뉴를 누르면 나오는 페이지" },
  ]);
  let content = null;
  let contextControl = null;
  if (mode === "welcome") {
    content = (
      <Article title="Welcome" body="header 누르면 나오는 페이지야"></Article>
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
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <>
        {"/*이렇게 쓰면 빈태그로 나옴*/ "}
        <li>
          <a
            href={"/update" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={(event) => {
              const newListDel = [];
              for (let i = 0; i < list.length; i++) {
                if (list[i].id !== id) {
                  newListDel.push(list[i]);
                }
              }
              setList(newListDel);
              setMode("WELCOME");
            }}
          />
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    // 위에서 사용 하는 mode에서 안걸리니까
    content = (
      <Create
        onCreate={(title, body) => {
          const newList = { id: nextId, title: title, body: body };
          const newListCopy = [...list];
          newListCopy.push(newList);
          setList(newListCopy);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        title = list[i].title;
        body = list[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newList = [...list];
          const updatedList = { id: id, title: title, body: body };
          for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === id) {
              newList[i] = updatedList;
              break;
            }
          }
          setList(newList);
          setMode("READ");
        }}
      ></Update>
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
      {/*<Article title="article이 되볼게" body="body도 생겨볼게"></Article>*/}
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
