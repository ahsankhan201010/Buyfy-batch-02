import React from "react";
import CartList from "./../CartList/CartList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { generateOrder } from "./../../Redux/order/orderActions";
import "./Cart.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

const Cart = ({ generateOrder, cart }) => {
  return (
    <div className="cart">
      <Header fontSize={24} style={{letterSpacing: "5px"}} >CART</Header>
      <CartList />
      {/* <button onClick={generateOrder}>CHECKOUT</button> */}
      <Button disabled={cart.length > 0 ? false : true} onClick={generateOrder} fontSize={24} background="rgba(0,0,0,0.6)" style={{letterSpacing: "5px", width: "100%"}}>CHECKOUT</Button>
    </div>
  );
};

var actions = {
  generateOrder,
};

var mapState = (state) => ({
  cart: state.cart
})

export default connect(mapState, actions)(Cart);
