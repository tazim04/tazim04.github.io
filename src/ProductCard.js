import React, { useState, useEffect } from "react";
import add_to_cart from "./assets/add_to_cart.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import translations from "./lang/translations";
import "./styles/ProductCard.css";
import details from "./assets/details.png";
import * as bootstrap from "bootstrap";

const ProductCard = ({ product, setCartNumber, cart, setCart, lang }) => {
  const {
    id,
    name,
    image,
    description,
    price,
    unit,
    pricePerKg,
    nutritionalFacts,
  } = product;

  const [isFlipped, setIsFlipped] = useState(false);

  const t = translations[lang]; // get translations for selected language

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
    setCartNumber((prev) => prev + 1);
    toast.success(name + " " + t.addedToCart);
  };

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  // initialize bootstrap tooltips with useEffect, from bootstrap docs
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    // add flipped class if card is flipped
    <div
      class={`product-card ${isFlipped ? "flipped" : ""}`}
      onMouseLeave={() => {
        setIsFlipped(false);
      }}
    >
      <div class="inner">
        <div class="front">
          <div class="card" style={{ height: "380px" }}>
            <img
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Product Details"
              src={details}
              alt=""
              style={{
                width: "10%",
                padding: "5px 0px 0px 5px",
              }}
              onClick={flip}
            />

            <div
              class="mx-auto"
              style={{
                height: "10em",
                paddingTop: "2em",
                paddingBottom: "8em",
              }}
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
                <img
                  src={add_to_cart}
                  alt="Add to Cart"
                  style={{ width: "2em" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div class="card" style={{ height: "380px" }}>
            <div
              class="d-flex flex-column justify-content-between"
              style={{ height: "200px", padding: "20px 0px 0px 20px" }}
            >
              <h5 class="card-title">{name}</h5>
              <h6>Calories: {nutritionalFacts.calories}</h6>
              <h6>Protein: {nutritionalFacts.protein}</h6>
              <h6>Carbs: {nutritionalFacts.carbs}</h6>
              <h6>Fat: {nutritionalFacts.fat}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
