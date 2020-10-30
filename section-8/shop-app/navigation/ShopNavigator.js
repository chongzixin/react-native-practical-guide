import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CartScreen from '../screens/CartScreen';
import EditProductScreen from '../screens/EditProductScreen';
import ManageProductsScreen from '../screens/ManageProductsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ShopNavigator = createStackNavigator({
    ProductOverview: ProductsOverviewScreen,
    Cart: CartScreen,
    ProductDetails: ProductDetailsScreen,
});

const OrderNavigator = createStackNavigator({
    Orders: OrdersScreen,
});

const ProductNavigator = createStackNavigator({
    ManageProducts: ManageProductsScreen,
    EditProduct: EditProductScreen,
});

const MainNavigator = createDrawerNavigator({
    Shop: ShopNavigator,
    Orders: OrderNavigator,
    Products: {
        screen: ProductNavigator, navigationOptions: {
            drawerLabel: 'Manage Products'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.primaryColor,
    }
});

export default createAppContainer(MainNavigator);