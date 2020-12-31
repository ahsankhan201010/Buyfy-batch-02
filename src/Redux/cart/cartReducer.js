import {
  productAdditionInCart,
  productRemovalFromCart,
} from "../../utility/products";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
} from "./cartConstants";
var initialState = [];

var cartReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return productAdditionInCart(state, payload.product);
    case REMOVE_PRODUCT_FROM_CART:
      return productRemovalFromCart(state, payload.productId);
    case DELETE_PRODUCT_FROM_CART:
      return state.filter((product) => product.id !== payload.productId);
    default:
      return state;
  }
};

export default cartReducer;
