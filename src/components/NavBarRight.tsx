import { HStack, Link } from "@chakra-ui/react";
import NavBarMenuButton from "./NavBarMenuButton";
import { VscGlobe } from "react-icons/vsc";

const NavBarRight = () => {
  return (
    <HStack gap={5}>
      <Link fontWeight="500">Airbnb your home</Link>
      <VscGlobe size={20} />
      <NavBarMenuButton />
    </HStack>
  );
};

export default NavBarRight;
