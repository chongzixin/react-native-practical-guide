import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const price = props.navigation.getParam('price');
    const description = props.navigation.getParam('description');

    return (
        <ScrollView>
            <Image style={styles.image} />
            <View style={styles.container}>
                <Text>ID: {productId}</Text>
                <Text>Price: ${price}</Text>
                <Text>{description}</Text>
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
        height: 200,
        width: '100%',
    },
    container: {
        alignItems: "center",
    }
});

export default ProductDetailsScreen;