export type UserProfile = {
    id: string;
    displayName: string;
    username: string;
    location: string;
    bio: string;
    avatarUrl?: string;
}

export type ProfileStats = {
    totalEntries: number;
    totalPlaces: number;
    totalFriends: number;
}