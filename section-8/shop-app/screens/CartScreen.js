import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Cart from '../models/cart';

const CartScreen = props => {
    const cartItems = useSelector(state => state.shop.cart);
    const totalPrice = Cart.calculateTotal(cartItems);

    return (
    <View style={styles.screen}><Text>Total is ${totalPrice}</Text></View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CartScreen;