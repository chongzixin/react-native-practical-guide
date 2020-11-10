import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const Product = props => {
    return (
        <View style={styles.productLineItem}>
            <View>
                <TouchableOpacity onPress={props.goToDetails}>
                    <View style={{...styles.productRow, ...styles.productHeader}}>
                        <Image source={{uri:props.image}} style={styles.image} />
                    </View>
                </TouchableOpacity>
                <View style={{...styles.productRow, ...styles.productDetail}}>
                    <Button title="Details" onPress={props.goToDetails}/>
                    <Text style={styles.priceText}>Price: ${props.price}</Text>
                    <Button title="Cart" onPress={props.addToCart}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productLineItem: {
        width: '100%',
        height: 250,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
        overflow: "hidden",
    },
    productRow: {
        flexDirection: "row",
    },
    productHeader: {
        height: '80%',
    },
    productDetail: {
        height: '20%',
        justifyContent: "space-between",
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '130%', // a bit hackish, but fix next time.
    },
    priceText: {
        paddingVertical: 10,
    }
});

export default Product;