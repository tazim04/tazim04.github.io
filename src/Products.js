import "./styles/Products.css";
import ProductCard from "./ProductCard";
import groceryItems_en from "./GroceryItems_en";
import groceryItems_fr from "./GroceryItems_fr";
import { useState } from "react";
import translations from "./lang/translations";

const Products = ({ setCartNumber, cart, setCart, lang }) => {
  const [filter, setFilter] = useState([]);

  const t = translations[lang]; // get translations for selected language

  const groceryItems = lang === "EN" ? groceryItems_en : groceryItems_fr; // get grocery items based on selected language

  const handleFilterChange = (e) => {
    console.log("filter changed");
    if (e.target.checked) {
      setFilter([...filter, e.target.value]); // add filter to array
    } else {
      setFilter(filter.filter((item) => item !== e.target.value)); // remove filter from array
    }
    console.log(filter);
  };

  return (
    <div class="Products">
      <div class="container" style={{ position: "relative", top: 100 }}>
        <div>
          <h1 class="display-2 fw-bold text-black d-flex justify-content-center mb-5">
            {t.home.seeProducts}
          </h1>

          <div style={{ paddingLeft: "15px" }}>
            <h3>{t.home.filters}</h3>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Produce"
                onChange={handleFilterChange}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                {t.home.filterVals.produce}
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="Dairy"
                onChange={handleFilterChange}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                {t.home.filterVals.dairy}
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Meat"
                onChange={handleFilterChange}
              />
              <label class="form-check-label" for="inlineCheckbox3">
                {t.home.filterVals.meat}
              </label>
            </div>
          </div>

          <div class="row d-flex justify-content-center">
            {filter.length === 0 // check if no filters are selected
              ? groceryItems.map((product) => (
                  <div key={product.id} class="col-md-3 py-4 px-4">
                    <ProductCard
                      setCartNumber={setCartNumber}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      lang={lang}
                    />
                  </div>
                ))
              : filter.map((category) => {
                  // if filters are selected
                  const filteredItems = groceryItems.filter(
                    (product) => product.category.includes(category) // filter items by category
                  );
                  return filteredItems.map((product) => (
                    <div key={product.id} class="col-md-3 py-4 px-4">
                      <ProductCard
                        setCartNumber={setCartNumber}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        lang={lang}
                      />
                    </div>
                  ));
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
