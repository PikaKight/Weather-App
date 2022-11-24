import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button} from 'react-native';
import ResultScreen from './components/ResultScreen';

export default function App() {

  const [city, onCity] = React.useState("");
  const [country, onCountry] = React.useState("");
  const [zip, onZip] = React.useState("");
  const [value, onReset] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar 
      style="auto"
      animated={true}
      />

      <Text style={styles.heading}>Weather App</Text>

      <Text style={styles.formHeading}>Please Enter City</Text>
      <TextInput
        style={styles.input}
        onChangeText={onCity}
        value={city}
        placeholder="City"
      />

      <Text style={styles.formHeading}>Please Enter City</Text>
      <TextInput
        style={styles.input}
        onChangeText={onCountry}
        value={country}
        placeholder="City"
      />
      <Text style={styles.formHeading}>Please Enter Zip Code</Text>
      <TextInput
        style={styles.input}
        onChangeText={onZip}
        value={zip}
        placeholder="Zip"
      />

      <Button 
        title='Reset'
        color="#7376FF"
        onPress={onReset}
      />

      <ResultScreen/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BAFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    marginTop: '10%',
    fontSize: 30,
    fontWeight: 'bold'
  },
  formHeading: {
    fontSize: 20,
    fontWeight: '500'
  },
  input:{
    width: '50%',
    height: '6%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center'
  }
});
