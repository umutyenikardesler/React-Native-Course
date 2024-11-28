import { StyleSheet, Text, View } from 'react-native'

const CourseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseScreen</Text>
    </View>
  );
};

export default CourseScreen;

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