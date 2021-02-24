import React, { useState } from "react";
import { connect } from 'react-redux';
import { uploadProduct } from './../../Redux/product/productActions';
import Cart from './../../Components/Cart/Cart';
import Header from "../../Components/Header/Header";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Button from "../../Components/Button/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Test = ({uploadProduct}) => {
  var [category, setCategory] = useState("");
  var [title, setTitle] = useState("");
  var [cost, setCost] = useState("");
  var [description, setDescription] = useState("");
  var [quantity, setQuantity] = useState("");
  var [coverPhoto, setCoverPhoto] = useState(null);

  var handleSubmit = (e) => {
    e.preventDefault();
    var productObj = {
      category,
      title,
      cost,
      description,
      quantity,
      coverPhoto,
    };
    uploadProduct(productObj);
  };
  return (
    <div style={{fontSize: "62.5%"}}> //1em = 10px
      <h1>Test</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="category"
          value={category}
        />
        <br />
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          value={title}
        />
        <br />
        <input
          onChange={(e) => setCost(e.target.value)}
          type="text"
          placeholder="cost"
          value={cost}
        />
        <br />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          cols="30"
          rows="10"
          value={description}
        ></textarea>
        <br />
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="text"
          placeholder="quantity"
          value={quantity}
        />
        <br />
        <input onChange={(e) => setCoverPhoto(e.target.files[0])} type="file" placeholder="cover photo" />
        <button type="submit">submit</button>
      </form> */}
      <Cart/>
      {/* <Header fontSize={32}  fontWeight="bold">This is my header</Header>
      <Header fontSize={16}  fontWeight="light">This is my header number 2</Header>
      <Header fontSize={42} color="purple"  fontWeight="semi-bold">This is my header number 3</Header>
      <Paragraph fontSize={32}  fontWeight="bold">This is my Paragraph</Paragraph>
      <Paragraph fontSize={16}  fontWeight="light">This is my Paragraph number 2</Paragraph>
      <Paragraph fontSize={42} color="purple"  fontWeight="semi-bold">This is my Paragraph number 3</Paragraph>
      <Button fontSize={45} fontWeight="bold" background="orange">Click Me and click me again!</Button> */}
      {/* <ProductCard/> */}
    </div>
  );
};

var actions = {
    uploadProduct
}

export default connect(null,actions)(Test);
