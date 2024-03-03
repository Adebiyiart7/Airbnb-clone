import { Box, Image } from "@chakra-ui/react";
import { PlaceProps } from "../data/places";

interface Props {
  place: PlaceProps;
}

const PlaceCard = ({ place }: Props) => {
  return (
    <Box maxW="sm">
      <Image
        width="100%"
        src={place.images[0]}
        borderRadius="lg"
        aspectRatio={1}
        alt={place.location}
      />
      <Box py="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {place.location}
        </Box>

        <Box color="gray" letterSpacing="wide" lineHeight={"16px"}>
          {place.distance} kilometers away
        </Box>

        <Box color="gray.500" letterSpacing="wide" fontSize="sm">
          {place.nightCount} nights &bull; {place.date} baths
        </Box>

        <Box fontWeight={"500"}>
          ${place.price.toLocaleString()}
          <Box as="span" color="gray.600" fontSize="sm">
            {" "}
            / night
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlaceCard;
