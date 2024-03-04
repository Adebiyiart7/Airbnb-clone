import { HStack, Hide, Stack, useMediaQuery } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarCenter from "./NavBarCenter";
import NavBarRight from "./NavBarRight";
import SearchBox from "./SearchBox";
import SearchBoxSmall from "./SearchBoxSmall";
import Filters from "./Filters";

interface Props {
  fullNavBar: boolean;
}

const NavBar = ({ fullNavBar = false }: Props) => {
  const [over900px] = useMediaQuery("(min-width: 900px)");
  const [over650px] = useMediaQuery("(min-width: 650px)");
  const [over600px] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack paddingX={over600px ? 10 : 4} mb={5} borderBottomWidth="1px">
      <HStack paddingY={4} justifyContent="space-between">
        <Hide breakpoint="(max-width: 650px)">
          <Logo />
        </Hide>
        {!over900px || !fullNavBar ? (
          <SearchBoxSmall fullNavBar={fullNavBar} />
        ) : (
          <NavBarCenter />
        )}
        {over650px ? <NavBarRight /> : <Filters fullRounded={true} />}
      </HStack>

      {fullNavBar && (
        <Hide breakpoint="(max-width: 900px)">
          <SearchBox />
        </Hide>
      )}
    </Stack>
  );
};

export default NavBar;
