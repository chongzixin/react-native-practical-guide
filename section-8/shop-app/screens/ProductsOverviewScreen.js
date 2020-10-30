import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const ProductsOverviewScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>ProductsOverviewScreen</Text>
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
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ProductsOverviewScreen;