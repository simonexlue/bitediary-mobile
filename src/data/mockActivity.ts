import { Entry } from "@/types/entry";

export const mockEntries: Entry[] = [
  {
    id: "e1",
    restaurantId: "1",
    restaurantName: "Sushi By Yuji",
    dishName: "Hamachi Shiso Roll",
    rating: 4,
    review: "Shiso not my favourite but not too bad. This batch of hamachi was much better.",
    price: 12,
    tags: ["Sushi", "Seafood"],
    dateTried: "2026-04-20",
    createdAt: "2026-04-23T05:53:48.278826Z",
    location: "2252 Kingsway, Vancouver",
  },
  {
    id: "e2",
    restaurantId: "1",
    restaurantName: "Sushi By Yuji",
    dishName: "Negitoro Roll",
    rating: 4,
    review: "Usually would give this 5/5 cus I love negitoro so much but there was a batch difference.",
    price: 10,
    tags: ["Sushi"],
    dateTried: "2026-04-20",
    createdAt: "2026-04-23T05:53:48.278826Z",
    location: "2252 Kingsway, Vancouver",
  },
];