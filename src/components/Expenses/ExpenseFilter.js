function ExpenseFilter(props) {

    const dropdownChangeHandler = (event)=>{
        props.onChangeFilter(event.target.value);
    }

  return (
    <>
      <form className="max-w-2xl mx-auto">
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select value={props.selected} onChange={dropdownChangeHandler}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a country</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </form>
    </>
  );
}

export default ExpenseFilter;
