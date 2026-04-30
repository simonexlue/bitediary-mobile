import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f5f2",
  },
  content: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});