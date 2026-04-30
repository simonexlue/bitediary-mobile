import DateTimePicker from "@react-native-community/datetimepicker";
import { useRef, useState } from "react";
import { Animated, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  value: string;
  onChange: (date: string) => void;
};

function toDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateString: string) {
  if (!dateString) return "Pick a date";

  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function DateVisitedPicker({ value, onChange }: Props) {
  const initialDate = value ? new Date(value + "T00:00:00") : new Date();

  const [isOpen, setIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState(initialDate);

  const slideAnim = useRef(new Animated.Value(300)).current;

    function openPicker() {
    setIsOpen(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
        }).start();
    }

    function closePicker() {
        Animated.timing(slideAnim, {
            toValue: 300,
            duration: 180,
            useNativeDriver: true,
        }).start(() => setIsOpen(false));
    }

    function handleConfirm() {
        onChange(toDateString(tempDate));
        closePicker();
    }

  return (
    <>
      <TouchableOpacity style={styles.inputButton} onPress={openPicker}>
        <Text style={value ? styles.valueText : styles.placeholder}>
          {formatDisplayDate(value)}
        </Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.backdrop} onPress={closePicker} />

            <Animated.View style={[styles.sheet, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.sheet}>
                <View style={styles.sheetHeader}>
                <TouchableOpacity onPress={() => setIsOpen(false)}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>

                <Text style={styles.sheetTitle}>Date Visited</Text>

                <TouchableOpacity onPress={handleConfirm}>
                    <Text style={styles.done}>Done</Text>
                </TouchableOpacity>
                </View>

                <DateTimePicker
                value={tempDate}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(_, selectedDate) => {
                    if (!selectedDate) return;

                    if (Platform.OS === "android") {
                    onChange(toDateString(selectedDate));
                    setIsOpen(false);
                    return;
                    }

                    setTempDate(selectedDate);
                }}
                style={styles.picker}
                />
            </View>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    height: 40,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "#f8f5f2",
  },
  placeholder: {
    color: "#a8a29e",
  },
  valueText: {
    color: "#292524",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingBottom: 28,
  },
  sheetHeader: {
    height: 52,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#e7e5e4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#292524",
  },
  cancel: {
    color: "#897a72",
    fontSize: 15,
  },
  done: {
    color: "#cb5433",
    fontSize: 15,
    fontWeight: "600",
  },
  picker: {
    height: 210,
  },
});