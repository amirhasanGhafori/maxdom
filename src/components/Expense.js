import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  return (
    <>
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
      <ExpenseItem
        title={props.items[4].title}
        date={props.items[4].date}
        amount={props.items[4].amount}
      />
    </>
  );
}

export default Expense;
