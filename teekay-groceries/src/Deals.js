import "./styles/Deals.css";
import ProductCard from "./ProductCard";

const Deals = ({ setcartNumber }) => {
  return (
    <div class="deals">
      <div class="container" style={{ position: "relative", top: 200 }}>
        <div class="services">
          <h1 class="display-2 fw-bold text-black d-flex justify-content-center mb-5">
            This weeks deals!
          </h1>
          <div class="row d-flex justify-content-center">
            <div class="col-md-3 py-4 px-4">
              <ProductCard setcartNumber={setcartNumber} />
            </div>
            <div class="col-md-3 py-4 px-4">
              <ProductCard setcartNumber={setcartNumber} />
            </div>
            <div class="col-md-3 py-4 px-4">
              <ProductCard setcartNumber={setcartNumber} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
