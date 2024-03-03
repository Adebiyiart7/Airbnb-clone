import { Avatar, Box, HStack, Link } from "@chakra-ui/react";
import { HiOutlineBars3 } from "react-icons/hi2";

const NavBarMenuButton = () => {
  return (
    <HStack
      as={Link}
      boxShadow="lg"
      borderWidth={1}
      paddingX={4}
      paddingY={2.5}
      rounded={50}
    >
      <Box as={Link}>
        <HiOutlineBars3 size={24} />
      </Box>
      <Avatar boxSize={7} bgColor={"gray.600"} />
    </HStack>
  );
};

export default NavBarMenuButton;
