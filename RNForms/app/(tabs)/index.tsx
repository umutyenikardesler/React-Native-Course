import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, SafeAreaView } from 'react-native';


export default function App() {
  const [name, setName] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='email@examp.com'
        autoCorrect={false}
        autoCapitalize='none'
        // secureTextEntry 
        // keyboardType='numeric' 
      />
      <Text style={styles.text}>My name is {name} </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});