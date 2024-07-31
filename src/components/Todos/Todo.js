function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <span>{new Date().toLocaleString()}</span>
    </>
  );
}

export default Todo;
