// form 담아두는 component
import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm의   expenseData를 가져옴
      id: Math.random().toString(),
    };
    props.onExpenseHandler(expenseData);
  };
  const [view, setView] = useState(false);
  const addForm = () => {
    console.log(view);
    console.log(!view);
    return setView(!view);
    //return [props, ...setView(true)];
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <button onClick={addForm}>add form</button>
    </div>
  );
};

export default NewExpense;
