import Carousel from "./Carousel";
import Products from "./Products";
import groceryItems from "./groceryItems";

const Home = ({ cartNumber, setcartNumber, cart, setCart }) => {
  return (
    <div class="homepage">
      <Carousel />

      <Products setcartNumber={setcartNumber} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Home;
