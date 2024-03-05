import { Box } from "@chakra-ui/react";
import PlaceDetailTopButton from "../PlaceDetailTopButton";
import Container from "../Container";
import places from "../../data/places";
import Images from "./Images";

const Body = () => {
  const place = places();

  return (
    <Box>
      <Container>
        <PlaceDetailTopButton />
        <Images place={place} />
      </Container>
    </Box>
  );
};

export default Body;
