import { Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | string;
  subTitle?: string;
}

const SectionTitle = React.memo(({ children, subTitle }: Props) => {
  return (
    <Stack my={6} gap={0}>
      <Text fontSize={24} fontWeight="500">
        {children}
      </Text>
      {subTitle && <Text color="gray.600">{subTitle}</Text>}
    </Stack>
  );
});

export default SectionTitle;
