import "./ExpenseItem.css";

// 비용 관련 component
function ExpenseItem(props) {

  return (
    <div className="expense-item">
        <div>{props.id}</div>
      <div >{props.title}</div>
        <h2 >{props.date.toDateString()}</h2>
      <div >
        <div>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
