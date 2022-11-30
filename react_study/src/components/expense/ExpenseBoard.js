import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import { useEffect, useState } from "react";
//import { useEffect } from "react";

const ExpenseBoard = (props) => {
  const [temp, setTemp] = useState([]);
  const [year, setYear] = useState("2022");
  /*  if (year === "2022") {
    console.log("start");
    const defaultYearList = props.data.filter((data) => data.date === 2022);
    console.log(defaultYearList);
    return setTemp(defaultYearList);
  }*/
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
