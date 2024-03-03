import { HStack, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";

const ToggleTax = () => {
  const [isChecked, setChecked] = useState(true);

  const handleCheck = () => setChecked(!isChecked);

  return (
    <HStack
      onClick={handleCheck}
      cursor="pointer"
      bg="none"
      height="48px"
      borderWidth={1}
      borderRadius={14}
      paddingX={"16px"}
      borderColor="gray.300"
    >
      <Text fontSize="14px" sx={{ textWrap: "nowrap" }} fontWeight={"500"}>
        Display total before taxes
      </Text>
      <Switch isChecked={isChecked} onClick={handleCheck} />
    </HStack>
  );
};

export default ToggleTax;
