import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import places, { PlaceProps } from "../../data/places";
import PlaceCard from "../PlaceCard";
import categories from "../../data/categories";
import { useEffect, useState } from "react";

interface Props {
  activeCategory: number;
}

const Body = ({ activeCategory }: Props) => {
  const [generatedPlace, setGeneratedPlace] = useState<PlaceProps[] | null>();

  useEffect(() => {
    const generateFakePlace = Array.from({ length: 20 }, () =>
      places(categories.find((c) => c.id === activeCategory)?.name || "")
    );
    setGeneratedPlace(null);
    setTimeout(() => {
      setGeneratedPlace(generateFakePlace);
    }, 10000000);
  }, [activeCategory]);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6} mt={3}>
      {generatedPlace
        ? generatedPlace.map((place) => <PlaceCard place={place} />)
        : [1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
            <Box gap={1} display="flex" flexDirection="column">
              <Skeleton rounded={10} mb={2} width={"100%"} aspectRatio={1} />
              <Skeleton height="15px" width={"60%"} />
              <Skeleton height="15px" width={"40%"} />
              <Skeleton height="15px" width={"30%"} />
              <Skeleton height="15px" width={"30%"} />
              <Skeleton height="15px" width={"20%"} />
            </Box>
          ))}
    </SimpleGrid>
  );
};

export default Body;
