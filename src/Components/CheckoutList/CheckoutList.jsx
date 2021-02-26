import React from 'react'
import { connect } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph';
import CheckoutListItem from './../CheckoutListItem/CheckoutListItem';
import "./CheckoutList.css"

const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className="checkout-list">
            <div className="checkout-list-item checkout-list-item-extend" style={{}}>
                <Paragraph fontSize={20} fontWeight="semi-bold">Product</Paragraph>
                <Paragraph fontSize={20} fontWeight="semi-bold">Quantity</Paragraph>
                <Paragraph fontSize={20} fontWeight="semi-bold">Price</Paragraph>
            </div>
            {cartItems.map((item) => <CheckoutListItem key={item.id} {...item} />)}
        </div>
    )
}

var mapState = (state) => ({
    cartItems: state.cart
})

export default connect(mapState)(CheckoutList)
