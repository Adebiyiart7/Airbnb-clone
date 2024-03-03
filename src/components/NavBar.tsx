import { HStack, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarCenter from "./NavBarCenter";
import NavBarRight from "./NavBarRight";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <Stack>
      <HStack paddingY={4} justifyContent="space-between">
        <Logo />
        <NavBarCenter />
        <NavBarRight />
      </HStack>
      <SearchBox />
    </Stack>
  );
};

export default NavBar;
