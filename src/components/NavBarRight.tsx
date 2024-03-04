import { HStack, Hide, Link } from "@chakra-ui/react";
import { VscGlobe } from "react-icons/vsc";
import AccountMenu from "./AccountMenu";

const NavBarRight = () => {
  return (
    <HStack gap={5}>
      <Hide breakpoint="(max-width: 850px)">
        <Link fontWeight="500" style={{ textWrap: "nowrap" }}>
          Airbnb your home
        </Link>
        <VscGlobe size={20} />
      </Hide>
      <AccountMenu />
    </HStack>
  );
};

export default NavBarRight;
