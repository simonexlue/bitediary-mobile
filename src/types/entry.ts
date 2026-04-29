export type Entry = {
  id: string;
  restaurantId: string;
  restaurantName: string;
  dishName: string;
  rating: number;
  review: string;
  price?: number;
  tags: string[];
  dateTried: string;
  createdAt: string;
  location: string;
  photoUrl?: string;
};