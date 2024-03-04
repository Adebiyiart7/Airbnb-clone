import { Box, Center, Divider, HStack } from "@chakra-ui/react";
import SearchBoxField from "./SearchBoxField";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <HStack
      alignSelf="center"
      boxShadow="lg"
      rounded={15000}
      paddingY={1.5}
      paddingX={2}
      mb={5}
      borderWidth={1}
    >
      <Box width={200}>
        <SearchBoxField title="Where" subTitle="Search Destinations" />
      </Box>
      <Center height="32px">
        <Divider orientation="vertical" borderColor={"gray.300"} />
      </Center>
      <SearchBoxField title="Check out" subTitle="Add Dates" />
      <Center height="32px">
        <Divider orientation="vertical" borderColor={"gray.300"} />
      </Center>
      <SearchBoxField title="Check in" subTitle="Add Dates" />
      <Center height="32px">
        <Divider orientation="vertical" borderColor={"gray.300"} />
      </Center>
      <Box width={200}>
        <SearchBoxField title="Who" subTitle="Add Guests" />
      </Box>
      <Box rounded="100" bg="primary" padding={"14px"} cursor="pointer">
        <IoSearch color="white" size={22} />
      </Box>
    </HStack>
  );
};

export default SearchBox;
