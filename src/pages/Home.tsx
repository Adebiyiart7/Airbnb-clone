import { Box } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Body from "../components/home/Body";

const Home = () => {
  return (
    <>
      <Box paddingX={10} paddingBottom={5} mb={5} borderWidth="1px">
        <NavBar />
      </Box>
      <Box paddingX={10}>
        <Categories />
        <Body />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Home;
