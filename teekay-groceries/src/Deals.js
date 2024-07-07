import "./styles/Deals.css";
import ProductCard from "./ProductCard";
import groceryItems from "./groceryItems";

const Deals = ({ setcartNumber, setCart }) => {
  return (
    <div class="deals">
      <div class="container" style={{ position: "relative", top: 200 }}>
        <div class="services">
          <h1 class="display-2 fw-bold text-black d-flex justify-content-center mb-5">
            This weeks deals!
          </h1>
          <div class="row d-flex justify-content-center">
            {groceryItems.map((product) => (
              <div key={product.id} class="col-md-3 py-4 px-4">
                <ProductCard
                  setcartNumber={setcartNumber}
                  product={product}
                  setCart={setCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
