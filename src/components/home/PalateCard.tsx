import { StyleSheet, Text, View } from "react-native";

type PalateItem = {
  label: string;
  percent: number;
};

export default function PalateCard({ data }: { data: PalateItem[] }) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionLabel}>YOUR PALATE</Text>
      <Text style={styles.sectionSubtext}>Cuisines you’ve been loving lately</Text>

      <View style={styles.palateList}>
        {data.map((item) => (
          <View key={item.label}>
            <View style={styles.palateRow}>
              <Text style={styles.palateLabel}>{item.label}</Text>
              <Text style={styles.palatePercent}>{item.percent}%</Text>
            </View>

            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${item.percent}%` }]} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionLabel}>FRIENDS ACTIVITY</Text>

      <View style={styles.friendRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👥</Text>
        </View>

        <View style={styles.friendTextWrap}>
          <Text style={styles.friendText}>
            <Text style={styles.friendName}>Sydney Chu</Text> visited{" "}
            <Text style={styles.linkText}>Sushi By Yuji</Text>
          </Text>
          <Text style={styles.timeText}>10 days ago</Text>
        </View>
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
  sectionLabel: {
    fontSize: 13,
    color: "#897a72",
    marginBottom: 6,
  },
  sectionSubtext: {
    fontSize: 13,
    color: "#897a72",
    marginBottom: 20,
  },
  palateList: {
    gap: 14,
  },
  palateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  palateLabel: {
    fontSize: 14,
    color: "#292524",
  },
  palatePercent: {
    fontSize: 12,
    color: "#897a72",
  },
  progressTrack: {
    height: 7,
    backgroundColor: "#e7e5e4",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#cb5433",
    borderRadius: 999,
  },
  divider: {
    height: 1,
    backgroundColor: "#e7e5e4",
    marginVertical: 24,
  },
  friendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#f5f5f4",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 16,
  },
  friendTextWrap: {
    flex: 1,
  },
  friendText: {
    fontSize: 15,
    color: "#78716c",
  },
  friendName: {
    color: "#292524",
    fontWeight: "600",
  },
  linkText: {
    color: "#cb5433",
  },
  timeText: {
    fontSize: 12,
    color: "#897a72",
  },
});