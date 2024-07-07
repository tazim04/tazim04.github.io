import "./styles/Products.css";
import ProductCard from "./ProductCard";
import groceryItems from "./groceryItems";

const Products = ({ setCartNumber, cart, setCart }) => {
  return (
    <div class="Products">
      <div class="container" style={{ position: "relative", top: 100 }}>
        <div class="services">
          <h1 class="display-2 fw-bold text-black d-flex justify-content-center mb-5">
            See our products!
          </h1>
          <div class="row d-flex justify-content-center">
            {groceryItems.map((product) => (
              <div key={product.id} class="col-md-3 py-4 px-4">
                <ProductCard
                  setCartNumber={setCartNumber}
                  product={product}
                  cart={cart}
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

export default Products;
