import { FriendFeedItem } from "@/types/friends";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function renderStars(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export default function FriendFeedCard({ item }: { item: FriendFeedItem }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />

      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>♧ {item.displayName}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>

        <Text style={styles.restaurant}>{item.restaurantName}</Text>
        <Text style={styles.location}>{item.location}</Text>

        <Text style={styles.stars}>{renderStars(item.rating)}</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.dishCount}>{item.dishCount} dish reviewed</Text>

          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e7e5e4",
  },
  imagePlaceholder: {
    height: 220,
    backgroundColor: "#8a6f55",
  },
  body: {
    padding: 16,
  },
  metaRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 12,
  },
  meta: {
    color: "#292524",
    fontSize: 14,
  },
  date: {
    color: "#897a72",
    fontSize: 13,
  },
  restaurant: {
    fontSize: 19,
    color: "#292524",
    marginBottom: 8,
  },
  location: {
    color: "#897a72",
    fontSize: 13,
    marginBottom: 10,
  },
  stars: {
    color: "#cb5433",
    fontSize: 15,
    marginBottom: 18,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dishCount: {
    color: "#897a72",
    fontSize: 13,
  },
  viewButton: {
    backgroundColor: "#cb5433",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  viewText: {
    color: "#fff",
    fontWeight: "600",
  },
});