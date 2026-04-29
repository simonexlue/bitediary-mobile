import PalateCard from "@/components/home/PalateCard";
import RecentEntryCard from "@/components/home/RecentEntryCard";
import WelcomeCard from "@/components/home/WelcomeCard";
import { mockEntries } from "@/data/mockEntries";
import { FlatList, StyleSheet, Text, View } from "react-native";

const palateData = [
    { label: "Italian", percent: 13 },
    { label: "Pasta", percent: 13 },
    { label: "Appetizer", percent: 10 },
    { label: "Sushi", percent: 10 },
    { label: "Seafood", percent: 6 },
];

export default function HomeScreen() {
    return (
        <FlatList
            style={styles.screen}
            contentContainerStyle={styles.content}
            data={mockEntries}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
                <>
                    <WelcomeCard />
                    <PalateCard data={palateData} />

                    <View style={styles.recentHeaderCard}>
                        <Text style={styles.sectionLabel}>RECENT ENTRIES</Text>
                        <Text style={styles.recentSubtext}>Your latest meals, in one clean list.</Text>
                    </View>
                </>
            }
            renderItem={({ item }) => <RecentEntryCard entry={item} />}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f8f5f2",
    },
    content: {
        paddingTop: 60,
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    recentHeaderCard: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 12,
    },
    sectionLabel: {
        fontSize: 13,
        color: "#897a72",
        marginBottom: 6,
    },
    recentSubtext: {
        fontSize: 15,
        color: "#44403c",
    },
});