import { ProfileStats as ProfileStatsType } from "@/types/profile";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileStats({ stats }: { stats: ProfileStatsType }) {
  return (
    <View style={styles.row}>
      <StatCard icon="▱" value={stats.totalEntries} label="Entries" />
      <StatCard icon="⌖" value={stats.totalPlaces} label="Places" />
      <StatCard icon="♧" value={stats.totalFriends} label="Friends" />
    </View>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 24,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 24,
    alignItems: "center",
    gap: 8,
  },
  icon: {
    color: "#cb5433",
    fontSize: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    color: "#292524",
  },
  label: {
    fontSize: 14,
    color: "#897a72",
  },
});