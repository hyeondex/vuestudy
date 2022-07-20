//import "./App.css";
import BoardList from "./components/view/boardList";
import BoardInput from "./components/view/boardInput";

// app
function App() {

    return (
        <main>
            <BoardList name="게시판 리스트"></BoardList>
            <BoardInput name="게시물 작성" ></BoardInput>
        </main>
    );
}

export default App;
