import FormSection from "@/components/add-entry/FormSection";
import RatingSelector from "@/components/add-entry/RatingSelector";
import TagsSelector from "@/components/add-entry/TagsSelector";
import Screen from "@/components/ui/Screen";
import { AddEntryForm } from "@/types/addEntry";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const suggestedTags = ["Sushi", "Pasta", "Pho", "Appetizer", "Seafood", "Savory"];
const privacyOptions: AddEntryForm["privacy"][] = ["public", "friends", "private"];

export default function AddScreen() {
  const [form, setForm] = useState<AddEntryForm>({
    restaurantId: null,
    restaurantName: "",
    dateTried: "",
    dishName: "",
    rating: 0,
    price: "",
    review: "",
    tags: [],
    privacy: "public",
    photoUri: null,
  });
  const [customTagInput, setCustomTagInput] = useState("");

  function updateForm<K extends keyof AddEntryForm>(key: K, value: AddEntryForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleTag(tag: string) {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((item) => item !== tag)
        : [...prev.tags, tag],
    }));
  }

  function addCustomTag() {
    const trimmed = customTagInput.trim();
    if (!trimmed) return;

    const alreadyExists = form.tags.some(
      (tag) => tag.toLowerCase() === trimmed.toLowerCase()
    );

    if (!alreadyExists) {
      updateForm("tags", [...form.tags, trimmed]);
    }

    setCustomTagInput("");
  }

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>New Entry</Text>
            <Text style={styles.subtitle}>Log a dish you tried at a restaurant</Text>
          </View>
        </View>

        <FormSection icon="⌖" title="Restaurant" required>
          <TextInput
            value={form.restaurantName}
            onChangeText={(text) => updateForm("restaurantName", text)}
            placeholder="Search restaurant..."
            placeholderTextColor="#a8a29e"
            style={styles.input}
          />
        </FormSection>

        <FormSection icon="□" title="Date Visited">
          <TouchableOpacity style={styles.inputButton}>
            <Text style={styles.placeholder}>Pick a date</Text>
          </TouchableOpacity>
        </FormSection>

        <FormSection icon="⌂" title="Dish Name" required>
          <TextInput
            value={form.dishName}
            onChangeText={(text) => updateForm("dishName", text)}
            placeholder="e.g., Spicy Tuna Roll"
            placeholderTextColor="#a8a29e"
            style={styles.input}
          />

          <Text style={styles.innerLabel}>
            ☆ Rating <Text style={styles.required}>*</Text>
          </Text>

          <RatingSelector
            value={form.rating}
            onChange={(rating) => updateForm("rating", rating)}
          />

          <Text style={styles.innerLabel}>$ Price</Text>
          <TextInput
            value={form.price}
            onChangeText={(text) => updateForm("price", text)}
            placeholder="0.00"
            placeholderTextColor="#a8a29e"
            keyboardType="decimal-pad"
            style={styles.input}
          />
        </FormSection>

        <FormSection icon="▧" title="Dish Photo">
          <TouchableOpacity style={styles.photoBox}>
            <Text style={styles.photoText}>Choose photo</Text>
          </TouchableOpacity>
        </FormSection>

        <FormSection icon="☰" title="Review">
          <TextInput
            value={form.review}
            onChangeText={(text) => updateForm("review", text)}
            placeholder="How was the dish? Share your thoughts..."
            placeholderTextColor="#a8a29e"
            style={[styles.input, styles.textArea]}
            multiline
          />
        </FormSection>

        <FormSection icon="#" title="Tags">
          <TagsSelector
            selectedTags={form.tags}
            customTagInput={customTagInput}
            onChangeCustomTagInput={setCustomTagInput}
            onToggleTag={toggleTag}
            onAddCustomTag={addCustomTag}
          />
        </FormSection>

        <FormSection icon="🔒" title="Privacy">
          <View style={styles.privacyRow}>
            {privacyOptions.map((option) => {
              const selected = form.privacy === option;

              return (
                <TouchableOpacity
                  key={option}
                  style={[styles.privacyButton, selected && styles.activePrivacy]}
                  onPress={() => updateForm("privacy", option)}
                >
                  <Text style={[styles.privacyText, selected && styles.activePrivacyText]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </FormSection>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.outlineButton}>
            <Text style={styles.outlineText}>Save & Add Another</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Save & Finish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#44403c",
    marginBottom: 8,
  },
  subtitle: {
    color: "#897a72",
    fontSize: 15,
  },
  close: {
    fontSize: 24,
    color: "#292524",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#292524",
    backgroundColor: "#f8f5f2",
  },
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
  innerLabel: {
    color: "#292524",
    fontSize: 15,
    marginTop: 10,
  },
  required: {
    color: "#ef4444",
  },
  photoBox: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    backgroundColor: "#f8f5f2",
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: {
    color: "#897a72",
  },
  textArea: {
    height: 110,
    paddingTop: 12,
    textAlignVertical: "top",
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
  privacyRow: {
    flexDirection: "row",
    gap: 8,
  },
  privacyButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  activePrivacy: {
    borderColor: "#cb5433",
    backgroundColor: "#fff5f2",
  },
  privacyText: {
    color: "#897a72",
    textTransform: "capitalize",
  },
  activePrivacyText: {
    color: "#cb5433",
  },
  actions: {
    gap: 10,
    marginBottom: 10,
  },
  cancelButton: {
    height: 42,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e7e5e4",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: {
    color: "#292524",
    fontWeight: "500",
  },
  outlineButton: {
    height: 42,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cb5433",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineText: {
    color: "#cb5433",
    fontWeight: "600",
  },
  saveButton: {
    height: 42,
    backgroundColor: "#cb5433",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
  tagInputRow: {
  flexDirection: "row",
  gap: 8,
},
tagInput: {
  flex: 1,
  height: 40,
  borderWidth: 1,
  borderColor: "#d6d3d1",
  borderRadius: 8,
  paddingHorizontal: 12,
  color: "#292524",
  backgroundColor: "#f8f5f2",
},
addTagButton: {
  height: 40,
  paddingHorizontal: 16,
  borderRadius: 8,
  backgroundColor: "#cb5433",
  alignItems: "center",
  justifyContent: "center",
},
addTagText: {
  color: "#fff",
  fontWeight: "600",
},
});