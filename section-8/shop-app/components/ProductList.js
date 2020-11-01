import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ProductItem from '../components/ProductItem';

const ProductList = props => {
    const renderItem = itemData => (
        <ProductItem 
            price={itemData.item.price}
            addToCart={() => {
                console.log("added to cart");
            }}
            goToDetails={() => {
                props.navigation.navigate({
                    routeName: 'ProductDetails',
                    params: {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title,
                        description: itemData.item.description,
                        price: itemData.item.price,
                    },
                })
            }}
        />
    );

    return (
        <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
};

const styles = StyleSheet.create({

});

export default ProductList;