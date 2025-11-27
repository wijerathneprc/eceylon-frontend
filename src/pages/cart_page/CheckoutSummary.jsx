


export function CheckoutSummary({cartList}){

    const total = cartList.reduce((tot, item) => tot+(item.product_config_id.price*item.quantity),0)
    return(<>
    <div>
        {
            cartList.map((item) => (
                <>
                <div> {item.product_config_id.product.name}</div>
                <div> quantity:{item.quantity}</div>
                <div> price: {item.product_config_id.price*item.quantity}</div>
                </>
            ))
        }
        <div>subtotal:{total}</div>

    </div>
    
    </>)
}