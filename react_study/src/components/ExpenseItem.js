import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

// 비용 관련 component
function ExpenseItem(props) {
  // 위에 변수로 빼서 사용하기
  return (
    <div className="expense-item">
      <div className="number">{props.id}</div>
      <div className="desc">
        {props.title}
        <ExpenseDate date={props.date} />
      </div>

      <div className="price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
