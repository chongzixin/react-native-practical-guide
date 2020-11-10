import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');

    // find the correct object from the redux store
    const allProducts = useSelector(state => state.shop.productsList);
    const chosenProduct = allProducts.find(product => product.id === productId);

    return (
        <ScrollView>
            <Image source={{uri:chosenProduct.image}} style={styles.image} />
            <View style={styles.container}>
                <Text>ID: {chosenProduct.id}</Text>
                <Text>Price: ${chosenProduct.price}</Text>
                <Text>{chosenProduct.description}</Text>
                <Button title="Add To Cart" />
            </View>
        </ScrollView>
    );
};

ProductDetailsScreen.navigationOptions = navigationData => {
    const productTitle = navigationData.navigation.getParam('productTitle');
    return {
        headerTitle: productTitle,
    };
}

const styles = StyleSheet.create({
    image: {
        height: 500,
        width: '100%',
    },
    container: {
        alignItems: "center",
    }
});

export default ProductDetailsScreen;