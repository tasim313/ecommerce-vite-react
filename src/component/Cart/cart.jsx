import React from "react";
import './cart.css'

const Cart = ({cart}) =>{
    // const {cart} = props
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // it is one way to handel product quantity. when user not select product quantity .quantity value is 0. That's why update quantity
        // product.quantity = product.quantity || 1;
        total = total + (product.price * product.quantity)
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }

    const tax = total*7/100;

    const grandTotal = total + totalShipping + tax;

    return(
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    )
}


export default Cart;