import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

// screen that computer makes a guess, and user indicates if the guess is too high or too low.
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor((Math.random() * (max-min)) + min);
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // useEffect takes a function that is run after every render cycle
    // the second parameter takes an array of items that we want to watch for changes. so if it doesn't change then the effect wont run.
    // in this case our dependencies are currentGuess, userChoice and onGameOver, so we use object destructuring
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        // first check if the user gave the wrong hint
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
                Alert.alert("Don't lie!", "You know that this is wrong.", [{text: "Sorry!", style: 'cancel'}]);
                return;
        }

        // handle the hints and return another guess
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>LOWER</MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>GREATER</MainButton>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 400,
        maxWidth: "95%",
    }
});

export default GameScreen;