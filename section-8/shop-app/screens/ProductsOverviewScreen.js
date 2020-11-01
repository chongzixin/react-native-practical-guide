import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../components/Product';
import HeaderButton from '../components/HeaderButton';

import Product from '../models/product';

const TEST_DATA = [
    new Product(1, "Item 1", 10, "someurl"),
    new Product(2, "Item 2", 20, "someurl"),
    new Product(3, "Item 3", 30, "someurl"),
    new Product(4, "Item 4", 40, "someurl"),
    new Product(5, "Item 5", 50, "someurl"),
]

const ProductsOverviewScreen = props => {
    const renderItem = item => {
        console.log(item);
        return (
            <ProductItem price={item.item.price}/>
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                data={TEST_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

ProductsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Shop',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-cart' onPress={() => {
                    navData.navigation.navigate('Cart');
                }} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default ProductsOverviewScreen;