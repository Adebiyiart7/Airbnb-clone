import { HStack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  text: string;
  Icon: ReactNode;
  strokeText?: boolean;
}

const TextWithLeftIcon = React.memo(({ text, Icon, strokeText }: Props) => {
  return (
    <HStack>
      {Icon}
      <Text as={strokeText ? "s" : "p"}>{text}</Text>
    </HStack>
  );
});
export default TextWithLeftIcon;
