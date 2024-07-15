import React from "react";
import CartItem from "./CartItem";
import "./styles/CheckOut.css";
import { Link, useHistory } from "react-router-dom";

const CheckOut = ({
  cart,
  form,
  setCart,
  setCartNumber,
  selectedRadio,
  cartNumber,
  orders,
  setOrders,
}) => {
  const history = useHistory();
  let formType = ""; // shipping or pickup information

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const calculateTotalBeforeTax = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const calculateTax = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return (total * 0.13).toFixed(2);
  };

  const calculateTotalWithTax = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return (total * 1.13).toFixed(2);
  };

  const handlePlaceOrder = () => {
    const orderNumber = generateOrderNumber();
    const totalBeforeTax = calculateTotalBeforeTax();
    const tax = calculateTax();
    const totalWithTax = calculateTotalWithTax();
    const orderType = formType;

    let dateObj = new Date();

    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    const date = `${day}-${month}-${year}`; // get current date

    console.log("Placing order...");
    console.log("Order Number: " + orderNumber);

    setOrders((prev) => [
      ...prev,
      {
        orderNumber,
        cart,
        totalBeforeTax,
        tax,
        totalWithTax,
        form,
        orderType,
        date,
        numItems: cartNumber,
      },
    ]); // add order to orders array
    console.log(orders[0]);

    setCart([]); // clear cart
    setCartNumber(0); // reset cart number

    history.push("/confirmation"); // redirect to confirmation page
  };

  const renderFormInfo = () => {
    formType = selectedRadio;
    console.log(formType);

    let info = "";

    if (formType === "shipping") {
      info = "Shipping Information:";
      return (
        <div>
          <h4 style={{ position: "relative", right: "10px" }}>{info}</h4>
          <p>
            <strong>First Name:</strong> {form.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {form.lastName}
          </p>
          <p>
            <strong>Street Address:</strong> {form.streetAddress}
          </p>
          <p>
            <strong>Province:</strong> {form.province}
          </p>
          <p>
            <strong>City:</strong> {form.city}
          </p>
          <p>
            <strong>Postal Code:</strong> {form.postalCode}
          </p>
        </div>
      );
    } else {
      info = "Pickup Information:";
      return (
        <div>
          <h4 style={{ position: "relative", right: "10px" }}>{info}</h4>
          <p>
            <strong>First Name:</strong> {form.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {form.lastName}
          </p>
          <p>
            <strong>Location:</strong> {form.location}
          </p>
          <p>
            <strong>Pick-Up Date:</strong> {form.pickUpDate}
          </p>
          <p>
            <strong>Pick-Up Time:</strong> {form.pickUpTime}
          </p>
        </div>
      );
    }
  };

  const renderCartInfo = () => {
    return (
      <div>
        <ul>
          {cart.map((item) => (
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
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ padding: "10px 0px 0px 0px ", textAlign: "center" }}>
        Checkout ({cartNumber} items)
      </h1>
      <div
        style={{
          paddingLeft: "140px",
          borderTop: "solid black 3px",
        }}
      >
        <div
          style={{
            paddingLeft: "20px",
            paddingTop: "30px",
          }}
        >
          <div class="row">
            <h2 style={{ paddingLeft: "10px" }}>Review Order:</h2>

            <div
              class="col-md-6"
              style={{
                width: "55%",
                height: "450px",
                overflowY: "scroll",
              }}
            >
              {renderCartInfo()}
              <div style={{ paddingLeft: "50px" }}>{renderFormInfo()}</div>
            </div>
            <div class="col-md-4">
              <h3 style={{ textAlign: "center" }}>Order Summary</h3>
              <p>
                <strong>Items ({cartNumber}): </strong>$
                {calculateTotalBeforeTax()}
              </p>
              <p>
                <strong>Estimated Tax: </strong>${calculateTax()}
              </p>
              <p style={{ fontSize: "1.5em", color: "red" }}>
                <strong>Order Total: ${calculateTotalWithTax()}</strong>
              </p>
              <button class="btn placeOrder" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;