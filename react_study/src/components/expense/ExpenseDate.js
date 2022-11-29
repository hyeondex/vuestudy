import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date?.toLocaleString("en-US", { month: "long" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date?.getFullYear();

  return (
    <div className="date">
      {month} {day} {year}
    </div>
  );
};

export default ExpenseDate;

/*
 * 처음에 props로 넘어가는 값이 없어져서 그런듯?
 * ?. : 옵셔널 체이닝
 * 프로퍼티가 없는 중첩객체를 에러 없이 접근 가능
 * null, undefined인 경우 undefined 반환
 * * */
