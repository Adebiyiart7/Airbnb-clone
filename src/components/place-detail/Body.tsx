import { Box, Divider } from "@chakra-ui/react";
import PlaceDetailTopButton from "../PlaceDetailTopButton";
import Container from "../Container";
import Images from "./Images";
import Main from "./Main";
import places from "../../data/places";
import React from "react";
import Reviews from "./Reviews";
import AboutOwner from "./AboutOwner";

export const CustomDivider = React.memo(() => (
  <Divider my={10} borderColor="gray.300" />
));

const Body = () => {
  const place = places();

  return (
    <Box>
      <Container>
        <PlaceDetailTopButton />
        <Images />
        <Main place={place} />
        <CustomDivider />
        <Reviews />
        <CustomDivider />
        <AboutOwner />
      </Container>
    </Box>
  );
};

export default Body;
