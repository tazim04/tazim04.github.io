import Carousel from "./Carousel";
import Products from "./Products";
import groceryItems from "./groceryItems";

const Home = ({ cartNumber, setCartNumber, cart, setCart }) => {
  return (
    <div class="homepage">
      <Carousel />

      <Products setCartNumber={setCartNumber} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Home;
