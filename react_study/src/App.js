import React, { useState } from "react";
import Card from "./components/common/Card";
import Input from "./components/todo_project/input";
import List from "./components/todo_project/list/list";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const valueSensing = (val) => {
    setInputValue(val);
  };
  //const todoList = [...inputValue];
  return (
    <div className="container">
      <Card>
        <Input value={inputValue} valueSensing={valueSensing} />
        <List />
        {inputValue}
      </Card>
      {/*form , list */}
    </div>
  );
};

export default App;
