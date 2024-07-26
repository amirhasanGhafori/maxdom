function ExpenseDate(props){

    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <>
        <div className="flex flex-col items-center bg-gray-800 rounded-lg text-white w-32 p-2 gap-2">
            <span className="text-base">{day}</span>
            <span className="text-base">{month}</span>
            <span className="text-base">{year}</span>
        </div>
        </>
    )
}

export default ExpenseDate;