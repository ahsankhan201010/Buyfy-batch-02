import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart} from './../../Redux/cart/cartActions';
import { Link } from 'react-router-dom';

const ProductCard = ({addProductToCart, removeProductFromCart, deleteProuctFromCart,...product}) => {
    var {title,cost,id} = product;
    return (
        <div>
            <h3> <Link to={`/product/${id}`}>{title}</Link> - {`$${cost}`} - <button onClick={() => addProductToCart(product)} >Add to cart</button> </h3>
        </div>
    )
}

var actions = {
    addProductToCart,
}

export default connect(null,actions)(ProductCard)
