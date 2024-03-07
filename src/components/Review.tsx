import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AccountCard from "./AccountCard";
import { MdStar } from "react-icons/md";

const Dot = React.memo(() => {
  return (
    <Text color="gray.500" fontSize={12}>
      &bull;
    </Text>
  );
});

interface Props {
  ownerName: string;
  ownnerLocation: string;
}

const Review = React.memo(({ ownerName, ownnerLocation }: Props) => {
  return (
    <Stack>
      <AccountCard imageSize={50} title={ownerName} subTitle={ownnerLocation} />
      <HStack mt={2}>
        <HStack gap={0}>
          {[1, 2, 3, 4, 5].map(() => (
            <MdStar size={12} />
          ))}
        </HStack>
        <Dot />
        <Text fontSize={14} fontWeight="500">
          August 2021
        </Text>
        <Dot />
        <Text color="gray.600" fontSize={14}>
          Stayed about a week
        </Text>
      </HStack>
      <Text>
        We had a great week at Patricia's place. The house (as it says in its
        description) has a privileged location (ocean view and very close to
        Carvoeiro beach). The outside area of the house is
      </Text>
      <Text fontWeight="500" textDecor="underline" cursor="pointer">
        Show more
      </Text>
    </Stack>
  );
});

export default Review;
