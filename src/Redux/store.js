import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {persistStore} from "redux-persist"

var middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export const persistor = persistStore(store)

export default store;