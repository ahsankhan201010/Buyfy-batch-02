import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, DELETE_PRODUCT_FROM_CART } from './cartConstants';

export var addProductToCart = (product) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: {
                product
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export var removeProductFromCart = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: {
                productId
            }
        })
    } catch (error) {
        console.log(error)
        
    }
}

export var deleteProuctFromCart = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_FROM_CART,
            payload: {
                productId
            }
        })
    } catch (error) {
        console.log(error)
    }
}