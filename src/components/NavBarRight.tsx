import { HStack, Link } from "@chakra-ui/react";
import { VscGlobe } from "react-icons/vsc";
import AccountMenu from "./AccountMenu";

const NavBarRight = () => {
  return (
    <HStack gap={5}>
      <Link fontWeight="500">Airbnb your home</Link>
      <VscGlobe size={20} />
      <AccountMenu />
    </HStack>
  );
};

export default NavBarRight;
