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
  const dateHandler = (selectedYear) => {
    const tempList = props.data.filter((data) => {
      const tempYear = new Date(data.date).toLocaleDateString("en-us", {
        year: "numeric",
      });
      if (selectedYear === tempYear) {
        return data;
      }
    });
    setTemp(tempList);
    setYear(selectedYear);
  };

  return (
    <Card>
      <ExpenseFilter onDateHandler={dateHandler} selected={year} />
      {temp.map((data, idx) => (
        <ExpenseItem
          key={idx}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseBoard;
