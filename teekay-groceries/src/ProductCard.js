import React from "react";
import groceryItems from "./groceryItems";
import add_to_cart from "./assets/add_to_cart.png";

const ProductCard = ({ product, setcartNumber, setCart }) => {
  const { id, name, image, description, price, unit, pricePerKg } = product;

  const addToCart = () => {
    setcartNumber((prev) => prev + 1);
    setCart((prevCart) => [...prevCart, { id, name, price, image }]);
  };

  return (
    <div className="product-card">
      <div className="card" style={{ height: "380px" }}>
        <div
          class="mx-auto"
          style={{ height: "10em", paddingTop: "2em", paddingBottom: "8em" }}
        >
          <img
            src={image}
            className="card-img-top "
            alt={name}
            style={{ maxWidth: "8em", minHeight: "8em" }}
          />
        </div>
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ height: "200px" }}
        >
          <h5 className="card-title">{name}</h5>
          <h6
            className="card-subtitle mb-2 text-body-secondary"
            style={{ fontSize: "13px", paddingBottom: "10px" }}
          >
            {description}
          </h6>

          <h5 className="card-title" style={{ fontSize: "20px" }}>
            ${price} avg. {unit}
          </h5>
          <h6
            className="card-subtitle mb-2 text-body-secondary"
            style={{ fontSize: "13px", paddingBottom: "10px" }}
          >
            {pricePerKg ? `(Price per kg: $${pricePerKg})` : ""}
          </h6>

          <div
            className="btn addToCart"
            onClick={addToCart}
            style={{
              background: "darkgrey",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              left: "75%",
              bottom: "8%",
            }}
          >
            <img src={add_to_cart} alt="Add to Cart" style={{ width: "2em" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
