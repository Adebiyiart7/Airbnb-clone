import categories from "./categories";

export interface PlaceProps {
  id: number;
  location: string;
  category: string;
  distance: string;
  nightCount: string;
  date: string;
  price: number;
  isNew: boolean;
  images: string[];
}

const locations = [
  "Abidjan, Côte d’Ivoire",
  "London, United Kingdom",
  "Tokyo, Japan",
  "New York, USA",
  "Paris, France",
  "Sydney, Australia",
];
const distances = ["100", "200", "300", "400", "500"];
const dates = [
  "May 4 -9",
  "Jun 10 - 15",
  "Jul 20 - 25",
  "Aug 30 - Sep 4",
  "Oct 10 - 15",
];

const newCategories = categories.map((category) => category.name);

const places = (activeCategory: string) => {
  const category =
    newCategories[Math.floor(Math.random() * newCategories.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const distance = distances[Math.floor(Math.random() * distances.length)];
  const date = dates[Math.floor(Math.random() * dates.length)];
  const isNew = Math.random() < 0.5; // 50% chance of being true
  const price = Math.floor(Math.random() * (5000 - 500 + 1)) + 50; // Random price between 50 and 500
  const images = [
    `https://source.unsplash.com/random/600%6${Math.random()
      .toString()
      .slice(2, 4)}/?house-${activeCategory}`,
  ];

  return {
    id: Math.floor(Math.random() * 1000), // Random id between 0 and 999
    location,
    category,
    distance,
    nightCount: "5",
    date,
    price,
    isNew,
    images,
  };
};

export default places;
