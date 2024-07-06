import Carousel from "./Carousel";
import Deals from "./Deals";

const Home = ({ cartNumber, setcartNumber }) => {
  return (
    <div className="homepage">
      <Carousel />
      <Deals setcartNumber={setcartNumber} />
    </div>
  );
};

export default Home;
