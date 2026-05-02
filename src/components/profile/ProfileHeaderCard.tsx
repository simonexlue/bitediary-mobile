import { UserProfile } from "@/types/profile";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileHeaderCard({ profile }: { profile: UserProfile }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>✎</Text>
      </TouchableOpacity>

      <View style={styles.avatar} />

      <Text style={styles.name}>{profile.displayName}</Text>
      <Text style={styles.location}>⌖ {profile.location}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    marginBottom: 24,
  },
  editButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  editText: {
    fontSize: 18,
    color: "#897a72",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#d6d3d1",
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#292524",
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: "#897a72",
    marginBottom: 18,
  },
  bio: {
    fontSize: 14,
    color: "#897a72",
    textAlign: "center",
    lineHeight: 21,
  },
});