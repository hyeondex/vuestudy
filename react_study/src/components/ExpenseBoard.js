import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Common from "./Common";

function ExpenseBoard(props) {
  return (
    <Common className="board">
      <ExpenseItem
        id={props.data[0].id}
        title={props.data[0].title}
        price={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        id={props.data[1].id}
        title={props.data[1].title}
        price={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        id={props.data[2].id}
        title={props.data[2].title}
        price={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        id={props.data[3].id}
        title={props.data[3].title}
        price={props.data[3].amount}
        date={props.data[3].date}
      />
    </Common>
  );
}

export default ExpenseBoard;
