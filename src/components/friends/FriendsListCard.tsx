import { Friend } from "@/types/friends";
import { StyleSheet, Text, View } from "react-native";

export default function FriendListCard({ friend }: { friend: Friend }) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text>♧</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{friend.displayName}</Text>
        <Text style={styles.username}>@{friend.username}</Text>
        <Text style={styles.entries}>{friend.entryCount} entries</Text>

        {friend.recentRestaurant && (
          <View style={styles.recentPill}>
            <Text style={styles.recentText}>
              ⌖ {friend.recentRestaurant} → {friend.recentTime}
            </Text>
          </View>
        )}
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
    padding: 16,
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#e7e5e4",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 16,
    color: "#292524",
    fontWeight: "500",
  },
  username: {
    fontSize: 13,
    color: "#897a72",
  },
  entries: {
    fontSize: 13,
    color: "#897a72",
    marginBottom: 6,
  },
  recentPill: {
    backgroundColor: "#f4e8d7",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  recentText: {
    color: "#6b5f58",
    fontSize: 12,
  },
});