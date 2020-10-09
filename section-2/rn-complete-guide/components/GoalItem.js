import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.goal_item}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    goal_item: {
        borderColor: "black",
        backgroundColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
    },
});

export default GoalItem;

