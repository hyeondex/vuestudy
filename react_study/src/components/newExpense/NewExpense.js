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
  const [edit, setEdit] = useState(false);
  const editOpenForm = () => {
    return setEdit(!edit);
  };
  return (
    <div>
      {edit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          editCloseForm={editOpenForm}
        />
      )}
      {!edit && <button onClick={editOpenForm}>add form</button>}
    </div>
  );
};

export default NewExpense;
