import React, { useState } from "react";
import ExpenseList from "./components/expense_project/expense/ExpenseList";
import NewExpense from "./components/expense_project/newExpense/NewExpense";
import "../src/asset/common.css";
import Card from "./components/common/Card";
import Chart from "./components/expense_project/chart/Chart";
import Expense from "./components/expense_project/expense/Expense";
// app

const Dummy_data = [
  {
    id: 0,
    title: "title1",
    amount: 9800,
    date: new Date(2022, 2, 17),
  },
  {
    id: 1,
    title: "title2",
    amount: 10000,
    date: new Date(2019, 0, 17),
  },
  {
    id: 2,
    title: "title3",
    amount: 900,
    date: new Date(2021, 8, 17),
  },
  {
    id: 3,
    title: "title4",
    amount: 500,
    date: new Date(2022, 8, 17),
  },
];
const App = () => {
  const [data, setData] = useState(Dummy_data);
  const addExpenseHandler = (expense) => {
    //console.log("props를 받아 app으로");
    setData((prevState) => {
      return [expense, ...prevState];
    }); //기존 데이터 + 새롭게 form에서 추가 되는 데이터
  };

  return (
    <div className="container">
      <Card>
        <NewExpense onExpenseHandler={addExpenseHandler} />
        <Expense items={data} />
      </Card>
    </div>
  );
};

export default App;
