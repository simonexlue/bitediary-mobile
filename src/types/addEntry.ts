export type AddEntryForm = {
    restaurantId: string | null;
    restaurantName: string;
    dateTried: string;
    dishName: string;
    rating: number;
    price: string;
    review: string;
    tags: string[];
    privacy: "private" | "friends" | "public";
    photoUri: string | null;
}

export type RestaurantSuggestion = {
  id: string;
  name: string;
  address: string;
};