// 사용자 비용을 받는 form component
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleChangeHandler = (e) => {
    //onChange 되면 실행
    setEnteredTitle(e.target.value);
    console.log(
      "현재 input value",
      e.target.value,
      "enteredTitle",
      enteredTitle
    );
    //console.log("setEnteredTitle", setEnteredTitle);
  };
  const amountChangeHandler = (e) => {
    //onChange 되면 실행
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <div className="form">
      <form>
        <label>
          <span>Title</span>
          <input type="text" onChange={titleChangeHandler} />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </label>
        <label>
          <span>Date</span>
          <input type="date" min="2019-01-01" onChange={dateChangeHandler} />
        </label>
      </form>
    </div>
  );
};

export default ExpenseForm;
