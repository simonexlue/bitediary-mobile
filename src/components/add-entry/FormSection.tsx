import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  icon?: string;
  title: string;
  required?: boolean;
  children: ReactNode;
};

export default function FormSection({ icon, title, required, children }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.labelRow}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={styles.label}>
          {title} {required && <Text style={styles.required}>*</Text>}
        </Text>
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e7e5e4",
    padding: 24,
    marginBottom: 24,
    gap: 12,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    color: "#cb5433",
    fontSize: 16,
  },
  label: {
    color: "#292524",
    fontSize: 15,
  },
  required: {
    color: "#ef4444",
  },
});