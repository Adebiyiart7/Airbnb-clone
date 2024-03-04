import { HStack, Link } from "@chakra-ui/react";
import { VscGlobe } from "react-icons/vsc";
import AccountMenu from "./AccountMenu";

interface Props {
  screenWidth: number;
}

const NavBarRight = ({ screenWidth }: Props) => {
  return (
    <HStack gap={5}>
      <Link hidden={screenWidth < 850} fontWeight="500">
        Airbnb your home
      </Link>
      <VscGlobe size={20} />
      <AccountMenu />
    </HStack>
  );
};

export default NavBarRight;
