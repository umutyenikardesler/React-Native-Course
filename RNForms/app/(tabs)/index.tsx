import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, SafeAreaView, Switch } from 'react-native';


export default function App() {
  const [name, setName] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='email@examp.com'
        autoCorrect={false}
        autoCapitalize='none'
        // secureTextEntry 
        // keyboardType='numeric' 
      />
      <TextInput style={[styles.input, styles.multilineText]} placeholder='message' multiline />
      <Text style={styles.text}>My name is {name} </Text>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{false: "#767577", true: "#lightblue" }} 
          thumbColor="#f4f3f4"
          />
      </View>

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
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});