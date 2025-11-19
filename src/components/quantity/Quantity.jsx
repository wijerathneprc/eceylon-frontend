import './Quantity.css';
export function Quantity() {
    return (
        <div className='quantity-container'>
            {/* <label className='quantity-label'>Quantity </label> */}
            <button className='quantity-down-btn'>-</button>
            <input className='quantity-input' type="text" placeholder='1' />
            <button className='quantity-up-btn'>+</button>

        </div>
    )
}