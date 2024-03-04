import { Box, Link } from "@chakra-ui/react";

interface Props {
  hidden: boolean;
}

const NavBarCenter = ({ hidden }: Props) => {
  return (
    <Box display="flex" flexDirection="row" gap={10} hidden={hidden}>
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
