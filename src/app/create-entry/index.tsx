import { StyleSheet, Text, View } from "react-native";

export default function CreateEntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CreateEntry</Text>
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