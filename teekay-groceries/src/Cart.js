import { useState, useEffect } from "react";
import "./styles/Cart.css";
import CartItem from "./CartItem";

const Cart = ({ show, setShow, cart }) => {
  const [modalDisplay, setModalDisplay] = useState("none");

  useEffect(() => {
    if (show) {
      setModalDisplay("block"); // show modal
    } else {
      setModalDisplay("none");
    }
  }, [show]);

  const handleCloseModal = () => {
    setShow(false); // hide the cart
  };

  return (
    <div id="myModal" class="modal" style={{ display: modalDisplay }}>
      <div class="modal-content" style={{ width: "50%" }}>
        <div class="close" onClick={handleCloseModal}>
          &times;
        </div>
        <h3>Cart</h3>
        <div class="items">
          {cart.length > 0 ? ( // if there are items in the cart
            cart.map((item) => (
              <div key={item.id} class="col-md-3 py-4 px-4">
                <CartItem
                  name={item.name}
                  price={item.price}
                  image={item.image}
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
