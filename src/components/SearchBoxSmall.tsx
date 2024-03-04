import { Box, Center, Divider, HStack, Hide, Text } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

interface Props {
  fullNavBar: boolean;
}

const SearchBoxSmall = ({ fullNavBar }: Props) => {
  return (
    <HStack
      borderWidth={1}
      p={2}
      pl={4}
      mr={4}
      gap={4}
      boxShadow="lg"
      borderRadius={100}
      flex={1}
      justifyContent="space-between"
      maxWidth={!fullNavBar ? "400px" : "auto"}
    >
      <HStack gap={4}>
        <Text
          fontSize={15}
          style={{ textWrap: "nowrap" }}
          fontWeight="500"
          cursor="pointer"
        >
          Anywhere
        </Text>
        <Center height={6}>
          <Divider orientation="vertical" borderColor={"gray.300"} />
        </Center>
        <Text
          fontSize={15}
          style={{ textWrap: "nowrap" }}
          fontWeight="500"
          cursor="pointer"
          isTruncated
        >
          Any week
        </Text>
        <Hide breakpoint="(max-width: 445px)">
          <Center height={6}>
            <Divider orientation="vertical" borderColor={"gray.300"} />
          </Center>
          <Text
            fontSize={15}
            style={{ textWrap: "nowrap" }}
            cursor="pointer"
            isTruncated
          >
            Add Guest
          </Text>
        </Hide>
      </HStack>
      <Box rounded="100" bg="primary" padding={2} cursor="pointer" isTruncated>
        <IoSearch color="white" size={16} />
      </Box>
    </HStack>
  );
};

export default SearchBoxSmall;
