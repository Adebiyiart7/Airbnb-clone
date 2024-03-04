import { HStack, Text } from "@chakra-ui/react";
import { BiSliderAlt } from "react-icons/bi";

interface Props {
  fullRounded?: boolean;
}

const Filters = ({ fullRounded }: Props) => {
  return (
    <HStack
      cursor="pointer"
      height="48px"
      borderWidth={1}
      borderRadius={fullRounded ? 100 : 14}
      paddingX={"16px"}
      borderColor="gray.700"
    >
      <BiSliderAlt />
      {!fullRounded && (
        <Text fontSize="14px" fontWeight={"500"}>
          Filters
        </Text>
      )}
    </HStack>
  );
};

export default Filters;
