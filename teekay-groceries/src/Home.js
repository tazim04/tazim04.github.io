import Carousel from "./home_components/Carousel";
import Deals from "./home_components/Deals";

const Home = () => {
  return (
    <div className="homepage">
      <Carousel />
      <Deals />
    </div>
  );
};

export default Home;
