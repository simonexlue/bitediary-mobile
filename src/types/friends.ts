export type Friend = {
  id: string;
  displayName: string;
  username: string;
  entryCount: number;
  recentRestaurant?: string;
  recentTime?: string;
  avatarUrl?: string;
};

export type FriendFeedItem = {
  id: string;
  friendId: string;
  restaurantId: string;
  displayName: string;
  date: string;
  restaurantName: string;
  location: string;
  rating: number;
  dishCount: number;
  photoUrl?: string;
};

export type SentFriendRequest = {
  id: string;
  displayName: string;
  username: string;
  sentAt: string;
  status: "pending" | "accepted" | "declined";
};

export type FriendsTab = "friends" | "feed" | "sent";