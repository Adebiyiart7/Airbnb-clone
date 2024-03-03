import { HStack, Text } from "@chakra-ui/react";
import { BiSliderAlt } from "react-icons/bi";

const Filters = () => {
  return (
    <HStack
      height="48px"
      borderWidth={1}
      borderRadius={14}
      paddingX={"16px"}
      borderColor="gray.700"
    >
      <BiSliderAlt />
      <Text fontSize="14px" fontWeight={"500"}>
        Filters
      </Text>
    </HStack>
  );
};

export default Filters;
