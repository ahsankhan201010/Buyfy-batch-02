import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const OrderForm = ({ user }) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [phone, setPhone] = useState("");
  var [address, setAddress] = useState("");
  useEffect(() => {
    //CDM
    var { fullName, email, phone, address } = user;
    setFullName(fullName ? fullName : "");
    setEmail(email ? email : "");
    setPhone(phone ? phone : "");
    setAddress(address ? address : "");
  }, []);

  var handleSubmit = (e) => {
    e.preventDefault();
    var shippingInfo = {
      fullName,
      email,
      phone,
      address,
    };
    console.log(shippingInfo);
  };
  return (
    <div>
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Receiver's Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver's Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver's Complete Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">PAY</button>
      </form>
    </div>
  );
};

var mapState = (state) => ({
  user: state.auth,
});

export default connect(mapState)(OrderForm);
