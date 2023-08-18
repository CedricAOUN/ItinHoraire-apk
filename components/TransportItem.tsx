import React from 'react';
import {Text, StyleSheet, SafeAreaView} from "react-native";
import {Divider, List} from 'react-native-paper';
import {minutesLeft, parseStringDate} from "../utils/timeUtils";


interface Props {
    transpObj: any;
}

export const TransportItem = (props: Props) => {
    const obj = props.transpObj;

    return (
        <SafeAreaView>
            <SafeAreaView style={[styles.container, {backgroundColor: `#${obj.color || '#000'}`}]}>
                <Text style={[styles.title, {color: `#${obj.text_color}` || '#FFF'}]}>{obj.code} -
                    Direction: {obj.direction}</Text>
            </SafeAreaView>
            <List.Accordion title="View">
                <SafeAreaView style={styles.dateContainer}>
                    <Text style={styles.dateTitle}>Incoming Stop: </Text>
                    <Divider></Divider>
                    <Text style={styles.dateTime}>{parseStringDate(obj.next)}</Text>
                    <Text style={styles.dateTitle}>Second Stop: </Text>
                    <Text style={styles.dateTime}>{parseStringDate(obj.after)}</Text>
                </SafeAreaView>
            </List.Accordion>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    title: {
        textAlign: 'center',
    },
    dateTitle: {

    },
    dateContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 30,
    },
    dateTime: {
        padding: 12,
        backgroundColor: '#000',
        color: 'limegreen',
        borderRadius: 10,
    }
});