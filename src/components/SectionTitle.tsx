import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const SectionTitle = React.memo(
  ({ children }: { children: ReactNode | string }) => {
    return (
      <Text fontSize={24} fontWeight="500" my={6}>
        {children}
      </Text>
    );
  }
);

export default SectionTitle;
