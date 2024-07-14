import { useState, useEffect } from "react";
import "./styles/Cart.css";
import CartItem from "./CartItem";
import { Link, useHistory } from "react-router-dom";

const Cart = ({
  show,
  setShow,
  cart,
  setCart,
  setCartNumber,
  selectedRadio,
  setSelectedRadio,
}) => {
  const [modalDisplay, setModalDisplay] = useState("none");

  const history = useHistory(); // used to redirect to checkout page

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

  const cartNotEmpty = () => {
    if (cart.length > 0) {
      return (
        <div
          class="proceed"
          style={{ fontWeight: "500", textAlign: "center", paddingTop: "10px" }}
        >
          <div
            style={{ position: "absolute", bottom: "180px", right: "290px" }}
          >
            <div
              class="shipToAddress"
              style={{
                border: "2px solid black",
                display: "inline-block",
                borderRadius: "15px",
                cursor: "pointer",
                marginRight: "50px",
              }}
              onClick={() => handleRadioClick("shipping")}
            >
              <div
                class="form-check"
                style={{ padding: "20px 100px 20px 50px" }}
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="shipping"
                  id="shipping"
                  checked={selectedRadio === "shipping"}
                  onChange={() => handleRadioClick}
                />
                <label class="form-check-label" for="shipping">
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
              onClick={() => handleRadioClick("pickup")}
            >
              <div
                class="form-check"
                style={{ padding: "20px 100px 20px 50px" }}
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="pickup"
                  id="pickup"
                  checked={selectedRadio === "pickup"}
                  onChange={() => handleRadioClick}
                />
                <label class="form-check-label" for="pickup">
                  Pick up in store
                </label>
              </div>
            </div>
          </div>
          <div class="total" style={{}}>
            <h3>Total: ${calculateTotal()}</h3>
          </div>
          <Link
            to={`/${selectedRadio}`}
            class="btn checkout"
            style={{
              width: "250px",
              background: "#75DA6D",
              fontWeight: "bold",
              position: "absolute",
              bottom: "40px",
              right: "100px",
            }}
            onClick={() => {
              setShow(false);
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      );
    }
  };

  const handleRadioClick = (selected) => {
    console.log("Selected: " + selected);
    switch (selected) {
      case "shipping":
        setSelectedRadio("shipping");
        break;
      case "pickup":
        setSelectedRadio("pickup");
        break;
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div id="myModal" class="modal" style={{ display: modalDisplay }}>
      <div class="modal-content" style={{ width: "80%" }}>
        <div class="close" onClick={handleCloseModal}>
          &times;
        </div>
        <h3>Cart</h3>
        <div class="items" style={{ height: "400px" }}>
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

        <div class="cartNotEmpty">{cartNotEmpty()}</div>
      </div>
    </div>
  );
};

export default Cart;
