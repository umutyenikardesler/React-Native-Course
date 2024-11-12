import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList, SectionList } from 'react-native';
import pokemonList from "@/data.json";
import grupedPokemonList from "@/grouped-data.json";


export default function HomeScreen() {

  const renderSeparator = () => (
    <View
      style={{
        height:16
      }}
    />
)

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {pokemonList.map(pokemon => {
        console.log(pokemon.id)
        return(
          <View style={styles.card} key={pokemon.id}>
            <Text  style={styles.cardText}> {pokemon.type} </Text>
            <Text> {pokemon.name} </Text>
          </View>
        );
      })}
      </ScrollView> */}

      <View style={styles.scrollView}>
        
        {/* <FlatList 
          data={pokemonList}
          renderItem={({ item }) => {
              return (
                <View style={styles.card} key={item.id}>
                  <Text style={styles.cardText}> {item.type} </Text>
                  <Text> {item.name} </Text>
                </View>
              );
          }}
          keyExtractor={(item) => item.id.toString()} 
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={<Text>No items found </Text> }
          ListHeaderComponent={ <Text style={styles.headerText}> Pokemon List </Text> }
          ListFooterComponent={ <
          Text style={styles.footerText}>End to List</Text> }
        /> */}

        <SectionList 
          sections={grupedPokemonList}
          renderItem={({ item }) => {
            return(
              <View style={styles.card}>
                <Text style={styles.cardText}> {item} </Text>
              </View>
            );
          }} 
          renderSectionHeader={({ section }) => (
            <Text style={ styles.sectionHeaderText }> { section.type } </Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} /> }
          SectionSeparatorComponent={() => <View style={{ height: 16 }} /> }
          />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
