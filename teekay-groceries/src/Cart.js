import { useState, useEffect } from "react";
import "./styles/Cart.css";
import CartItem from "./CartItem";

const Cart = ({ show, setShow, cart, setCart, setCartNumber }) => {
  const [modalDisplay, setModalDisplay] = useState("none");

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
            // if there are no items in the cart
            <div class="noItems">
              <h5 style={{ textAlign: "center", paddingTop: "50px" }}>
                No items in your cart!
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
