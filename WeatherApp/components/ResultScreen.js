import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import ResultCard from './ResultCard';


function ResultScreen(props) {

    const [res, setResults] = useState([]);

    useEffect(() => {
        fetch('/city', {
            body: {
                city: props.city,
                country: props.country
                }
            })
            .then((data) => {
                setResults(data)
            })
    }, [])

    return (
        <SafeAreaView style={styles.content}>
            <ScrollView 
                contentContainerStyle={styles.scroll}
                horizontal={true}
            >
                {
                    res.map((result) => {
                    <ResultCard
                        day = {result.day}
                        weather = {result.weather}
                        currentTemp = {result.currentTemp}
                        minTemp = {result.minTemp}
                        maxTemp = {result.maxTemp}
                        windSpeed = {result.windSpeed}
                        precipitation = {result.precipitation}
                        humidity = {result.humidity}
                    />
                    })
                }
                
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