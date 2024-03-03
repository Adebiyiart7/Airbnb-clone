import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subTitle: string;
}

const SearchBoxField = ({ title, subTitle }: Props) => {
  return (
    <Box minW={120} px={4} cursor="pointer">
      <Text fontWeight="500" lineHeight={"19px"} fontSize={14}>
        {title}
      </Text>
      <Text color="gray" lineHeight={"19px"} fontSize={14}>
        {subTitle}
      </Text>
    </Box>
  );
};

export default SearchBoxField;
