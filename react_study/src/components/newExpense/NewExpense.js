// form 담아두는 component
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

  return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
};

export default NewExpense;
