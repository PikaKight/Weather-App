import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, Pressable} from 'react-native';

export default function App() {

  const [city, onCity] = React.useState("");
  const [zip, onZip] = React.useState("");
  const [value, onSubmit] = React.useState("");


  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar 
      style="auto"
      animated={true}
      />

      <Text style={styles.heading}>Hello World!</Text>

      <Text style={styles.formHeading}>Please Enter City</Text>
      <TextInput
        style={styles.input}
        onChangeText={onCity}
        value={city}
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
        title='Submit'
        color="#7376FF"
        onPress={onSubmit}
      />
    
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
  },
  submit: {
    backgroundColor: '#7376FF',
    color: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    padding: '2%',
  }
});
