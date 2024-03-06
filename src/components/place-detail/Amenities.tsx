import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import TextWithLeftIcon from "../TextWithLeftIcon";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { MdKitchen, MdPark, MdPool, MdSmokeFree, MdWifi } from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";

const iconSize = 26;

const Amenities = () => {
  return (
    <Box>
      <SectionTitle>What this place offers</SectionTitle>
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <Box display="flex" flexDir="column" gap={4}>
          <TextWithLeftIcon
            Icon={<LiaUmbrellaBeachSolid size={iconSize} />}
            text="Beach access – Beachfront"
          />
          <TextWithLeftIcon Icon={<MdWifi size={iconSize} />} text="Wifi" />
          <TextWithLeftIcon Icon={<MdPool size={iconSize} />} text="Pool" />
          <TextWithLeftIcon
            strokeText
            Icon={<MdSmokeFree size={iconSize} />}
            text="Smoke Alarm"
          />
        </Box>
        <Box display="flex" flexDir="column" gap={4}>
          <TextWithLeftIcon
            Icon={<MdKitchen size={iconSize} />}
            text="Kitchen"
          />
          <TextWithLeftIcon
            Icon={<MdPark size={iconSize} />}
            text="Free parking on premises"
          />
          <TextWithLeftIcon
            Icon={<GiSmokeBomb size={iconSize} />}
            text="Carborn monoxide alarm"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Amenities;
