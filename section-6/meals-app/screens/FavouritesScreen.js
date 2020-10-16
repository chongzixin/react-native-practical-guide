// screen that shows all the Favourites

import React from 'react';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);
    
    return <MealList listData={favMeals} navigation={props.navigation} />
};

FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    };
};

export default FavouritesScreen;