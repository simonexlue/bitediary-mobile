import { StyleSheet, Text, View } from "react-native";

export default function ProfileTagsCard({ tags }: { tags: string[] }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>⌑ Tags</Text>

      <View style={styles.tagsRow}>
        {tags.map((tag) => (
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
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#292524",
    marginBottom: 16,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  tagText: {
    color: "#897a72",
    fontSize: 14,
  },
});