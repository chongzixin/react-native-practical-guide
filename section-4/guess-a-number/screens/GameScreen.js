import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const renderListItem = (value, numOfRound) => (
    <View style={styles.listItem}>
        <BodyText>#{numOfRound}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
);

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1,100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // useEffect takes a function that is run after every render cycle
    // the second parameter takes an array of items that we want to watch for changes. so if it doesn't change then the effect wont run.
    // in this case our dependencies are currentGuess, userChoice and onGameOver, so we use object destructuring
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(prevGuesses => [nextNumber, ...prevGuesses]);
    }

    return (
        <View style={styles.screen}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name='md-remove' size={24} color="white"/></MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={24} color="white"/></MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* ScrollView has very different styling rules than FlatList. */}
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map( (guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList contentContainerStyle={styles.list}
                    data={pastGuesses}
                    renderItem={itemData => renderListItem(itemData.item, pastGuesses.length - itemData.index)}
                    keyExtractor={item => item.item}
                />
            </View>
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
    },
    listContainer: {
        width: "60%",
        flex: 1,
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
    }
});

export default GameScreen;