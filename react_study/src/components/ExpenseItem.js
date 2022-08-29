import "./ExpenseItem.css";

// 비용 관련 component
function ExpenseItem(props) {
  // 위에 변수로 빼서 사용하기
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <div className="expense-item">
      <div className="number">{props.id}</div>
      <div className="desc">
        {props.title}
        <div className="date">
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
      </div>

      <div className="price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
