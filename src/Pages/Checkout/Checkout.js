import React from 'react'
import CheckoutList from './../../Components/CheckoutList/CheckoutList';
import { connect } from 'react-redux';
import { calculateTotal } from './../../utility/checkout';

const Checkout = ({total}) => {
    console.log(total)
    return (
        <div>
            <h1>Checkout page</h1>
            <CheckoutList/>
            <h3>Total Amount - {total}</h3>
            <button>PAY NOW {total}</button>
        </div>
    )
}

var mapState = (state) => ({
    total: calculateTotal(state.cart)
})

export default connect(mapState)(Checkout)
