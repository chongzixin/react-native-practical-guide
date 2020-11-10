import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/shop-action';

import ProductItem from '../components/ProductItem';

const ProductList = props => {
    const dispatch = useDispatch();

    const addToCartHandler = id => {
        dispatch(addToCart(id));
    };
    
    const navigateToDetailsHandler = id => {
        props.navigation.navigate({
            routeName: 'ProductDetails',
            params: {
                productId: id,
            },
        })
    }

    const renderItem = itemData => (
        <ProductItem
            image={itemData.item.image}
            price={itemData.item.price}
            addToCart={addToCartHandler.bind(this, itemData.item.id)}
            goToDetails={navigateToDetailsHandler.bind(this, itemData.item.id)}
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