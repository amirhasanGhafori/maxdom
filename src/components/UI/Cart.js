function Cart(props){
    return(
        <>
        <div className={props.className}>
            {props.children}
        </div>
        </>
    )
}

export default Cart;