import React, { useEffect, useState } from "react";
import './shop.css'
import Product from "../Product/product";

const Shop = () =>{

    const [products, setProducts] = useState([]);
    const [Cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handelAddToCart = (product) =>{
        const newCart = [...Cart, product]
        setCart(newCart);
    }


    return(
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handelAddToCart = {handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items:{Cart.length}</p>
            </div>

        </div>
    )
}

export default Shop