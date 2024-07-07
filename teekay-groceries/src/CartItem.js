import "./styles//CartItem.css";
import garbage from "./assets/garbage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  cart,
  setCart,
  setCartNumber,
}) => {
  const removeFromCart = () => {
    console.log("Removing " + name + " from cart");
    const newCart = [...cart]; // get current cart
    const itemInCart = newCart.findIndex((item) => item.id === id); // look for item in cart by id, get index
    newCart.splice(itemInCart, 1); // remove from cart (array)
    setCart(newCart); // update cart
    console.log("Cart number: " + cart.length);
    console.log("Quantity: " + quantity);
    setCartNumber((prev) => prev - quantity); // update cart number
    toast.error(name + " removed from cart!");
  };
  const incrementQuantity = () => {
    console.log("Incrementing quantity of " + name + " in cart");
    const newCart = [...cart]; // get current cart
    const itemInCart = newCart.findIndex((item) => item.id === id); // look for item in cart by id, get index
    newCart[itemInCart].quantity += 1; // increment quantity of item in cart
    setCart(newCart); // update cart
    setCartNumber((prev) => prev + 1); // update cart number
  };
  const decrementQuantity = () => {
    console.log("Decrementing quantity of " + name + " in cart");
    const newCart = [...cart]; // get current cart
    const itemInCart = newCart.findIndex((item) => item.id === id); // look for item in cart by id, get index
    newCart[itemInCart].quantity -= 1; // increment quantity of item in cart
    setCart(newCart); // update cart
    setCartNumber((prev) => prev - 1); // update cart number
  };
  const decrementButton = () => {
    if (quantity > 1) {
      return (
        <div
          class="changeQuantity"
          style={{
            float: "left",
            paddingLeft: "10px",
            fontWeight: "bold",
          }}
          onClick={decrementQuantity}
        >
          -
        </div>
      );
    }
  };

  return (
    <div
      class="card row cart container-fluid"
      style={{
        width: "420%",
        borderBottom: "1px solid black",
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
      }}
    >
      <div class="card-body d-flex align-items-center">
        <img
          src={image}
          class="card-img-top col"
          alt={name}
          style={{ maxWidth: "8em", minHeight: "8em", marginRight: "30px" }}
        />
        <div class="card-title col">
          <h5 style={{}}>{name}</h5>
          <p style={{ color: "#4EAA46", fontWeight: "bold" }}>In Stock</p>
          <div
            class="quantity"
            style={{
              background: "#D6D6D6",
              display: "inline-block",
              borderRadius: "50px",
            }}
          >
            {decrementButton()}
            <p
              class="my-auto"
              style={{
                fontWeight: "bold",
                padding: "0 10px 0 10px",
                display: "inline",
              }}
            >
              Qty: {quantity}
            </p>
            <div
              class="changeQuantity"
              style={{
                float: "right",
                paddingRight: "10px",
                fontWeight: "bold",
              }}
              onClick={incrementQuantity}
            >
              +
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <h5 class="my-auto" style={{ textAlign: "center" }}>
            {price.toFixed(2)}
          </h5>
          <input
            type="image"
            src={garbage}
            class="btTxt my-auto"
            style={{
              marginLeft: "25px",
              paddingRight: "10px",
            }}
            onClick={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
