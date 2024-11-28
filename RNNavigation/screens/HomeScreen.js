import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text  style={styles.text}>{route.params?.result}</Text>
      <Button 
        title="Go to About" 
        onPress={() => 
          navigation.navigate("About", {
            name: "Vishwas",
          })} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
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