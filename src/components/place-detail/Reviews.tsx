import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import Review from "../Review";

const Reviews = () => {
  return (
    <Box>
      <SectionTitle subTitle="Average rating will appear after 3 reviews">
        2 Reviews
      </SectionTitle>
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={{ sm: 10, md: 20 }}>
        <Review ownerName="Héctor" ownnerLocation="Salamanca, Spain" />
        <Review
          ownerName="Karina"
          ownnerLocation="King's Lynn, United Kingdom"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Reviews;
