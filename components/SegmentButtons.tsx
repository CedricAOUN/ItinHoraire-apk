import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Animated, ScrollView, RefreshControl} from 'react-native';
import {List, SegmentedButtons} from 'react-native-paper';
import {useContext, useEffect} from "react";
import {transportList} from "../services/schedule-service";
import {TransportList} from "./TransportList";
import Value = Animated.Value;
import {parseStringDate} from "../utils/timeUtils";
import {LocationContext} from "context/LocationContext";

const SegmentButtons = () => {
    const [value, setValue] = React.useState('');
    const [isRefreshing, setIsRefreshing] = React.useState(false);
    const [data, setData] = React.useState([]);
    const {location} = useContext(LocationContext);

    useEffect( () => {
        fetchData();
    }, [value]);

    async function onRefresh() {
        await fetchData();
    }

    async function fetchData() {
        if(location) {
            let response = await transportList(location.coords.latitude, location.coords.longitude);
            setData(response)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                style={{marginHorizontal: 20}}
                buttons={[
                    {
                        value: 'bus',
                        label: 'Bus',
                        icon: 'bus'
                    },
                    {
                        value: 'rer',
                        label: `Train`,
                        icon: 'train'
                    },
                ]}
            />
            <SafeAreaView style={styles.listContainer}><ScrollView
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}><TransportList
                typeValue={value} data={data}></TransportList></ScrollView></SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: 20,
    },
    listContainer: {
        marginTop: 10,
    }
});

export default SegmentButtons;