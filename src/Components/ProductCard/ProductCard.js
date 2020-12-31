import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart, deleteProuctFromCart } from './../../Redux/cart/cartActions';

const ProductCard = ({addProductToCart, removeProductFromCart, deleteProuctFromCart,...product}) => {
    var {title,cost} = product;
    return (
        <div>
            <h3>{title} - {`$${cost}`} - <button onClick={() => addProductToCart(product)} >Add to cart</button> <button onClick={() => removeProductFromCart(product.id)} >Remove from cart</button> <button onClick={() => deleteProuctFromCart(product.id)} >Delete from cart</button> </h3>
        </div>
    )
}

var actions = {
    addProductToCart,
    removeProductFromCart,
    deleteProuctFromCart
}

export default connect(null,actions)(ProductCard)
