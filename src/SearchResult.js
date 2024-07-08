import groceryItems from "./groceryItems";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const SearchResult = ({ cart, setCart, setCartNumber }) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search") || ""; // get search query from URL

  // get items that match search query
  const filteredItems = groceryItems.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div class="Products">
      <div class="container" style={{ position: "relative", top: 100 }}>
        <div class="services">
          <h1 class="display-10 fw-bold text-black d-flex justify-content-center mb-5">
            Search Results...
          </h1>
          <div class="row d-flex justify-content-center">
            {search != "" && filteredItems.length > 0 ? ( // check if search query is not empty and items are found
              filteredItems.map((product) => (
                <div key={product.id} class="col-md-3 py-4 px-4">
                  <ProductCard
                    setCartNumber={setCartNumber}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                  />
                </div>
              ))
            ) : (
              // if no items are found
              <h5 style={{ textAlign: "center", paddingTop: "50px" }}>
                No items found!
              </h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
