import {
  Box,
  Divider,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

interface LinkProps {
  children: ReactNode;
}

const CustomLink = React.memo(({ children }: LinkProps) => {
  return (
    <Link fontSize={15} mb={2} color="gray.700" display="block">
      {children}
    </Link>
  );
});

const Footer = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan850] = useMediaQuery("(min-width: 950px)");

  return (
    <Box px={isLargerThan600 ? 10 : 4} mt={10} bg="gray.50" borderTopWidth={1}>
      <SimpleGrid columns={{ sm: 1, md: 3 }} py={10}>
        <Box>
          <Heading fontSize={16} mb={5}>
            Support
          </Heading>
          <CustomLink>Help Center</CustomLink>
          <CustomLink>AirCover</CustomLink>
          <CustomLink>Anti-discrimination</CustomLink>
          <CustomLink>Disability support</CustomLink>
          <CustomLink>Cancellation options</CustomLink>
          <CustomLink>Report neighborhood concern</CustomLink>
        </Box>
        <Box>
          <Heading fontSize={16} mb={5}>
            Hosting
          </Heading>
          <CustomLink>Airbnb your home</CustomLink>
          <CustomLink>AirCover for Hosts</CustomLink>
          <CustomLink>Hosting resources</CustomLink>
          <CustomLink>Community forum</CustomLink>
          <CustomLink>Hosting responsibly</CustomLink>
          <CustomLink>Airbnb-friendly apartments</CustomLink>
          <CustomLink>Join a free Hosting class</CustomLink>
        </Box>
        <Box>
          <Heading fontSize={16} mb={5}>
            Airbnb
          </Heading>
          <CustomLink>Newsroom</CustomLink>
          <CustomLink>New features</CustomLink>
          <CustomLink>Careers</CustomLink>
          <CustomLink>Investors</CustomLink>
          <CustomLink>Gift cards</CustomLink>
          <CustomLink>Airbnb.org emergency stays</CustomLink>
        </Box>
      </SimpleGrid>
      <Divider width="100%" borderColor="gray.300" />
      <HStack
        py={4}
        justifyContent="space-between"
        flexDirection={isLargerThan850 ? "row" : "column"}
      >
        <HStack flexWrap="wrap" lineHeight={0.5} justifyContent="center">
          <CustomLink>© 2024 Airbnb, Inc.</CustomLink>
          <CustomLink> · Terms </CustomLink>
          <CustomLink> · Sitemap </CustomLink>
          <CustomLink> · Privacy </CustomLink>

          <CustomLink> · Your Privacy Choices</CustomLink>
        </HStack>
        <HStack gap={6}>
          <HStack>
            <Box mb={1.5}>
              <VscGlobe size={20} />
            </Box>
            <CustomLink>
              <Text fontWeight="500">English (US)</Text>
            </CustomLink>
          </HStack>
          <CustomLink>
            <Text fontWeight="500">$ USD</Text>
          </CustomLink>
          <HStack mb="6px" gap={1}>
            <AiFillFacebook size={22} />
            <AiFillTwitterSquare size={22} />
            <FaInstagramSquare size={22} />
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
