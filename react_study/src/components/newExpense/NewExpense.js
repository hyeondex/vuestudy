// form 담아두는 component
import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [edit, setEdit] = useState(false);
  const editOpenForm = () => {
    console.log("editOpenForm", !edit);
    return setEdit(!edit);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm의   expenseData를 가져옴
      id: Math.random().toString(),
    };
    const { amount, title } = expenseData;
    if (amount !== "" || title !== "") {
      props.onExpenseHandler(expenseData);
      editOpenForm();
    } else {
      alert("빈칸을 채워주세요! ");
    }
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
