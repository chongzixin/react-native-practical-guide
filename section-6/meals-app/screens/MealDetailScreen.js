// screen that shows details of selected meal like ingredients and recipe

import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavourite } from '../store/actions/meals';
import Colors from '../constants/Colors';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavourite = useSelector(state => (
        // check whether this mealId is inside list of favourites.
        state.meals.favouriteMeals.some(meal => meal.id === mealId)
    ));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    
    // this is used to execute an action to redux store
    const dispatch = useDispatch();
    // we useCallback and useEffect here so that setParams below does not result in an infinite loop
    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavouriteHandler});
    }, [toggleFavouriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentMealIsFavourite});
    }, [currentMealIsFavourite]);

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <DefaultText style={styles.title}>Ingredients</DefaultText>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}

            <DefaultText style={styles.title}>Steps</DefaultText>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavourite = navigationData.navigation.getParam('toggleFav');
    const isFavourite = navigationData.navigation.getParam('isFav');

    const headerRightButton = () => {
        return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Favourite' 
                    iconName={isFavourite ? 'ios-star' : 'ios-star-outline'} 
                    onPress={toggleFavourite}
                />
            </HeaderButtons>
        );
    };

    return {
        headerTitle: mealTitle,
        headerRight: (headerRightButton)
    };
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: "center",
        color: Colors.accentColor,
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }
});

export default MealDetailScreen;