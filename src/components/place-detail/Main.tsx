import { Box, HStack, Text } from "@chakra-ui/react";
import HomeInfo from "../HomeInfo";
import React from "react";
import { PlaceProps } from "../../data/places";
import AccountCard from "../AccountCard";
import OwnerCredits from "./OwnerCredits";
import RoomInfo from "./RoomInfo";
import CheckoutCard from "../CheckoutCard";
import Amenities from "./Amenities";
import { CustomDivider } from "./Body";

interface Props {
  place: PlaceProps;
}

const Main = React.memo(({ place }: Props) => {
  return (
    <HStack mt={5} gap={10} alignItems="flex-start">
      <Box flex={3.3}>
        <HomeInfo place={place} />
        <CustomDivider />
        <AccountCard
          title="Hosted by Patricia Laginha"
          subTitle={<Text>Superhost &bull; 12 years hosting</Text>}
        />
        <CustomDivider />
        <OwnerCredits />
        <CustomDivider />
        <HStack bgColor="gray.50" borderRadius={10} p={4} mb={6}>
          <Text>Some info has been automatically translated. </Text>
          <Text textDecor="underline" fontWeight="bold" cursor="pointer">
            Show original
          </Text>
        </HStack>
        <Text>
          The Valenca 1 enjoys a magnificent position on the clifftops
          overlooking the ocean with stunning views over Carvoeiro's sweeping
          bay. For those familiar with the area, the position is about 400
          metres to the east of the beach of Carvoeiro.
        </Text>
        <CustomDivider />
        <RoomInfo />
        <CustomDivider />
        <Amenities />
      </Box>
      <Box flex={1.7} pos="sticky" top={10}>
        <CheckoutCard />
      </Box>
    </HStack>
  );
});

export default Main;
