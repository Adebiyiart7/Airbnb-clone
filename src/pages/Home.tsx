import { Box } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Body from "../components/home/Body";
import { useState } from "react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <>
      <Box paddingX={10} paddingBottom={5} mb={5} borderWidth="1px">
        <NavBar />
      </Box>
      <Box paddingX={10}>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Body activeCategory={activeCategory} />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Home;
