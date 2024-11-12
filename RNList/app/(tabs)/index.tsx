import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import pokemonList from "@/data.json";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {pokemonList.map(pokemon => {
        return(
          <View style={styles.card} key={pokemon.id}>
            <Text  style={styles.cardText}> {pokemon.type} </Text>
            <Text> {pokemon.name} </Text>
          </View>
        );
      })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
