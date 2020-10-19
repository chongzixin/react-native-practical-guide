import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

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

const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
});

export default MapScreen;