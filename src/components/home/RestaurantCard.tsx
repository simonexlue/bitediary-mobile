import { Restaurant } from "@/types/restaurant";
import { StyleSheet, Text, View } from "react-native";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>

      <View style={styles.row}>
        <Text style={styles.rating}>⭐ {restaurant.avgRating}</Text>
        <Text style={styles.entries}>{restaurant.totalEntries} entries</Text>
      </View>

      <View style={styles.tagsContainer}>
        {restaurant.tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    width: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2f2a26",
  },
  address: {
    fontSize: 13,
    color: "#897a72",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
  },
  entries: {
    fontSize: 14,
    color: "#897a72",
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 6,
  },
  tag: {
    backgroundColor: "#f4e8d7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    color: "#2f2a26",
  },
});