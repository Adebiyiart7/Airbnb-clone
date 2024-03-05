import { Box, Button, HStack, useBreakpoint } from "@chakra-ui/react";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

const PlaceDetailTopButton = () => {
  const breakpoint = useBreakpoint();

  return (
    <Box width="100%" position="relative">
      <HStack justifyContent={breakpoint === "sm" ? "center" : "flex-end"}>
        <Button bg="none" leftIcon={<MdOutlineFileUpload />}>
          Share
        </Button>
        <Button bg="none" leftIcon={<IoHeartOutline />}>
          Save
        </Button>
      </HStack>
    </Box>
  );
};

export default PlaceDetailTopButton;
