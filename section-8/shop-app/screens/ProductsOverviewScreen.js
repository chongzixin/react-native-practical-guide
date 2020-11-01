import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductList from '../components/ProductList';
import HeaderButton from '../components/HeaderButton';

import Product from '../models/product';

const TEST_DATA = [
    new Product(1, "Item 1", 10, "someurl", "Description of Item 1"),
    new Product(2, "Item 2", 20, "someurl", "Description of Item 2"),
    new Product(3, "Item 3", 30, "someurl", "Description of Item 3"),
    new Product(4, "Item 4", 40, "someurl", "Description of Item 4"),
    new Product(5, "Item 5", 50, "someurl", "Description of Item 5"),
]

const ProductsOverviewScreen = props => {
    return (
        <View style={styles.screen}>
            <ProductList
                data={TEST_DATA}
                navigation={props.navigation}
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