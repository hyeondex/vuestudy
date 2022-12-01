import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import { useState } from "react";

const ExpenseBoard = (props) => {
  const [year, setYear] = useState("2022");
  const dateHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const tempList = props.data.filter((data) => {
    return data.date.getFullYear().toString() === year;
  });

  //nodata case
  if (tempList.length === 0) {
    return <div className="nodata">nodata</div>;
  }

  return (
    <Card>
      <ExpenseFilter onDateHandler={dateHandler} selected={year} />
      {tempList.map((data) => (
        <ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseBoard;
