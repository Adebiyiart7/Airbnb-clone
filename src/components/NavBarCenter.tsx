import { Box, Link } from "@chakra-ui/react";

const NavBarCenter = () => {
  return (
    <Box display="flex" flexDirection="row" gap={10}>
      <Link fontWeight="bold" fontSize={18}>
        Stays
      </Link>
      <Link color={"gray"} fontSize={18}>
        Experiences
      </Link>
      <Link color={"gray"} fontSize={18}>
        Online Experiences
      </Link>
    </Box>
  );
};

export default NavBarCenter;
