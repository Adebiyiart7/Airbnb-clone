import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
} from "@chakra-ui/react";

const AccountMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        boxShadow="lg"
        borderWidth={1}
        size={"lg"}
        gap={1}
        rounded={50}
        variant="none"
        width="100px"
        leftIcon={<HamburgerIcon fontSize={20} />}
      >
        <Avatar boxSize={7} bgColor={"gray.600"} />
      </MenuButton>

      <MenuList>
        <MenuItem color="gray.600" fontWeight="500">
          Sign up
        </MenuItem>
        <MenuItem color="gray.600">Login</MenuItem>
        <Divider my={2} />
        <MenuItem color="gray.600">Gift cards</MenuItem>
        <MenuItem color="gray.600">Airbnb your home</MenuItem>
        <MenuItem color="gray.600">Help center</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AccountMenu;
