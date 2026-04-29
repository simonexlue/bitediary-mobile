import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const palateData = [
    { label: "Italian", percent: 13 },
    { label: "Pasta", percent: 13 },
    { label: "Appetizer", percent: 10 },
    { label: "Sushi", percent: 10 },
    { label: "Seafood", percent: 6 },
];

const recentEntries = [
    {
        id: "1",
        restaurantName: "Sushi By Yuji",
        dishName: "Hamachi Shiso Roll",
        rating: 4,
        review: "Shiso not my favourite but not too bad. This batch of hamachi was much better.",
        location: "2252 Kingsway, Vancouver",
        timeAgo: "5 days ago",
    },
    {
        id: "2",
        restaurantName: "Sushi By Yuji",
        dishName: "Negitoro Roll",
        rating: 4,
        review: "Usually would give this 5/5 cus I love negitoro so much but there was a batch difference.",
        location: "2252 Kingsway, Vancouver",
        timeAgo: "5 days ago",
    },
];

export default function HomeScreen() {
    return (
        <FlatList
            style={styles.screen}
            contentContainerStyle={styles.content}
            data={recentEntries}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
                <>
                    {/* Welcome card */}
                    <View style={styles.headerCard}>
                        <Text style={styles.welcome}>Welcome back</Text>
                        <Text style={styles.name}>Simone Lue</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.primaryButton}>
                                <Text style={styles.primaryButtonText}>+ Add Entry</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.secondaryButtonText}>Open Map</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Palate Section */}
                    <View style={styles.card}>
                        <Text style={styles.sectionLabel}>YOUR PALATE</Text>
                        <Text style={styles.sectionSubtext}>Cuisines you’ve been loving lately</Text>

                        <View style={styles.palateList}>
                            {palateData.map((item) => (
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
                    </View>

                    {/* Friends Activity Section */}
                </>
            }
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
    headerCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 24,
        marginBottom: 24,
    },
    welcome: {
        fontSize: 28,
        fontWeight: "700",
        color: "#44403c",
        marginBottom: 4,
    },
    name: {
        fontSize: 15,
        color: "#897a72",
        marginBottom: 20,
    },
    actions: {
        flexDirection: "row",
        gap: 10,
    },
    primaryButton: {
        backgroundColor: "#cb5433",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    primaryButtonText: {
        color: "#fff",
        fontWeight: "600"
    },
    secondaryButton: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderColor: "#e7e5e4",
    },
    secondaryButtonText: {
        color: "#44403c",
        fontWeight: "500",
    },
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
});