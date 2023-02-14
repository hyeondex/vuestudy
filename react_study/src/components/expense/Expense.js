import React, { useState } from "react";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [year, setYear] = useState("2022");

  const dateHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const tempList = props.items.filter((data) => {
    return data.date.getFullYear().toString() === year;
  });

  console.log(tempList, "tempList");
  return (
    <div>
      <ExpenseFilter onDateHandler={dateHandler} selected={year} />
      <ExpenseChart expense={tempList} />
      <ExpenseList items={tempList} />
    </div>
  );
};

export default Expense;
