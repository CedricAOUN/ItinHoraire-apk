import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import {useContext, useEffect, useState} from "react";
import * as Location from 'expo-location';
import {LocationContext} from "context/LocationContext";

const LocationFAB = () => {
    const { location, setLocation } = useContext(LocationContext);
    const [pressed, setPressed] = useState<number>(0);


    useEffect(()=> {getLocation()}, [pressed] )


    async function getLocation() {
        const {status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('No Location permissions.');
            alert("This app relies on location data to work. Please enable location settings via your device's settings")
            return;
        } else {
            alert("Location updated!")
        }

        const locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);

    }


    useEffect(()=> {

    })

    return (
    <FAB
        style={styles.fab}
        icon="map-marker"
        onPress={() => setPressed(pressed+1)}
        color={'white'}
    />
)};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'green',
    },
})

export default LocationFAB;