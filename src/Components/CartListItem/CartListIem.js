import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart
} from "./../../Redux/cart/cartActions";

const CartListIem = ({
  removeProductFromCart,
  addProductToCart,
  deleteProuctFromCart,
  ...product
}) => {
  var { title, cost, quantity, id } = product;
  return (
    <div>
      <h1>
        {title} - {cost} - <button onClick={() => deleteProuctFromCart(id)}>X</button>
      </h1>
      <h3>
        <button onClick={() => addProductToCart(product)}>+</button> {quantity}{" "}
        <button onClick={() => removeProductFromCart(id)}>-</button>
      </h3>
    </div>
  );
};

var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart
};

export default connect(null, actions)(CartListIem);
