import Carousel from "./Carousel";
import Products from "./Products";

const Home = ({ cartNumber, setCartNumber, cart, setCart, lang }) => {
  return (
    <div class="homepage">
      <Carousel lang={lang} />

      <Products
        setCartNumber={setCartNumber}
        cart={cart}
        setCart={setCart}
        lang={lang}
      />
    </div>
  );
};

export default Home;
