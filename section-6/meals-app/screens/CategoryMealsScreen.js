// page that shows meals for chosen category.

import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({ routeName:'MealDetail' });
            }}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;