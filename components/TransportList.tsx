import React from 'react';
import {useEffect, useState} from "react";
import {TransportItem} from "./TransportItem";
import {Animated, View, StyleSheet, StatusBar, Text} from "react-native";
import ScrollView = Animated.ScrollView;
import {ActivityIndicator} from "react-native-paper";
import { parseStringDate} from "../utils/timeUtils";


interface Props {
    data: any[];
    typeValue: string;
}

export const TransportList = (props: Props) => {
    const {data, typeValue} = props

    const [list, setList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect( ()=> {
        setList([])
        setIsLoading(true)
        if(data) generateList(typeValue, data)
    }, [typeValue, data])



    function generateList(type: string, data: any[]) {
        const newList: any[] = [];
        data.map((vehicle: any, index) => {
            if (parseInt(parseStringDate(vehicle.next).toString()) < 150) {
                if (vehicle.type.toLowerCase() == typeValue) {
                    return newList.push(<TransportItem key={index} transpObj={vehicle}/>)
                }
            }
        })
        if(newList.length == 0) {
            newList.push(<Text key="no-results" style={{textAlign: 'center'}}>No Results found.</Text>)
        }
        setList(newList)
        setIsLoading(false);
    }

    return (
        <>{isLoading && <ActivityIndicator animating={true} color={"green"} />}{list.length > 0 && <>{list}</>}</>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    text: {
        fontSize: 42,
    },
});