// 사용자 비용을 받는 form component
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const openForm = (e) => {
    e.preventDefault();
    document.querySelector(".form form").style.display = "block";
    e.target.style.display = "none";
  };
  const closeForm = () => {
    document.querySelector(".form .add-btn button").style.display = "block";
    document.querySelector(".form form").style.display = "none";
  };
  const submitHandler = (e) => {
    e.preventDefault(); // page reload X
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData); // NewExpense에서 받는 매개변수
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    closeForm();
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label>
          <span>Title</span>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </label>
        <label>
          <span>Date</span>
          <input
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </label>
        <div className="btn-wrap">
          <button type="button" onClick={closeForm}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
      <div className="btn-wrap add-btn">
        <button type="button" onClick={openForm}>
          add expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
