import { Box, HStack, Text } from "@chakra-ui/react";
import { PlaceProps } from "../data/places";
import { MdStar } from "react-icons/md";

const HomeInfo = ({ place }: { place: PlaceProps }) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="x-large">
        {place.location}
      </Text>
      <Text color="gray.700">
        6 guests &bull; 3 bedrooms &bull; 5 beds &bull; 1 bath
      </Text>
      <HStack gap={1} mt={1}>
        <MdStar size={20} />
        <Text fontWeight="500" textDecor="underline">
          2 reviews
        </Text>
      </HStack>
    </Box>
  );
};

export default HomeInfo;
