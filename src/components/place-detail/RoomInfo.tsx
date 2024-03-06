import { Box, HStack, Text } from "@chakra-ui/react";
import { MdBed } from "react-icons/md";
import SectionTitle from "../SectionTitle";

const RoomInfo = () => {
  const rooms = [
    { bedroom: "Bedroom 1", bedType: "1 double bed" },
    { bedroom: "Bedroom 2", bedType: "1 single bed" },
    { bedroom: "Bedroom 3", bedType: "1 single bed" },
  ];

  return (
    <Box>
      <SectionTitle>Where you'll sleep</SectionTitle>
      <HStack width="100%" gap={4}>
        {rooms.map((room) => (
          <Box borderWidth={1} rounded={10} p={5} flex={1}>
            <Box>
              <MdBed size={24} />
            </Box>
            <Text fontWeight="500" mt={4}>
              {room.bedroom}
            </Text>
            <Text fontSize="sm" mt={2}>
              {room.bedType}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default RoomInfo;
