import "./ExpenseItem.css";

// 비용 관련 component
function ExpenseItem(Props) {

  return (
    <div className="expense-item">
        <div id={Props.id}></div>
      <div title={Props.title}></div>
      <div >
        <h2 date={Props.date}>{}</h2>
        <div amount={Props.amount}></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
