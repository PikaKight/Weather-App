import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ResultCard = ({
    day,
    weather,
    currentTemp,
    minTemp,
    maxTemp,
    windSpeed,
    precipitation,
    humidity
}) => {
    return (
     <View style={styles.card}>

        <Text style={[styles.day, styles.info]}>Date: {day}</Text>

        
        <Text style={[styles.text, styles.info]}>Weather: {weather}</Text>
        
        <Text style={[styles.text, styles.info]}>Current Tempurature: {currentTemp}</Text>
        <Text style={[styles.text, styles.info]}>Min Tempurature: {minTemp}</Text>
        <Text style={[styles.text, styles.info]}>Max Tempurature: {maxTemp}</Text>
        
        <Text style={[styles.text, styles.info]}>Wind Speed: {windSpeed}</Text>
        <Text style={[styles.text, styles.info]}>Precipitation: {precipitation}</Text>
        <Text style={[styles.text, styles.info]}>Humidity: {humidity}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#59FFF1',
        margin: 3,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',

    },
    info:{
        paddingVertical: 3,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
    },
    day: {
        fontSize: 20,
        fontWeight: "500",
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
    }
})

export default ResultCard;