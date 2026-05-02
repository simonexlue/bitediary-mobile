import ProfileHeaderCard from "@/components/profile/ProfileHeaderCard";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileTagsCard from "@/components/profile/ProfileTagsCard";
import Screen from "@/components/ui/Screen";
import { mockProfile, mockProfileStats, mockProfileTags } from "@/data/mockProfile";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ProfileHeaderCard profile={mockProfile} />
        <ProfileStats stats={mockProfileStats} />
        <ProfileTagsCard tags={mockProfileTags} />

        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
  },
  signOutButton: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f87171",
    alignItems: "center",
    justifyContent: "center",
  },
  signOutText: {
    color: "#ef4444",
    fontSize: 15,
    fontWeight: "500",
  },
});