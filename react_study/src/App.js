import React, {Component} from 'react';
import {Route, Router} from "react-router-dom";
import boardList from "./components/view/boardList";
import boardInput from "./components/view/boardInput";


// app
function App() {

    return (
    <Router>
        <div>

            <Route exact path="./components/view/boardInput.js" Component ={boardInput}> input</Route>
            <Route exact path="./components/view/boardInput.js.js" Component ={boardList} >list</Route>
        </div>
    </Router>

    );
}

export default App;
