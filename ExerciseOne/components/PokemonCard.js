import { View, Text, StyleSheet, Platform } from "react-native";

export default function PokemonCard() {
    return (
        <View>
            <Text style={styles.card}>Pokemon Card</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
                color: "#000",
            },
        })
    }
    });
