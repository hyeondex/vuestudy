import React from "react";
import Chart from "../chart/Chart";

const ExpenseChart = (props) => {
  console.log(props, "expenseChart");
  const expenseDefaultData = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth();
    expenseDefaultData[expenseMonth].value += expense.amount;
  }

  return (
    <div>
      <Chart dataPoints={expenseDefaultData} />
    </div>
  );
};

export default ExpenseChart;
