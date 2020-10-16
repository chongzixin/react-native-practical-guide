// screen that shows all the Favourites

import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.noFav}>
            <DefaultText>No favourite meals found. Start adding some!</DefaultText>
        </View>
    } else {
        return <MealList listData={favMeals} navigation={props.navigation} />
    }
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

const styles = StyleSheet.create({
    noFav: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default FavouritesScreen;