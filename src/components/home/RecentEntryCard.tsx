import { Entry } from "@/types/entry";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import { StyleSheet, Text, View } from "react-native";

export default function RecentEntryCard({ entry }: { entry: Entry }) {
  const primaryTag = entry.tags?.[0];

  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.metaLeft}>
            {primaryTag && (
              <View style={styles.tag}>
                <Text style={styles.tagText}>{primaryTag}</Text>
              </View>
            )}
            <Text style={styles.rating}>★ {entry.rating}</Text>
          </View>

          <Text style={styles.time}>◷ {formatTimeAgo(entry.createdAt)}</Text>
        </View>

        <Text style={styles.restaurant}>{entry.restaurantName}</Text>
        <Text style={styles.dish}>{entry.dishName}</Text>

        <Text style={styles.review} numberOfLines={2}>
          {entry.review}
        </Text>

        <Text style={styles.location}>⌖ {entry.location}</Text>
      </View>

      <Text style={styles.arrow}>→</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e7e5e4",
    gap: 14,
  },
  imagePlaceholder: {
    width: 84,
    height: 84,
    borderRadius: 8,
    backgroundColor: "#f4e8d7",
  },
  content: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  metaLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexShrink: 1,
  },
  tag: {
    backgroundColor: "#f4e8d7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    color: "#44403c",
  },
  rating: {
    color: "#cb5433",
    fontSize: 13,
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    color: "#897a72",
  },
  restaurant: {
    fontSize: 15,
    fontWeight: "400",
    color: "#292524",
    marginBottom: 3,
  },
  dish: {
    fontSize: 13,
    color: "#292524",
    marginBottom: 8,
  },
  review: {
    fontSize: 13,
    color: "#897a72",
    lineHeight: 20,
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: "#897a72",
  },
  arrow: {
    fontSize: 18,
    color: "#897a72",
    marginTop: 30,
  },
});