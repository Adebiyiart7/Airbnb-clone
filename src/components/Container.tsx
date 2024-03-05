import { Box, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      px={isLargerThan600 ? 20 : 4}
      width="100%"
      maxWidth={1500}
      marginX="auto"
    >
      {children}
    </Box>
  );
};

export default Container;
