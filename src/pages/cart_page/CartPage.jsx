import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

import {CartItem} from '../../components/cart/CartItem'

import './CartPage.css';
import { Button } from '../../components/button/Button';

export function CartPage() {

    return (
        <>
         <Navbar />
        <div className="cart-page">
            <div className="main-container">
                <div className='checkout-samary'>
                    <h1> Checkout Summary </h1>
                    <Button name={'Checkout'} style={'primary-btn'} />
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div  className="sidebar">
                sidebar
            </div>    
        </div>
        <Footer/>

        </>
    )
}