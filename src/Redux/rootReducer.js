import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
import modalReducer from "./modal/modalReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage
// import sessionStorage from "redux-persist/lib/storage/session" //sessionStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default persistReducer(persistConfig,rootReducer);
