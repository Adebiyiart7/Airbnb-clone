import { Flex, HStack } from "@chakra-ui/react";
import categories from "../data/categories";
import Category from "./Category";
import Filters from "./Filters";
import ToggleTax from "./ToggleTax";

interface Props {
  activeCategory: number;
  setActiveCategory: (id: number) => void;
}

const Categories = ({ activeCategory, setActiveCategory }: Props) => {
  return (
    <HStack gap={6}>
      <Flex
        gap={8}
        overflowX={"auto"}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((category) => (
          <Category
            category={category}
            active={category.id === activeCategory}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </Flex>
      <HStack gap={5}>
        <Filters />
        <ToggleTax />
      </HStack>
    </HStack>
  );
};

export default Categories;
