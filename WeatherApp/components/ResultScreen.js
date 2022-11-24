import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import ResultCard from './ResultCard';


function ResultScreen(props) {

    const [res, setResults] = useState([]);

    useEffect(() => {
        fetch
    })

    return (
        <SafeAreaView style={styles.content}>
            <ScrollView 
                contentContainerStyle={styles.scroll}
                horizontal={true}
            >
                <ResultCard
                    day = {1}
                    weather = "Clear"
                    currentTemp = {-2}
                    minTemp = {-2}
                    maxTemp = {11}
                    windSpeed = "6 km/h"
                    precipitation = "3%"
                    humidity = "100%"
                />
                <ResultCard
                    day = {2}
                    weather = "Clear"
                    currentTemp = {-2}
                    minTemp = {-2}
                    maxTemp = {11}
                    windSpeed = "6 km/h"
                    precipitation = "3%"
                    humidity = "100%"
                />
            </ScrollView>
        </SafeAreaView>
    );
}


export default ResultScreen;

const styles = StyleSheet.create({
    content: {
        margin: '5%',
        width: '95%',
        flex: 1,
        backgroundColor: '#FFA980',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        paddingVertical: 20
    }

})