// 사용자 비용을 받는 form component
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  /*const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");*/
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (e) => {
    //onChange 되면 실행
    //setEnteredTitle(e.target.value);
    /*  setUserInput({
      ...userInput, // 스프레드로 다같이 묶여 있는 값을 가져와야ㅕ함
      enteredTitle: e.target.value,
    });*/
    //다수로 묶여 잇는 값을 사용 할 경우
    setUserInput((prevState) => {
      //prevState 지금 변경되기 직전의 값
      console.log(e.target.value);
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    //onChange 되면 실행
    //setEnteredAmount(e.target.value);
    setUserInput({
      ...userInput, // 스프레드로 다같이 묶여 있는 값을 가져와야ㅕ함
      enteredAmount: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    //setEnteredDate(e.target.value);
    setUserInput({
      ...userInput, // 스프레드로 다같이 묶여 있는 값을 가져와야ㅕ함
      enteredDate: e.target.value,
    });
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
