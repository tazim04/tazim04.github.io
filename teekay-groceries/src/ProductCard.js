import React from "react";
import groceryItems from "./groceryItems";
import add_to_cart from "./assets/add_to_cart.png";

const ProductCard = ({ product, setcartNumber, cart, setCart }) => {
  const { id, name, image, description, price, unit, pricePerKg } = product;

  const addToCart = () => {
    const itemInCartIndex = cart.findIndex((item) => item.id === id); // check if item is already in the cart
    setCart((prevCart) => {
      if (itemInCartIndex !== -1) {
        const newCart = [...prevCart]; // get previous cart
        newCart[itemInCartIndex] = {
          // set new cart with updated quantity of item
          ...newCart[itemInCartIndex],
          quantity: newCart[itemInCartIndex].quantity + 1,
        };

        return newCart;
      } else {
        // if item is not in the cart
        return [...prevCart, { id, name, price, image, quantity: 1 }]; // add new item to cart
      }
    });
    setcartNumber((prev) => prev + 1);
  };

  return (
    <div class="product-card">
      <div class="card" style={{ height: "380px" }}>
        <div
          class="mx-auto"
          style={{ height: "10em", paddingTop: "2em", paddingBottom: "8em" }}
        >
          <img
            src={image}
            class="card-img-top "
            alt={name}
            style={{ maxWidth: "8em", minHeight: "8em" }}
          />
        </div>
        <div
          class="card-body d-flex flex-column justify-content-between"
          style={{ height: "200px" }}
        >
          <h5 class="card-title">{name}</h5>
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontSize: "13px", paddingBottom: "10px" }}
          >
            {description}
          </h6>

          <h5 class="card-title" style={{ fontSize: "20px" }}>
            ${price} avg. {unit}
          </h5>
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontSize: "13px", paddingBottom: "10px" }}
          >
            {pricePerKg ? `(Price per kg: $${pricePerKg})` : ""}
          </h6>

          <div
            class="btn add-To-Cart"
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
