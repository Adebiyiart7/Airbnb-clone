import { Box, Button, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import AccountCard from "../AccountCard";
import { IoStar } from "react-icons/io5";
import { MdAccountBox, MdShield } from "react-icons/md";

const AboutOwner = () => {
  return (
    <Box>
      <AccountCard
        imageSize={60}
        title="Hosted by Patricia Laginha"
        subTitle="Joined in April 2012"
      />
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={{ sm: 10, md: 20 }}>
        <Box>
          <HStack gap={6} my={4}>
            <HStack>
              <IoStar />
              <Text>119 Reviews</Text>
            </HStack>
            <HStack>
              <MdShield />
              <Text>Identity verified</Text>
            </HStack>
            <HStack>
              <MdAccountBox />
              <Text>Superhost</Text>
            </HStack>
          </HStack>
          <Text>
            The pleasure of traveling and the good to receive is of my greatest
            pleasures.
          </Text>
          <Text mt={4} mb={3} fontWeight="500">
            Patricia Laginha is a Superhost
          </Text>
          <Text>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </Text>
        </Box>
        <Box>
          <Stack gap={2}>
            <Text>Registration number: 10307/AL</Text>
            <Text>Languages: English, Français, Español</Text>
            <Text>Response rate: 95%</Text>
            <Text>Response time: within an hour</Text>
          </Stack>
          <Button
            mt={5}
            borderWidth={1}
            bgColor="transparent"
            borderColor="gray.700"
          >
            Contact Host
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AboutOwner;
