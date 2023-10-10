import React, { useEffect, useState } from "react";
import './shop.css'
import Product from "../Product/product";
import Cart from "../Cart/cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () =>{

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () =>{
        const storedCart =  getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct)
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    // const handelAddToCart = (product) =>{
    //     const newCart = [...cart, product]
    //     setCart(newCart);
    //     addToDb(product.id)
    // }

    const handelAddToCart = (product) =>{
        // it is another way to handel product quantity.when user not select product quantity .quantity value is 0. That's why update quantity
        let newCart = []
        const exists = cart.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    )
}

export default Shop