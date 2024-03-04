import { Box } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Body from "../components/home/Body";
import { useEffect, useState } from "react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar fullNavBar />
      <Box paddingX={screenWidth > 600 ? 10 : 4}>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Body activeCategory={activeCategory} />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
