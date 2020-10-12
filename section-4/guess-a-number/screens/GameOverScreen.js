import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    // source={require('../assets/success.png')}
                    source={{uri:'https://pbs.twimg.com/profile_images/839137625/DON_T_MESS_WITH_THE_PIG.01a.gif'}}
                    resizeMode='cover'
                    fadeDuration={1000}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.</BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        borderRadius: 200,
        borderColor: "black",
        width: 300,
        height: 300,
        borderWidth: 3,
        overflow: "hidden",
        marginVertical: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    },
    highlight: {
        color:Colors.primary,
        fontFamily: 'open-sans-bold',
        marginHorizontal: 30,
    }
});

export default GameOverScreen;