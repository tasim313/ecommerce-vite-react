import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

import './Product.css'

const Product = (props) =>{

    const {img, name, seller, quantity, price, ratings} = props.product;

    const handelAddToCart = props.handelAddToCart;

    return(
        <div className="product">
          <img src={img} alt="" />
          <div className="product-info">
              <h6 className="product-name">{name}</h6>
              <p>Price:${price}</p>
              <p>Manufacturer:{seller}</p>
              <p>Rating:{ratings}</p>
          </div>
          <Button variant="primary" onClick={() => handelAddToCart(props.product)} className="btn-cart">
            Add To Cart <FontAwesomeIcon icon={faCartShopping} />
            </Button>
        </div>
    )
}

export default Product