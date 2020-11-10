import PRODUCTS from '../data/dummy-data';

class Cart {
    static addToCart(currentCart, itemId) {
        const lineItem = currentCart.find(cartItem => cartItem.id === itemId);
        if(lineItem) {
            lineItem.quantity += 1;
        } else {
            currentCart.push({"id": itemId, "quantity": 1});
        }

        return currentCart;
    }

    static calculateTotal(currentCart) {
        return currentCart.reduce((total, cartItem) => {
            const currentItem = PRODUCTS.find(product => product.id === cartItem.id);
            return total += (currentItem.price * cartItem.quantity); 
        }, 0);
    }
};

export default Cart;