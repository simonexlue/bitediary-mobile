import { DiaryRestaurant } from "@/types/diary";
import { StyleSheet, Text, View } from "react-native";

function renderStars(rating: number) {
  const rounded = Math.round(rating);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

export default function DiaryRestaurantCard({
  restaurant,
}: {
  restaurant: DiaryRestaurant;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <View style={styles.deleteButton}>
          <Text style={styles.deleteText}>🗑</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.topRow}>
          <Text style={styles.stars}>{renderStars(restaurant.averageRating)}</Text>
          <Text style={styles.date}>{restaurant.lastVisited}</Text>
        </View>

        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.address}>{restaurant.address}</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.entries}>𐄁 {restaurant.entryCount} entries</Text>

          <View style={styles.tag}>
            <Text style={styles.tagText}>{restaurant.topTag}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e7e5e4",
    overflow: "hidden",
    marginBottom: 16,
  },
  imagePlaceholder: {
    height: 225,
    backgroundColor: "#d8b47f",
    alignItems: "flex-end",
    padding: 12,
  },
  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    fontSize: 14,
    color: "#ef4444",
  },
  body: {
    padding: 12,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  stars: {
    color: "#cb5433",
    fontSize: 14,
  },
  date: {
    color: "#897a72",
    fontSize: 12,
  },
  name: {
    color: "#292524",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
  address: {
    color: "#897a72",
    fontSize: 14,
    marginBottom: 24,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entries: {
    color: "#897a72",
    fontSize: 12,
  },
  tag: {
    backgroundColor: "#fff5f2",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: {
    color: "#cb5433",
    fontSize: 12,
  },
});