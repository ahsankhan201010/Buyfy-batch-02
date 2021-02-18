import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "./../../Redux/cart/cartActions";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

const ProductCard = ({
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart,
  ...product
}) => {
  var { title, cost, id, coverPhoto } = product;
  return (
    <div className="product_card center">
      {/* <h3> <Link to={`/product/${id}`}>{title}</Link> - {`$${cost}`} - <button onClick={() => addProductToCart(product)} >Add to cart</button> </h3> */}
      <div className="product_card_hover center">
        <Button
          onClick={() => addProductToCart(product)}
          fontSize={12}
          background="rgba(0,0,0,0.8)"
          fontWeight="regular"
        >
          ADD TO CART
        </Button>
      </div>
      <div
        style={{ background: `url(${coverPhoto})`, backgroundSize: "100% 100%, cover" }}
        className="product_card_image"
      ></div>
      <Header
        style={{ alignSelf: "flex-start", marginTop: "0.5em" }}
        fontSize={18}
        fontWeight="bold"
      >
        {title}
      </Header>
      <Header
        style={{ alignSelf: "flex-start" }}
        fontSize={20}
        fontWeight="regular"
      >
        ${cost}
      </Header>
    </div>
  );
};

var actions = {
  addProductToCart,
};

export default connect(null, actions)(ProductCard);
