import { HStack, StackItem, Text } from "@chakra-ui/react";
import React from "react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  title: string;
  subTitle: string;
  isDropdown?: boolean;
}

const CheckoutItem = React.memo(({ title, subTitle, isDropdown }: Props) => {
  return (
    <HStack
      cursor="pointer"
      flex={1}
      justifyContent="space-between"
      p={3}
      py={2}
    >
      <StackItem>
        <Text
          fontSize={12}
          fontWeight="600"
          color={isDropdown ? "gray.900" : "primary"}
        >
          {title}
        </Text>
        <Text fontSize={14}>{subTitle}</Text>
      </StackItem>
      {isDropdown && <IoChevronDown size={24} />}
    </HStack>
  );
});

export default CheckoutItem;
