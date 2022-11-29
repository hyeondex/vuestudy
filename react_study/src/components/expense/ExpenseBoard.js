import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";

const ExpenseBoard = (props) => {
  const dateHandler = (val) => {
    props.data.map((data, idx) => {
      const year = new Date(data.date).toLocaleDateString("en-us", {
        year: "numeric",
      });
      return year === val ? console.log(13) : console.log(false);
    });
  };
  return (
    <div>
      <ExpenseFilter onDateHandler={dateHandler} />
      <Card>
        {props.data.map((data, idx) => (
          <ExpenseItem
            key={idx}
            id={data.id}
            title={data.title}
            amount={data.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseBoard;
