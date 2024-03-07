import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  RightItem?: ReactNode;
  title: string;
  subTitle: string | ReactNode;
  imageSize?: number;
}

const AccountCard = React.memo(
  ({ RightItem, title, subTitle, imageSize }: Props) => {
    const avatarSize = imageSize || 40;
    return (
      <HStack gap={5}>
        {RightItem ? (
          RightItem
        ) : (
          <Avatar height={`${avatarSize}px`} width={`${avatarSize}px`} />
        )}
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
  }
);

export default AccountCard;
