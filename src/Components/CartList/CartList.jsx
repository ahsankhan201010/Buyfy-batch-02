import React from "react";
import CartListIem from "./../CartListItem/CartListIem";
import { connect } from "react-redux";
import "./CartList.css";

const CartList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-list">
      {cartItems.map((item) => <CartListIem key={item.id} {...item} />)}
    </div>
  );
};

var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CartList);
