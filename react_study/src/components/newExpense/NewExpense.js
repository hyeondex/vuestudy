// form 담아두는 component
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm의   expenseData를 가져옴
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
