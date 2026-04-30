import PalateCard from "@/components/home/PalateCard";
import RecentEntryCard from "@/components/home/RecentEntryCard";
import WelcomeCard from "@/components/home/WelcomeCard";
import Screen from "@/components/ui/Screen";
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
        <Screen>
            <FlatList
                contentContainerStyle={{ paddingBottom: 40 }}
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
        </Screen>
    );
}

const styles = StyleSheet.create({
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