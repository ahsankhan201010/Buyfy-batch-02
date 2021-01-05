import React, {useState} from 'react'
import CheckoutList from './../../Components/CheckoutList/CheckoutList';
import { connect } from 'react-redux';
import { calculateTotal } from './../../utility/checkout';
import OrderForm from './../../Components/OrderForm/OrderForm';

const Checkout = ({total}) => {
    var [shipFormShown, setShipFormShown] = useState(false)
    return (
        <div>
            <h1>Checkout page</h1>
            <CheckoutList/>
            <h3>Total Amount - {total}</h3>
            { shipFormShown && <OrderForm/>}
            <button onClick={() => setShipFormShown(!shipFormShown)} >PROCEED & PAY!</button>
        </div>
    )
}

var mapState = (state) => ({
    total: calculateTotal(state.cart)
})

export default connect(mapState)(Checkout)
