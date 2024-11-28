import { StyleSheet, Text, View } from 'react-native'

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

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