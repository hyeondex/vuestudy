import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";

// 비용 관련 component
const ExpenseItem = (props) => {
  // 위에 변수로 빼서 사용하기

  //let title = props.title;
  const [title, updateTitle] = useState(props.title);
  const clickHandler = () => {
    console.log("실행");
    updateTitle("updated! title");
  };

  return (
    <div className="expense-item">
      <div className="number">{props.id}</div>
      <div className="desc">
        {title}
        <ExpenseDate date={props.date} />
      </div>
      <ExpensePrice price={props.amount} />
      <button onClick={clickHandler}>button</button>
    </div>
  );
};

export default ExpenseItem;
