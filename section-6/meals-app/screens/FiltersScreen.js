// filters like gluten free, vegan etc.

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText>{props.label}</DefaultText>
            <Switch 
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{true: Colors.primaryColor}}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    // function that gathers all the current filter settings so that it can be passed to the navigation option via useEffect
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
            lactoseFree: isLactoseFree,
        }

        console.log(appliedFilters);
    }, [isGlutenFree, isVegetarian, isVegetarian, isLactoseFree]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <DefaultText style={styles.title}>Available Filters / Restrictions</DefaultText>
            <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
            <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName='ios-save' onPress={navData.navigation.getParam('save')} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: "center",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 15
    }
});

export default FiltersScreen;