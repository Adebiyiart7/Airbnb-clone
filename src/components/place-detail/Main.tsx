import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import HomeInfo from "../HomeInfo";
import React from "react";
import { PlaceProps } from "../../data/places";
import AccountCard from "../AccountCard";
import OwnerCredits from "./OwnerCredits";
import RoomInfo from "./RoomInfo";
import CheckoutCard from "../CheckoutCard";

interface Props {
  place: PlaceProps;
}

const CustomDivider = React.memo(() => (
  <Divider my={6} borderColor="gray.300" />
));

const Main = React.memo(({ place }: Props) => {
  return (
    <HStack mt={5} gap={10} mb={200} alignItems="flex-start">
      <Box flex={3}>
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
      </Box>
      <Box flex={2} pos="sticky" top={10}>
        <CheckoutCard />
      </Box>
    </HStack>
  );
});

export default Main;
