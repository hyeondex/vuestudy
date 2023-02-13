import "./ExpenseLIst.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  //nodata case 내 작업
  /*if (tempList.length === 0) {
    return <div className="nodata">nodata</div>;
  }*/
  console.log(props, " props");
  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;

/*
* <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        * // 이렇게 한번에 적어 줄 수 도 있습니다.
        {props.items
          .filter(
            (expenseItem) =>
              expenseItem.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>*/
