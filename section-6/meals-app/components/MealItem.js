import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealHeader, ...styles.mealRow}}>
                        <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealDetail, ...styles.mealRow}}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity}</DefaultText>
                        <DefaultText>{props.affordability}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        paddingVertical: 5,
        textAlign: 'center',
    }
});

export default MealItem;