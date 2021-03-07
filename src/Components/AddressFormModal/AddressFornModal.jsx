import React, { useState } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./AddressFormModal.css";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";

const AddressFornModal = () => {
  var [address, setAddress] = useState("");
  var [name, setName] = useState("");
  var [contact, setContact] = useState("");
  var [email, setEmail] = useState("");
  return (
    <ModalContainer>
      <form className="address-form-modal center">
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

export default AddressFornModal;
