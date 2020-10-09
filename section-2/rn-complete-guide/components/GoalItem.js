import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goal_item}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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

