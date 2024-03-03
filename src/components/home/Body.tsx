import { SimpleGrid } from "@chakra-ui/react";
import places from "../../data/places";
import PlaceCard from "../PlaceCard";

const Body = () => {
  return (
    <SimpleGrid columns={{ sm: 12, md: 6, lg: 4 }} spacing={6} mt={3}>
      {places.map((place) => (
        <PlaceCard place={place} />
      ))}
    </SimpleGrid>
  );
};

export default Body;
