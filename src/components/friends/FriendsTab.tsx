import { FriendsTab } from "@/types/friends";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  activeTab: FriendsTab;
  onChangeTab: (tab: FriendsTab) => void;
};

const tabs: { id: FriendsTab; label: string; icon: string }[] = [
  { id: "friends", label: "Friends", icon: "♧" },
  { id: "feed", label: "Feed", icon: "▱" },
  { id: "sent", label: "Sent", icon: "⌁" },
];

export default function FriendsTabs({ activeTab, onChangeTab }: Props) {
  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => {
        const active = activeTab === tab.id;

        return (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tabButton, active && styles.activeTab]}
            onPress={() => onChangeTab(tab.id)}
          >
            <Text style={styles.tabText}>
              {tab.icon} {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#ede8e4",
    borderRadius: 8,
    padding: 6,
    gap: 6,
    marginBottom: 20,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#44403c",
    fontSize: 15,
  },
});