import { useContext, useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseContext from "../../store/expense-context";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const ctx = useContext(ExpenseContext);

  const filtredExpense = ctx.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  

  return (
    <>
      <div className="p-3 bg-gray-800 max-w-2xl mx-auto rounded-lg mt-2">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filtredExpense} />
        <ExpensesList items={filtredExpense} />
      </div>
    </>
  );
}

export default Expense;
