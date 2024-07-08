import React from "react";

const CheckOut = ({ cart, form }) => {
  const renderFormInfo = () => {
    return (
      <div>
        <h3>Form Info:</h3>
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
  };

  const renderCartInfo = () => {
    return (
      <div>
        <h3>Cart Info:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - Quantity: {item.quantity} - Price:
              ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Confirm Information</h1>
      {renderFormInfo()}
      {renderCartInfo()}

      <button
        className="btn"
        style={{
          width: "250px",
          background: "#75DA6D",
          fontWeight: "bold",
          position: "relative",
          left: "41%",
          top: "40px",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckOut;
