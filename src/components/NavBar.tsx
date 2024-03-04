import { Box, HStack, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarCenter from "./NavBarCenter";
import NavBarRight from "./NavBarRight";
import SearchBox from "./SearchBox";
import SearchBoxSmall from "./SearchBoxSmall";
import Filters from "./Filters";

interface Props {
  screenWidth: number;
}

const NavBar = ({ screenWidth }: Props) => {
  return (
    <Stack>
      <HStack paddingY={4} justifyContent="space-between">
        <Box hidden={screenWidth < 650}>
          <Logo />
        </Box>
        <NavBarCenter hidden={screenWidth < 900} />
        <SearchBoxSmall hidden={screenWidth > 900} />
        {screenWidth > 650 ? (
          <NavBarRight screenWidth={screenWidth} />
        ) : (
          <Filters fullRounded={true} />
        )}
      </HStack>
      <SearchBox hidden={screenWidth < 900} />
    </Stack>
  );
};

export default NavBar;
