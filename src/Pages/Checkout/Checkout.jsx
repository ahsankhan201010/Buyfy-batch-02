import React, { useState } from "react";
import CheckoutList from "./../../Components/CheckoutList/CheckoutList";
import { connect } from "react-redux";
import { calculateTotal } from "./../../utility/checkout";
import OrderForm from "./../../Components/OrderForm/OrderForm";
import "./Checkout.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { openModal } from "./../../Redux/modal/modalActions";

const Checkout = ({ total, openModal, match: {params: {orderId}} }) => {
  return (
    <div className="checkout-page-container">
      <div className="checkout">
        <Header fontSize={40} fontWeight="bold">
          Shopping Cart
        </Header>
        <CheckoutList />
        <div className="checkout-bottom-content">
          <Header fontSize={40} fontWeight="bold">
            Total: $ {total}
          </Header>
          <Button
            onClick={() =>
              openModal({
                modalType: "addressFormModal",
                modalProps: {orderId}
              })
            }
            style={{ justifySelf: "end", borderRadius: "30px" }}
            fontSize={30}
            fontWeight="semi-bold"
            background="white"
            color="black"
          >
            Proceed & Pay
          </Button>
        </div>
        {/* { shipFormShown && <OrderForm/>}
            <button onClick={() => setShipFormShown(!shipFormShown)} >PROCEED & PAY!</button> */}
      </div>
    </div>
  );
};

var actions = {
  openModal,
};

var mapState = (state) => ({
  total: calculateTotal(state.cart),
});

export default connect(mapState, actions)(Checkout);
