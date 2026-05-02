import { Friend, FriendFeedItem, SentFriendRequest } from "@/types/friends";

export const mockFriends: Friend[] = [
  {
    id: "1",
    displayName: "j t",
    username: "joditab",
    entryCount: 0,
  },
  {
    id: "2",
    displayName: "Sydney Chu",
    username: "sydknee",
    entryCount: 16,
    recentRestaurant: "Gyu-Kaku Japanese BBQ",
    recentTime: "Apr 24, 2026",
  },
];

export const mockFriendFeed: FriendFeedItem[] = [
  {
    id: "feed-1",
    friendId: "2",
    restaurantId: "r1",
    displayName: "Sydney Chu",
    date: "Apr 24, 2026",
    restaurantName: "Gyu-Kaku Japanese BBQ",
    location: "888 Nelson St, g3, Vancouver, BC V6Z 2H1, Canada",
    rating: 3,
    dishCount: 1,
  },
];

export const mockSentRequests: SentFriendRequest[] = [];