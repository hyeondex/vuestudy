import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import { useState } from "react";
//import { useEffect } from "react";

const ExpenseBoard = (props) => {
  const [temp, setTemp] = useState([]);
  const [year, setYear] = useState("2022");
  // dataHandler 실행 >
  const dateHandler = (val) => {
    const tempList = props.data.filter((data) => {
      const tempYear = new Date(data.date).toLocaleDateString("en-us", {
        year: "numeric",
      });
      if (val === tempYear) {
        return data;
      }
    });
    setTemp(tempList);
    setYear(val);
  };

  return (
    <div>
      <ExpenseFilter onDateHandler={dateHandler} selected={year} />
      <Card>
        {temp.map((data, idx) => (
          <ExpenseItem
            key={idx}
            id={data.id === 0 ? "" : data.id}
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
