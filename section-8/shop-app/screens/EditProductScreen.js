import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const EditProductScreen = props => {
    return (
        <View style={styles.screen}><Text>EditProductScreen</Text></View>
    );
};

EditProductScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Edit Product',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Done" iconName='md-checkmark' onPress={() => {}} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default EditProductScreen;