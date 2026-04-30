import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RatingSelectorProps = {
  value: number;
  onChange: (rating: number) => void;
};

export default function RatingSelector({ value, onChange }: RatingSelectorProps) {
  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = value >= star;
        const isHalf = value === star - 0.5;

        return (
          <View key={star} style={styles.starBox}>
            <Text style={styles.emptyStar}>★</Text>

            {(isFull || isHalf) && (
              <View
                style={[
                  styles.filledStarWrapper,
                  isHalf && styles.halfStarWrapper,
                ]}
              >
                <Text style={styles.filledStar}>★</Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.leftTapArea}
              onPress={() => onChange(star - 0.5)}
            />

            <TouchableOpacity
              style={styles.rightTapArea}
              onPress={() => onChange(star)}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 8,
  },
  starBox: {
    width: 26,
    height: 30,
    position: "relative",
  },
  emptyStar: {
    position: "absolute",
    fontSize: 26,
    color: "#d6d3d1",
  },
  filledStarWrapper: {
    position: "absolute",
    overflow: "hidden",
    width: 26,
  },
  halfStarWrapper: {
    width: 13,
  },
  filledStar: {
    fontSize: 26,
    color: "#cb5433",
  },
  leftTapArea: {
    position: "absolute",
    left: 0,
    width: 13,
    height: 30,
    zIndex: 2,
  },
  rightTapArea: {
    position: "absolute",
    right: 0,
    width: 13,
    height: 30,
    zIndex: 2,
  },
});