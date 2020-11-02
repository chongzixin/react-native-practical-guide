import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import { ADD_TO_CART } from './shop-action';

import PRODUCTS from '../data/dummy-data';

const initialState = {
    productsList: PRODUCTS,
    cart: [],
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            // add action.productId to the cart array
            // to decide if cart should have a different item
        default:
            return state;
    }
};

export default shopReducer;