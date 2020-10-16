// page that shows meals for chosen category.

import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);
    // filter all meals that have this category in their list
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
}

export default CategoryMealsScreen;