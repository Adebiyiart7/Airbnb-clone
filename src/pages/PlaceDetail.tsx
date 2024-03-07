import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Body from "../components/place-detail/Body";

const PlaceDetail = () => {
  return (
    <>
      <NavBar fullNavBar={false} />
      <Body />
      <Footer />
    </>
  );
};

export default PlaceDetail;
