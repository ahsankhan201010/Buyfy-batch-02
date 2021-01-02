import React, { useState } from "react";
import { connect } from 'react-redux';
import { uploadProduct } from './../../Redux/product/productActions';
import Cart from './../../Components/Cart/Cart';

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
    <div>
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
    </div>
  );
};

var actions = {
    uploadProduct
}

export default connect(null,actions)(Test);
