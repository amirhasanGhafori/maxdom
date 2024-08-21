import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      id:Math.random().toString(),
      ...enteredExpenseData,
    }

    props.onAddExpense(expenseData);
  }

  return (
    <>
      <h1>Add New Expense</h1>
      <ExpenseForm showToast={props.onHandelStatus} onSaveExpenseData={saveExpenseDataHandler}/>
    </>
  );
};

export default NewExpense;
