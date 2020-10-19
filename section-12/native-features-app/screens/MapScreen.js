import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Colors from '../constants/Colors';

const MapScreen = props => {
    const [selectedLocation, setSelectedLocation] = useState();

    const mapRegion = {
        latitude: 1.35125,
        longitude: 103.8198,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
    };

    const selectLocationHandler = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        });
    };

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation)
            return;

        // navigate back to the previous page. we use navigate here instead of goBack because the former allows us to set params
        props.navigation.navigate('NewPlace', {pickedLocation: selectedLocation});
    }, [selectedLocation]);

    useEffect(() => {
        props.navigation.setParams({saveLocation: savePickedLocationHandler})
    }, [savePickedLocationHandler]);

    let markerCoordinates;
    if(selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
        }
    }

    return (
        <MapView 
            style={styles.map}
            region={mapRegion}
            onPress={selectLocationHandler}
        >
            {/* the below line outputs a Marker if markerCoordinates exists */}
            {markerCoordinates &&  <Marker title='Picked Location' coordinate={markerCoordinates}></Marker>}
        </MapView>
    )
};

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('saveLocation');
    return {
        headerRight: (
            <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
                <Text style={styles.headerButtonText}>Save</Text>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    headerButton: {
        marginHorizontal: 20,
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS === 'android' ? 'white' : Colors.primary
    },
});

export default MapScreen;