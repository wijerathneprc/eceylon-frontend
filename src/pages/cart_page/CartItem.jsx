

import { Quantity } from './Quantity'
import './CartItem.css'
// import { useState } from 'react'



export function CartItem({ citem, cartList, setCartList }) {
    const handleCartSelect = () => { }

    const handleCartItemDelete = () => { }

    const handleQuantityUpBtn = () => {
        setCartList(cartList.map((item) => (item.id==citem.id? { ...item, quantity: item.quantity +1 }:item)))
    }

    const handleQuantityDownBtn = () => {
        setCartList(cartList.map((item) => (item.id==citem.id?  { ...item, quantity: item.quantity>1?(item.quantity - 1):1 }:item) ))
    }

    return (<>
        <div className='cart-item'>
            <div className='cart-item-img-container'>
                <img src={citem.product_config_id.image.image} alt="" />
            </div>
            <div className='cart-item-info-container'>
                <h3 className='cart-item-prod-name'> {citem.product_config_id.product.name}</h3>
                <div className='cart-item-prod-tri-info'>
                    <div>{citem.product_config_id.product.brand}</div>
                    <div> | </div>
                    <div>{citem.product_config_id.product.category}</div>
                    <div> | </div>
                    <div>{citem.product_config_id.model_name}</div>
                </div>
                <div>  {citem.product_config_id.product.description}</div>
                <div className='cart-item-prod-price'> {citem.product_config_id.price}</div>
                <div className='cart-item-btn-container'>
                    <Quantity quantity={citem.quantity} handleQuantityDownBtn={handleQuantityDownBtn} handleQuantityUpBtn={handleQuantityUpBtn} />

                    <div>
                        <button className='cart-item-delete-btn' onClick={handleCartItemDelete}> delete </button>
                    </div>
                </div>
            </div>
            <input className='select-cart-item' type="checkbox" name="" id={'cart.id'} onChange={handleCartSelect} />
        </div>


    </>)
}