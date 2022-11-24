import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import ResultCard from './ResultCard';


function ResultScreen(props) {

    const [res, setResults] = useState([]);

    useEffect(() => {
        fetch('/city', {
            body: {
                city: props.city,
                county: props.county
            }
        })
    })

    return (
        <SafeAreaView style={styles.content}>
            <ScrollView 
                contentContainerStyle={styles.scroll}
                horizontal={true}
            >
                {}
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