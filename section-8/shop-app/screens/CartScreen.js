import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Cart from '../models/cart';

import CartItem from '../components/CartItem';

const CartScreen = props => {
    const cartItems = useSelector(state => state.shop.cart);
    const [totalPrice, setTotalPrice] = useState(Cart.calculateTotal(cartItems));

    useEffect(() => {
        setTotalPrice(Cart.calculateTotal(cartItems));
    }, [cartItems, totalPrice]);

    const productsList = useSelector(state => state.shop.productsList);

    const renderItem = itemData => {
        const item = productsList.find(product => product.id === itemData.item.id);
        return <CartItem quantity={itemData.item.quantity} item={item} />
    }

    return (
        <View style={styles.screen}>
            <Text>Total is ${totalPrice}</Text>
            <Button title='Confirm Order' />
            <View style={styles.lineItemContainer}>
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    lineItemContainer: {
        width: "90%",
        height: "50%",
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: "center",
    }
});

export default CartScreen;