// screen that shows details of selected meal like ingredients and recipe

import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
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
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
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