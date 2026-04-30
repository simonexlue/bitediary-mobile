import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type TagsSelectorProps = {
  selectedTags: string[];
  customTagInput: string;
  onChangeCustomTagInput: (value: string) => void;
  onToggleTag: (tag: string) => void;
  onAddCustomTag: () => void;
};

const suggestedTags = ["Sushi", "Pasta", "Pho", "Appetizer", "Seafood", "Savory"];

export default function TagsSelector({
  selectedTags,
  customTagInput,
  onChangeCustomTagInput,
  onToggleTag,
  onAddCustomTag,
}: TagsSelectorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          value={customTagInput}
          onChangeText={onChangeCustomTagInput}
          placeholder="Add a custom tag"
          placeholderTextColor="#a8a29e"
          style={styles.input}
        />

        <TouchableOpacity style={styles.addButton} onPress={onAddCustomTag}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tagsRow}>
        {suggestedTags.map((tag) => {
          const selected = selectedTags.includes(tag);

          return (
            <TouchableOpacity
              key={tag}
              style={[styles.tagButton, selected && styles.activeTag]}
              onPress={() => onToggleTag(tag)}
            >
              <Text style={[styles.tagText, selected && styles.activeTagText]}>
                {tag}
              </Text>
            </TouchableOpacity>
          );
        })}

        {selectedTags
          .filter((tag) => !suggestedTags.includes(tag))
          .map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[styles.tagButton, styles.activeTag]}
              onPress={() => onToggleTag(tag)}
            >
              <Text style={styles.activeTagText}>{tag} ×</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#292524",
    backgroundColor: "#f8f5f2",
    marginBottom: 5,
  },
  addButton: {
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#cb5433",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
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
    backgroundColor: "#fff5f2",
  },
  tagText: {
    color: "#897a72",
  },
  activeTagText: {
    color: "#cb5433",
  },
});