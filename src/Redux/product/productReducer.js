import { CLEAR_PRODUCTS, SET_PRODUCTS } from './productContstants';

var initialState = [];
var productReducer = (state = initialState, action) => {
    var {type,payload} = action;
    switch (type) {
        case SET_PRODUCTS: 
           return [...payload.products]
        case CLEAR_PRODUCTS:
            return []
        default:
            return state;
    }
}

export default productReducer;