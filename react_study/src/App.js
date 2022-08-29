import React from "react";
import ExpenseItem from "./components/ExpenseItem";

// app
function App() {
    const data = [
        {
            id : 0,
            title : "title1",
            amount : "amount1",
            date : new Date(2022,8,17)
        },
        {
            id : 1,
            title : "title2",
            amount : "amount2",
            date : new Date(2022,8,17)
        },
        {
            id : 2,
            title : "title3",
            amount : "amount3",
            date : new Date(2022,8,17)
        },
        {
            id : 3,
            title : "title4",
            amount : "amount4",
            date : new Date(2022,8,17)
        }
    ]

  return (
    <div>
        <ExpenseItem title={data[0].title} id={data[0].id} amount={data[0].amount} date={data[0].date} ></ExpenseItem>
        <ExpenseItem title={data[1].title} id={data[1].id} amount={data[1].amount} date={data[1].date} ></ExpenseItem>
        <ExpenseItem title={data[2].title} id={data[2].id} amount={data[2].amount} date={data[2].date} ></ExpenseItem>
        <ExpenseItem title={data[3].title} id={data[3].id} amount={data[3].amount} date={data[3].date} ></ExpenseItem>

    </div>
  );
}

export default App;
