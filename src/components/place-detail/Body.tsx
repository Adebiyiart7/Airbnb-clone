import { Box } from "@chakra-ui/react";
import PlaceDetailTopButton from "../PlaceDetailTopButton";
import Container from "../Container";
import Images from "./Images";
import Main from "./Main";
import places from "../../data/places";

const Body = () => {
  const place = places();

  return (
    <Box>
      <Container>
        <PlaceDetailTopButton />
        <Images />
        <Main place={place} />
      </Container>
    </Box>
  );
};

export default Body;
