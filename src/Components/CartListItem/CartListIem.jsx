import React from "react";
import { connect } from "react-redux";
import Paragraph from "../Paragraph/Paragraph";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart,
} from "./../../Redux/cart/cartActions";
import "./CartListItem.css";

const CartListIem = ({
  removeProductFromCart,
  addProductToCart,
  deleteProuctFromCart,
  ...product
}) => {
  var { title, cost, quantity, id, coverPhoto } = product;
  return (
    <div className="cart-list-item">
      <div
        style={{
          background: `url(${coverPhoto})`,
          backgroundSize: "100% 100%, cover",
        }}
        className="cart-item-img"
      ></div>
      <div className="cart-item-desc">
        <Paragraph fontSize={17} fontWeight="semi-bold">
          {title}
        </Paragraph>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Paragraph
            fontSize={18}
            fontWeight="regular"
            style={{ marginRight: "5px" }}
          >
            ${cost} X {quantity} ={" "}
          </Paragraph>{" "}
          <Paragraph fontSize={20} fontWeight="semi-bold">
            ${cost * quantity}
          </Paragraph>
        </div>
      </div>
      {/* <h1>
        {title} - {cost} - <button onClick={() => deleteProuctFromCart(id)}>X</button>
      </h1>
      <h3>
        <button onClick={() => addProductToCart(product)}>+</button> {quantity}{" "}
        <button onClick={() => removeProductFromCart(id)}>-</button>
      </h3> */}
    </div>
  );
};

var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart,
};

export default connect(null, actions)(CartListIem);
