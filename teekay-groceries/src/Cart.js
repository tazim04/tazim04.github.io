import { useState, useEffect } from "react";
import "./styles/Cart.css";
import CartItem from "./CartItem";

const Cart = ({ show, setShow, cart, setCart, setCartNumber }) => {
  const [modalDisplay, setModalDisplay] = useState("none");
  const [selectedRadio, setSelectedRadio] = useState("address");

  useEffect(() => {
    if (show) {
      setModalDisplay("block"); // show modal
      console.log(cart);
    } else {
      setModalDisplay("none");
    }
  }, [show]);

  const handleCloseModal = () => {
    setShow(false); // hide the cart
  };

  const shippingOptions = () => {
    if (cart.length > 0) {
      return (
        <div class="proceed" style={{ fontWeight: "500", textAlign: "center" }}>
          <div
            class="shipToAddress"
            style={{
              border: "2px solid black",
              display: "inline-block",
              borderRadius: "15px",
              cursor: "pointer",
              marginRight: "50px",
            }}
            onClick={() => handleRadioClick("address")}
          >
            <div class="form-check" style={{ padding: "20px 100px 20px 50px" }}>
              <input
                class="form-check-input"
                type="radio"
                name="address"
                id="address"
                checked={selectedRadio === "address"}
                onChange={() => handleRadioClick}
              />
              <label class="form-check-label" for="address">
                Ship to an address
              </label>
            </div>
          </div>

          <div
            class="pickUp"
            style={{
              border: "2px solid black",
              display: "inline-block",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={() => handleRadioClick("store")}
          >
            <div class="form-check" style={{ padding: "20px 100px 20px 50px" }}>
              <input
                class="form-check-input"
                type="radio"
                name="store"
                id="store"
                checked={selectedRadio === "store"}
                onChange={() => handleRadioClick}
              />
              <label class="form-check-label" for="store">
                Pick up in store
              </label>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleRadioClick = (selected) => {
    console.log("Selected: " + selected);
    switch (selected) {
      case "address":
        setSelectedRadio("address");
        break;
      case "store":
        setSelectedRadio("store");
        break;
    }
  };

  return (
    <div id="myModal" class="modal" style={{ display: modalDisplay }}>
      <div class="modal-content" style={{ width: "80%" }}>
        <div class="close" onClick={handleCloseModal}>
          &times;
        </div>
        <h3>Cart</h3>
        <div class="items">
          {cart.length > 0 ? ( // if there are items in the cart
            cart.map((item) => (
              <div key={item.id} class="col-md-3 py-4 px-4">
                <CartItem
                  id={item.id}
                  name={item.name}
                  price={item.price * item.quantity}
                  image={item.image}
                  quantity={item.quantity}
                  cart={cart}
                  setCart={setCart}
                  setCartNumber={setCartNumber}
                />
              </div>
            ))
          ) : (
            <div class="noItems">
              <h5 style={{ textAlign: "center", paddingTop: "50px" }}>
                No items in your cart!
              </h5>
            </div>
          )}
        </div>

        <div class="shippingOptions">{shippingOptions()}</div>
      </div>
    </div>
  );
};

export default Cart;
