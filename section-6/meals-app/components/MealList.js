import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props => {
    // useSelector can only be used in root level of component function. so cant put it below.
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = itemData => {
        const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavourite,
                        },
                    })
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList 
                data={props.listData}
                renderItem={renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
});

export default MealList;