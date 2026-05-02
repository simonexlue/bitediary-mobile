import FriendFeedCard from "@/components/friends/FriendFeedCard";
import FriendListCard from "@/components/friends/FriendsListCard";
import FriendsTabs from "@/components/friends/FriendsTab";
import Screen from "@/components/ui/Screen";
import { mockFriendFeed, mockFriends, mockSentRequests } from "@/data/mockFriendsPage";
import { FriendsTab } from "@/types/friends";
import { useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FriendsScreen() {
  const [activeTab, setActiveTab] = useState<FriendsTab>("friends");
  const [searchValue, setSearchValue] = useState("");

  const filteredFriends = useMemo(() => {
    const value = searchValue.trim().toLowerCase();

    if (!value) return mockFriends;

    return mockFriends.filter((friend) => {
      return (
        friend.displayName.toLowerCase().includes(value) ||
        friend.username.toLowerCase().includes(value) ||
        friend.recentRestaurant?.toLowerCase().includes(value)
      );
    });
  }, [searchValue]);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Friends</Text>
          <Text style={styles.subtitle}>
            {mockFriends.length} friends | 0 pending requests
          </Text>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Friend</Text>
          </TouchableOpacity>
        </View>

        <FriendsTabs activeTab={activeTab} onChangeTab={setActiveTab} />

        {activeTab === "friends" && (
          <View>
            <TextInput
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder="Search by name, username, or restaurant..."
              placeholderTextColor="#897a72"
              style={styles.searchInput}
            />

            {filteredFriends.map((friend) => (
              <FriendListCard key={friend.id} friend={friend} />
            ))}
          </View>
        )}

        {activeTab === "feed" && (
          <View>
            <Text style={styles.feedIntro}>Recent restaurant activity from your friends</Text>

            <FlatList
              data={mockFriendFeed}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <FriendFeedCard item={item} />}
              scrollEnabled={false}
            />
          </View>
        )}

        {activeTab === "sent" && (
          <Text style={styles.emptyText}>
            {mockSentRequests.length === 0 ? "No sent requests" : ""}
          </Text>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    color: "#44403c",
    marginBottom: 8,
  },
  subtitle: {
    color: "#897a72",
    fontSize: 14,
    marginBottom: 18,
  },
  addButton: {
    backgroundColor: "#cb5433",
    borderRadius: 7,
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 11,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  searchInput: {
    height: 42,
    borderWidth: 1,
    borderColor: "#e7e5e4",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#292524",
    marginBottom: 16,
  },
  feedIntro: {
    color: "#897a72",
    fontSize: 14,
    marginBottom: 14,
  },
  emptyText: {
    color: "#897a72",
    fontSize: 14,
    marginTop: 4,
  },
});