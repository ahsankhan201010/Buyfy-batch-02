import React from 'react'
import CartListIem from './../CartListItem/CartListIem';
import { connect } from 'react-redux';

const CartList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div>
            {cartItems.map((item) => <CartListIem key={item.id} {...item} />)}
        </div>
    )
}

var mapState = (state) => ({
    cartItems: state.cart
})

export default connect(mapState)(CartList)
