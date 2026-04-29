import RestaurantCard from "@/components/home/RestaurantCard";
import { mockRestaurants } from "@/data/mockRestaurants";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>BiteDiary</Text>

            <FlatList
                data={mockRestaurants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RestaurantCard restaurant={item} />}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f5f2",
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 16,
        color: "#2f2a26",
    },
    list: {
        paddingBottom: 40,
    },
});