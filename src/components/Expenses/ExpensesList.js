import ErrorBoundary from "../ErrorBoundary";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p className="mt-5 text-gray-100">Not Found Expense</p>;
  if (props.items.length === 0) {
    return expenseContent;
  }

  return (
    <ul>
      <ErrorBoundary>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ErrorBoundary>
    </ul>
  );
};

export default ExpensesList;
