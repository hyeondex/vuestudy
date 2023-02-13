import React from "react";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "@types/react";

const Expense = (props) => {
  const [year, setYear] = useState("2022");
  const dateHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const tempList = props.data.filter((data) => {
    return data.date.getFullYear().toString() === year;
  });

  /*let list = <p className="nodata">no data</p>;*/

  return (
    <div>
      <ExpenseFilter onDateHandler={dateHandler} selected={year} />
      <ExpenseList items={tempList} />
    </div>
  );
};

export default Expense;
