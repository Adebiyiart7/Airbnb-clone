import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  RightItem?: ReactNode;
  title: string;
  subTitle: string | ReactNode;
}

const AccountCard = React.memo(({ RightItem, title, subTitle }: Props) => {
  return (
    <HStack gap={5}>
      {RightItem ? RightItem : <Avatar height="40px" width="40px" />}
      <Box>
        <Text fontWeight="500" fontSize={17}>
          {title}
        </Text>
        <Text fontSize="15px" color="gray.600">
          {subTitle}
        </Text>
      </Box>
    </HStack>
  );
});

export default AccountCard;
