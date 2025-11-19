import { Quantity } from "../quantity/Quantity";

import './CartItem.css';

export function CartItem() {


    return (
        <>
            <div className="cart-item-container">
                <img src="./images/apple/ipad/ipad-11-1.png" alt="Product 1" />
                <div className='product-info'>
                    <h3>Ipad 11</h3>
                    <p>$19.99</p>
                    <Quantity />
                </div>
            </div>
        </>
    )
}