import { Box } from "@chakra-ui/react";
import React from "react";

const CheckoutCard = React.memo(() => {
  return <Box boxShadow="lg" rounded={10} p={4} mt={5} borderWidth={1}></Box>;
});

export default CheckoutCard;
