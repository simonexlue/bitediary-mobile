import { ProfileStats, UserProfile } from "@/types/profile";

export const mockProfile: UserProfile = {
  id: "3038b05f-9778-41c8-ba3c-5393b26b74dd",
  displayName: "Simone Lue",
  username: "simone",
  location: "Vancouver, BC",
  bio: "I am a food enjoyer and I'm always down for good pho, sushi and pasta places.",
};

export const mockProfileStats: ProfileStats = {
  totalEntries: 31,
  totalPlaces: 7,
  totalFriends: 2,
};

export const mockProfileTags = [
  "Italian",
  "Pasta",
  "Sushi",
  "Appetizer",
  "Seafood",
  "French",
  "Pho",
  "Savory",
];