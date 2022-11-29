import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import { useState } from "react";

const ExpenseBoard = (props) => {
  const [temp, setTemp] = useState([]);
  const dateHandler = (val) => {
    const test = props.data.filter((data, idx) => {
      const year = new Date(data.date).toLocaleDateString("en-us", {
        year: "numeric",
      });
      if (year === val) return data;
    });
    setTemp(test);
  };
  return (
    <div>
      <ExpenseFilter onDateHandler={dateHandler} />
      <Card>
        {temp.map((data, idx) => (
          <ExpenseItem
            key={idx}
            id={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseBoard;
