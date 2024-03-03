import amazingPools from "../assets/categories/amazing-pools.jpg";
import beachfront from "../assets/categories/beachfront.jpg";
import omg from "../assets/categories/omg.jpg";
import castles from "../assets/categories/castle.jpg";
import design from "../assets/categories/design.jpg";
import nationalParks from "../assets/categories/national-park.jpg";
import islands from "../assets/categories/islands.jpg";
import campers from "../assets/categories/campers.jpg";
import artic from "../assets/categories/arctic.jpg";
import amazingViews from "../assets/categories/amazing-views.jpg";
import surfing from "../assets/categories/surfing.jpg";

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
}

const categories: CategoryProps[] = [
  { id: 1, name: "Amazing pools", image: amazingPools },
  { id: 2, name: "Beachfront", image: beachfront },
  { id: 3, name: "OMG!", image: omg },
  { id: 4, name: "Castles", image: castles },
  { id: 5, name: "Design", image: design },
  { id: 6, name: "National parks", image: nationalParks },
  { id: 7, name: "Islands", image: islands },
  { id: 8, name: "Campers", image: campers },
  { id: 9, name: "Artic", image: artic },
  { id: 10, name: "Amazing views", image: amazingViews },
  { id: 11, name: "Surfing", image: surfing },
  // { id: 13, name: "Beachfront", image: amazingPools },
  // { id: 14, name: "Beachfront", image: amazingPools },
  // { id: 15, name: "Beachfront", image: amazingPools },
  // { id: 16, name: "Beachfront", image: amazingPools },
  // { id: 17, name: "Beachfront", image: amazingPools },
  // { id: 18, name: "Beachfront", image: amazingPools },
];

export default categories;
