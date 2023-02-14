import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";

// 비용 관련 component
const ExpenseItem = (props) => {
  //let title = props.title;
  const [title, updateTitle] = useState(props.title);
  const clickHandler = () => {
    updateTitle(title);
  };
  setTimeout(clickHandler, 3000);

  return (
    <li className="expense-item">
      <div className="number">{props.id}</div>
      <div className="desc">
        {title}
        <ExpenseDate date={props.date} />
      </div>
      <ExpensePrice price={props.amount} />
      <button onClick={clickHandler}>button</button>
    </li>
  );
};

export default ExpenseItem;
