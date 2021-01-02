import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart} from './../../Redux/cart/cartActions';

const ProductCard = ({addProductToCart, removeProductFromCart, deleteProuctFromCart,...product}) => {
    var {title,cost} = product;
    return (
        <div>
            <h3>{title} - {`$${cost}`} - <button onClick={() => addProductToCart(product)} >Add to cart</button> </h3>
        </div>
    )
}

var actions = {
    addProductToCart,
}

export default connect(null,actions)(ProductCard)
