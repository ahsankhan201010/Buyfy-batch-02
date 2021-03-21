import React, { useState } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./AddressFormModal.css";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { processOrder } from './../../Redux/order/orderActions';

const AddressFornModal = ({cart, processOrder, orderId}) => {

  var [address, setAddress] = useState("");
  var [name, setName] = useState("");
  var [contact, setContact] = useState("");
  var [email, setEmail] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault();
    var addressInfo = {
      address,
      name,
      contact,
      email

    }
    processOrder({cart, addressInfo, orderId})
  }
  return (
    <ModalContainer>
      <form onSubmit={handleSubmit} className="address-form-modal center">
        <div className="address-form-fields">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="name"
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="complete address"
          />
        </div>
        <div className="address-form-fields">
          <TextField
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="phone"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="email"
          />
        </div>
        <Button style={{ marginTop: "2em" }}>Proceed & Pay</Button>
      </form>
    </ModalContainer>
  );
};

var mapState = (state) => ({
  cart: state.cart
})

var actions = {
  processOrder
}

export default connect(mapState,actions)(AddressFornModal);
