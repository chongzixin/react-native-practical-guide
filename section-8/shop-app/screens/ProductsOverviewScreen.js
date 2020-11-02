import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductList from '../components/ProductList';
import HeaderButton from '../components/HeaderButton';

import Product from '../models/product';
import TEST_DATA from '../data/dummy-data';

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