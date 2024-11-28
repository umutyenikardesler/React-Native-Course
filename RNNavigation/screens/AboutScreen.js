import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route, navigation }) {
  const {name} = route.params; 
  return (
    <View style={styles.container}>
      <Text className="font-bold bg-yellow-300"> About {name} </Text>
      <Button title="Update the name" onPress={() => navigation.setParams({
        name: "Codevolution"
      })} />
      <Button title="Go back with data" onPress={navigation.navigate("Home", { result: "Data from about"})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});