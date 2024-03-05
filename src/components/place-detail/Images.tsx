import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import image1 from "../../assets/detail-image-1.jpg";
import image2 from "../../assets/detail-image-2.jpg";
import image3 from "../../assets/detail-image-3.jpg";
import image4 from "../../assets/detail-image-4.jpg";
import image5 from "../../assets/detail-image-5.jpg";

const height = 320;

const Images = () => {
  const images = [image2, image3, image4, image5];
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <HStack mt={4} gap={2} borderRadius={16}>
      {isLargerThan700 && (
        <Box flex={1}>
          <Image height={height} width="100%" src={image1} objectFit="cover" />
        </Box>
      )}
      <SimpleGrid
        flex={1}
        columns={{ base: 2 }}
        spacing={2}
        minHeight={height}
        maxHeight={height}
        overflow="hidden"
      >
        {images.map((image, index) => (
          <Box key={index} height="100%">
            <Image width="100%" height="100%" objectFit="cover" src={image} />
          </Box>
        ))}
      </SimpleGrid>
    </HStack>
  );
};

export default Images;
