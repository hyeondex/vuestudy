import "./ExpenseItem.css";

// 비용 관련 component
function ExpenseItem() {
  const expenseDate = new Date(2022, 8, 17);
  const expenseTitle = "title";
  const expenseAmount = 123456789;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
