// import styles from './Button.module.css';
// const Button = styled.button`
//     background-color: #4CAF50;
// `;


const Button = (props)=>{
    return(
        <>
        <button type={props.type} disabled={!props.validForm} className={`rounded-lg  p-3 text-white  ${ props.validForm ? 'bg-green-500'  :'bg-red-500 '}`} onClick={props.onClick}>{props.children}</button>
        </>
    );
}

export default Button;
