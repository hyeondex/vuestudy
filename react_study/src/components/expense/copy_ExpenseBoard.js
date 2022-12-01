//2회차
import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import { useState } from "react";
import { useEffect } from "react";

const ExpenseBoard = (props) => {
  const [temp, setTemp] = useState([]);
  const [year, setYear] = useState();
  // dataHandler 실행 >
  useEffect(
    () => {
      setTemp([]);
      setYear("2022");
    },
    [],
    ""
  );
  const dateHandler = (val) => {
    // val : select value
    const tempList = props.data.filter((data) => {
      const years = new Date(data.date).toLocaleDateString("en-us", {
        years: "numeric",
      });
      if (val === years) {
        return data;
      }
    });
    if (val === "all") {
      setYear(val);
      return setTemp(props.data);
    }
    setTemp(tempList);
    setYear(val);
  };

  return (
    <div>
      <ExpenseFilter onDateHandler={dateHandler} defaultValue="2022" />
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

//export default ExpenseBoard;

//1회차
/*import "./ExpenseBoard.css";
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

export default ExpenseBoard;*/
