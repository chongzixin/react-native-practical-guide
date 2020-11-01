import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const Product = props => {
    // TODO: go to details page
    // TODO: add to cart
    return (
        <View style={styles.productLineItem}>
            <View>
                <TouchableOpacity onPress={props.goToDetails}>
                    <View style={{...styles.productRow, ...styles.productHeader}}>
                        <Image source={{uri:props.image}} style={styles.bgImage} />
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
        height: 200,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        overflow: "hidden",
    },
    productRow: {
        flexDirection: "row",
    },
    productHeader: {
        width: '100%',
        height: '80%',
    },
    productDetail: {
        width: '100%',
        height: '20%',
        justifyContent: "space-between"
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    priceText: {
        paddingVertical: 10,
    }
});

export default Product;