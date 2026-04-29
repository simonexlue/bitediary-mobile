import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.name}>Simone Lue</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>+ Add Entry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Open Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "700",
    color: "#44403c",
    marginBottom: 4,
  },
  name: {
    fontSize: 15,
    color: "#897a72",
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  primaryButton: {
    backgroundColor: "#cb5433",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#e7e5e4",
  },
  secondaryButtonText: {
    color: "#44403c",
    fontWeight: "500",
  },
});