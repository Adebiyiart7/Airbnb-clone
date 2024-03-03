import { Image, Stack, Text } from "@chakra-ui/react";
import { CategoryProps } from "../data/categories";

interface Props {
  active: boolean;
  category: CategoryProps;
}

const Category = ({ active, category }: Props) => {
  return (
    <Stack
      alignItems="center"
      opacity={active ? 1 : 0.65}
      borderBottomWidth={active ? 2 : 0}
      borderColor="black"
      pb={4}
    >
      <Image
        src={category.image}
        boxSize={24}
        height={"24px"}
        width={"24px"}
        aspectRatio={1}
        lineHeight="10px"
      />
      <Text
        fontSize="12px"
        fontWeight="500"
        lineHeight="10px"
        style={{ textWrap: "nowrap" }}
      >
        {category.name}
      </Text>
    </Stack>
  );
};

export default Category;
