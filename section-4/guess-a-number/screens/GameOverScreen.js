import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

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
            <BodyText>Your phone needed {props.rounds} rounds to guess the number {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
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
    }
});

export default GameOverScreen;