import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setEnteredGoal("");
        props.onAddGoal(enteredGoal);
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.add_course_goals}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textinput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.button_container}>
                    <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onHideGoal} /></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    add_course_goals: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textinput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 10
    },

    button_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    },

    button: {
        width: "40%"
    }
});

export default GoalInput;