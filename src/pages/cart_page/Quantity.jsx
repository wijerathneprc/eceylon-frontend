
import './Quantity.css';

export function Quantity({quantity,handleQuantityDownBtn, handleQuantityUpBtn}) {

    return (
        <div className='quantity-btn-container'> 
            <button className='quantity-down-btn' onClick={handleQuantityDownBtn}>-</button>
            <div className='quantity-display'> {quantity}</div>
            <button className='quantity-up-btn'  onClick={handleQuantityUpBtn}>+</button>
        </div>
    )
}