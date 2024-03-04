import { Box, Button, HStack } from "@chakra-ui/react";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

const PlaceDetailTopButton = () => {
  return (
    <Box width="100%" position="relative">
      <HStack float="inline-end">
        <Button leftIcon={<MdOutlineFileUpload />}>Share</Button>
        <Button leftIcon={<IoHeartOutline />}>Save</Button>
      </HStack>
    </Box>
  );
};

export default PlaceDetailTopButton;
