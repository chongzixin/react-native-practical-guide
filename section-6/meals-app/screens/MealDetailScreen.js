// screen that shows details of selected meal like ingredients and recipe

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailScreen;