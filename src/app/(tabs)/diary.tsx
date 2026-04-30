import DiaryRestaurantCard from "@/components/diary/DiaryRestaurantCard";
import Screen from "@/components/ui/Screen";
import { mockDiaryRestaurants } from "@/data/mockDiaryRestaurant";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const tags = ["All", "Appetizer", "French", "Italian", "Pasta", "Pho", "Savory"];

export default function DiaryScreen() {
  return (
    <Screen>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={mockDiaryRestaurants}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.title}>My Diary</Text>
                <Text style={styles.subtitle}>7 restaurants | 31 entries</Text>
              </View>

              <TouchableOpacity style={styles.newButton}>
                <Text style={styles.newButtonText}>+ New Entry</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.filterCard}>
              <View style={styles.inputRow}>
                <TextInput
                  placeholder="Search restaurants"
                  placeholderTextColor="#897a72"
                  style={styles.searchInput}
                />

                <View style={styles.sortBox}>
                  <Text style={styles.sortText}>Latest First</Text>
                </View>
              </View>

                <View style={styles.tagsRow}>
                  {tags.map((tag) => (
                    <TouchableOpacity
                      key={tag}
                      style={[styles.tagButton, tag === "All" && styles.activeTag]}
                      >
                        <Text style={[styles.tagText, tag ==="All" && styles.activeTagText]}>
                          {tag}
                        </Text>
                      </TouchableOpacity>
                  ))}
                </View>
            </View>

            <Text style={styles.showingText}>
              Showing {mockDiaryRestaurants.length} of {mockDiaryRestaurants.length} restaurants
            </Text>
          </>
        }
        renderItem={({ item }) => <DiaryRestaurantCard restaurant={item} />}
        showsVerticalScrollIndicator={false}
        />
      </Screen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  }, 
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#44403c",
    marginBottom: 8,
  }, 
  subtitle: {
    fontSize: 14,
    color: "#897a72",
  },
  newButton: {
    backgroundColor: "#cb5433",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }, 
  newButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  filterCard:{
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e7e5e4",
    padding: 16,
    marginBottom: 26,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
  }, 
  searchInput: {
    width: "65%",
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#292524",
    borderColor: "#d6d3d1",
    backgroundColor: "#f8f5f2",
  },

  sortBox: {
    width: "35%",
    height: 40,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 7,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  sortText: {
    fontSize: 13,
    color: "#44403c",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tagButton: {
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  activeTag: {
    borderColor: "#cb5433",
  },
  tagText: {
    color: "#897a72",
    fontSize: 14,
  },
  activeTagText: {
    color: "#cb5433",
  },
  showingText: {
    color: "#897a72",
    fontSize: 14,
    marginBottom: 16,
  },
});