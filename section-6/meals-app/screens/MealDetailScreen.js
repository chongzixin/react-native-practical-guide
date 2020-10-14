// screen that shows details of selected meal like ingredients and recipe

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Text>The Meal Details Screen!</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const headerRightButton = () => {
        return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favourite' iconName='ios-star' onPress={() => {
                    console.log('clicked favourite!');
                }}/>
            </HeaderButtons>
        );
    };

    return {
        headerTitle: selectedMeal.title,
        headerRight: (headerRightButton)
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailScreen;