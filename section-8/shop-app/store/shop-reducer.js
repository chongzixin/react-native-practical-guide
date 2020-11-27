import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import { ADD_TO_CART, REMOVE_FROM_CART } from './shop-action';
import Cart from '../models/cart';

import PRODUCTS from '../data/dummy-data';

const initialState = {
    productsList: PRODUCTS,
    cart: [],
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {...state, cart: Cart.addToCart(state.cart, action.productId)};
        case REMOVE_FROM_CART:
            return {...state, cart: Cart.removeFromCart(state.cart, action.productId)}
        default:
            return state;
    }
};

export default shopReducer;