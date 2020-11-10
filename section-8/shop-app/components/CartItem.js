import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
    const quantity = props.quantity;
    const item = props.item;
    const subtotal = (quantity*item.price).toFixed(2);

    return (
        <View style={styles.lineItem}>
            <Text>{quantity}</Text>
            <Text>{item.title}</Text>
            <Text>${subtotal}</Text>
            <TouchableOpacity onPress={() => { console.log("trashed!"); }}>
                <Ionicons name="md-trash" size={26} color="red" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    lineItem: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 5,
    },
});

export default CartItem;