import { useEffect, useState } from 'react';

import axios from 'axios';



import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

import { CartItem } from './CartItem'

import './CartPage.css';
import { CheckoutSummary } from './CheckoutSummary';

export function CartPage() {

    const [cartList, setCartList] = useState([])


    const getCartData = async ()=>{
        const response = await axios.get('http://127.0.0.1:8000/estore/cart/list')
        setCartList(response.data)

    }
    useEffect(()=>{
        getCartData()
    },[])
    console.log(cartList)

    return (<>
        <Navbar />
        <div className="cart-page">
            <h1 className='cart-page-heading'> Crat Page </h1>
            <div className="cart-main-container">
                {cartList.length?(cartList.map((citem) =><CartItem citem={citem} cartList={cartList} setCartList={setCartList}/>

                )):('')}

            </div>
            <div className='cart-sidebar'>
                <h2> Checkout Summary </h2>
                <CheckoutSummary cartList = {cartList} />
            </div>
        </div>
       
        <Footer />
    </>)
}