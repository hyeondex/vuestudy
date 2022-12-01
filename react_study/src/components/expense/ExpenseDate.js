import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date?.toLocaleString("en-US", { month: "numeric" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date?.getFullYear();

  return (
    <div className="date">
      {year} / {month} / {day}
    </div>
  );
};

export default ExpenseDate;
