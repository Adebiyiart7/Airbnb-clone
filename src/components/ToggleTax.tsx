import { HStack, Switch, Text } from "@chakra-ui/react";

const ToggleTax = () => {
  return (
    <HStack
      height="48px"
      borderWidth={1}
      borderRadius={14}
      paddingX={"16px"}
      borderColor="gray.300"
    >
      <Text fontSize="14px" sx={{ textWrap: "nowrap" }} fontWeight={"500"}>
        Display total before taxes
      </Text>
      <Switch />
    </HStack>
  );
};

export default ToggleTax;
