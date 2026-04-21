import { StyleSheet, Text, View } from "react-native";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5f2",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2f2a26",
  },
});