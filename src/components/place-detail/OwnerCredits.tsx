import React from "react";
import AccountCard from "../AccountCard";
import { Box, Image } from "@chakra-ui/react";
import image from "../../assets/categories/amazing-pools.jpg";
import { MdOutlineStarRate } from "react-icons/md";

const OwnerCredits = React.memo(() => {
  return (
    <Box gap={4} display="flex" flexDir="column">
      <AccountCard
        RightItem={
          <Box marginBottom={2}>
            <MdOutlineStarRate size={24} />
          </Box>
        }
        title="Patricia Laginha is a Superhost"
        subTitle="Superhosts are experienced, highly rated Hosts."
      />
      <AccountCard
        RightItem={
          <Image src={image} height={6} aspectRatio={1} marginBottom={2} />
        }
        title="Dive right in"
        subTitle="This is one of the few places in the area with a pool."
      />
    </Box>
  );
});

export default OwnerCredits;
