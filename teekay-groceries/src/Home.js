import Carousel from "./Carousel";
import Deals from "./Deals";
import groceryItems from "./groceryItems";

const Home = ({ cartNumber, setcartNumber, setCart }) => {
  return (
    <div className="homepage">
      <Carousel />
      <Deals setcartNumber={setcartNumber} setCart={setCart} />
    </div>
  );
};

export default Home;
