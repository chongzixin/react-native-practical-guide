import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import { ADD_TO_CART } from './shop-action';

import PRODUCTS from '../data/dummy-data';

const initialState = {
    productsList: PRODUCTS,
    cart: [],
}

// helper function that increments quantity if an item has already been added to cart
const addToCart = (currentCart, itemId) => {
    const lineItem = currentCart.find(cartItem => cartItem.id === itemId);
    if(lineItem) {
        lineItem.quantity += 1;
    } else {
        currentCart.push({"id": itemId, "quantity": 1});
    }

    return currentCart;
};

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {...state, cart: addToCart(state.cart, action.productId)};
        default:
            return state;
    }
};

export default shopReducer;