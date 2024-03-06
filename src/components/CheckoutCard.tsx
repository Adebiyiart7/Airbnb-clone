import { Box, Center, Divider, HStack } from "@chakra-ui/react";
import React from "react";
import CheckoutItem from "./CheckoutItem";
import AppButton from "./Button";

const CheckoutCard = React.memo(() => {
  return (
    <Box boxShadow="lg" rounded={10} p={6} mt={5} borderWidth={1}>
      <HStack
        bg="#fff8f6"
        borderWidth={1}
        borderColor="primary"
        roundedTop={10}
        position="relative"
      >
        <CheckoutItem title="CHECK-IN" subTitle="3/5/2024" />
        <Center height="60px" borderColor="primary">
          <Divider orientation="vertical" />
        </Center>
        <CheckoutItem title="CHECKOUT" subTitle="3/11/2024" />
      </HStack>
      <Box
        borderTopWidth={0}
        borderWidth={1}
        borderColor="gray.400"
        borderTopColor="transparent"
        roundedBottom={10}
      >
        <CheckoutItem title="GUESTS" subTitle="1 guest" isDropdown />
      </Box>
      <Box marginTop={5}>
        <AppButton>Change Date</AppButton>
      </Box>
    </Box>
  );
});

export default CheckoutCard;
