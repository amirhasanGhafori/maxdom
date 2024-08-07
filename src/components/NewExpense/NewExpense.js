import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }

    props.onAddExpense(expenseData);
  }

  return (
    <>
      <h1>Add New Expense</h1>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </>
  );
};

export default NewExpense;
