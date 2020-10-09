import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.add_course_goals}>
            <TextInput
            placeholder="Course Goal"
            style={styles.textinput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    add_course_goals: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textinput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 10
    },
});

export default GoalInput;